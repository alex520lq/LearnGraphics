#requires -Version 5.1
<#
.SYNOPSIS
    Scaffold a new lab folder under LABS/ by copying an existing lab.

.DESCRIPTION
    Copies a lab folder, renames its html to <folder-name>.html, rewrites the page
    title/h2, fixes in-file references to the source lab, and optionally commits/pushes.

.PARAMETER Name
    Target folder name, e.g. 03-index-buffer (two digits + lowercase slug).

.PARAMETER Title
    Page title / h2 text. Defaults to "LearnGraphics - <Slug Words>".

.PARAMETER From
    Source lab folder. Defaults to the lab with the highest two-digit number.

.PARAMETER Message
    Commit message. Defaults to "feat(labs): <Name> init (from <From>)".

.PARAMETER Commit
    git add + commit the new lab.

.PARAMETER Push
    Commit and push to origin.

.EXAMPLE
    .\tools\new-lab.ps1 -Name 03-index-buffer -Title "LearnGraphics - Index Buffer"

.EXAMPLE
    .\tools\new-lab.ps1 -Name 03-index-buffer -Commit -Push
#>
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Name,

    [string]$Title,
    [string]$From,
    [string]$Message,

    [switch]$Commit,
    [switch]$Push
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$labsDir = Join-Path $repoRoot 'LABS'

if ($Name -notmatch '^\d{2}-[a-z0-9]+(-[a-z0-9]+)*$') {
    throw "Name must look like '03-index-buffer'. Got: '$Name'"
}

if (-not $From) {
    $From = Get-ChildItem -LiteralPath $labsDir -Directory |
        Where-Object { $_.Name -match '^\d{2}-' } |
        Sort-Object { [int]$_.Name.Substring(0, 2) } -Descending |
        Select-Object -First 1 -ExpandProperty Name
}
if (-not $From) { throw "No existing lab found under $labsDir to copy from." }

$srcDir = Join-Path $labsDir $From
$dstDir = Join-Path $labsDir $Name
if (-not (Test-Path -LiteralPath $srcDir)) { throw "Source lab not found: $srcDir" }
if (Test-Path -LiteralPath $dstDir) { throw "Target already exists: $dstDir" }

if (-not $Title) {
    $slug = $Name.Substring(3)
    $words = ($slug -split '-') | ForEach-Object { $_.Substring(0, 1).ToUpper() + $_.Substring(1) }
    $Title = 'LearnGraphics - ' + ($words -join ' ')
}

Copy-Item -LiteralPath $srcDir -Destination $dstDir -Recurse

$htmlFiles = @(Get-ChildItem -LiteralPath $dstDir -Filter '*.html' -File)
if ($htmlFiles.Count -ne 1) {
    throw "Expected exactly one .html in LABS/$From, found $($htmlFiles.Count). Rename the extra ones first."
}
$oldHtml = $htmlFiles[0]
if ($oldHtml.Name -ne "$Name.html") {
    Rename-Item -LiteralPath $oldHtml.FullName -NewName "$Name.html"
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
$textFiles = Get-ChildItem -LiteralPath $dstDir -Recurse -File |
    Where-Object { $_.Extension -in '.html', '.js', '.mjs', '.md', '.json' }
foreach ($f in $textFiles) {
    $text = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    $text = $text.Replace("$From.html", "$Name.html").Replace($From, $Name)
    if ($f.Name -eq "$Name.html") {
        $text = [regex]::Replace($text, '(?is)<title>.*?</title>', "<title>$Title</title>")
        $text = [regex]::Replace($text, '(?is)(<h2>)(.*?)(</h2>)', "`${1}$Title`${3}")
    }
    [System.IO.File]::WriteAllText($f.FullName, $text, $utf8)
}

Write-Output "Created LABS/$Name  (copied from LABS/$From)"
Write-Output "Title: $Title"
Get-ChildItem -LiteralPath $dstDir -File | ForEach-Object { Write-Output ("  {0}  ({1} bytes)" -f $_.Name, $_.Length) }
Write-Output ""
Write-Output "Next:"
Write-Output "  node .\LABS\$Name\serve.mjs"
Write-Output "  then edit .\LABS\$Name\main.js for the new lesson content"

if ($Commit -or $Push) {
    $git = (Get-Command git -ErrorAction SilentlyContinue).Source
    if (-not $git -and (Test-Path 'C:\Program Files\Git\cmd\git.exe')) { $git = 'C:\Program Files\Git\cmd\git.exe' }
    if (-not $git) { throw 'git executable not found.' }

    if (-not $Message) { $Message = "feat(labs): $Name init (from $From)" }
    $msgFile = Join-Path $env:TEMP ("newlab-" + [guid]::NewGuid().ToString('N') + ".txt")
    [System.IO.File]::WriteAllText($msgFile, $Message, $utf8)
    try {
        & $git -C $repoRoot add "LABS/$Name"
        & $git -C $repoRoot commit -F $msgFile
        if ($Push) { & $git -C $repoRoot push origin HEAD }
    }
    finally {
        Remove-Item -LiteralPath $msgFile -Force -ErrorAction SilentlyContinue
    }
}
