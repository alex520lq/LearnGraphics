# 阶段 00：环境与工程习惯

**类型**：必修。目标：独立启动、调试和提交一个最小 Web 项目。

工具：Git、Node.js LTS、VS Code（或同类编辑器）、Chrome/Edge、静态开发服务器。

- [ ] 安装并检查工具版本。
- [ ] Clone LearnGraphics。
- [ ] 创建本地实验目录并启动静态服务器。
- [ ] 使用 DevTools 查看 Console、Network、Sources。
- [ ] 完成一次 commit 和 push。

### 打开第一个 WebGL 实验

在仓库根目录运行：

```powershell
node .\LABS\01-first-webgl\serve.mjs
```

然后在浏览器打开 http://127.0.0.1:4173/ 。不要直接打开实验 HTML 文件；通过本地服务器访问可避免 `file://` 被 VS Code 或浏览器的受信任文件夹策略拦截。按 `Ctrl+C` 停止服务器。

**验收**：提交 NOTES/first-run.md，记录系统、工具版本、启动命令和第一次 Git 提交。

**游戏关联**：真实游戏项目需要可复现构建、资源调试和版本记录；图形 Bug 不只来自 Shader，也可能来自资源和运行环境。