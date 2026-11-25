# LearnGraphics

**从图形学基础到游戏实时渲染开发**

面向游戏开发的计算机图形学自学课程、实验与作品集。目标不是单纯学完大学课程，而是能够为一款尚未开发的游戏设计、实现、调试和优化渲染功能。

> 学习原则：先理解原理，再用最小 API 实现；每个知识点都要落到可运行实验；以作品验收，不以看完视频验收。

## 目标

- 建立数学、几何和渲染管线基础。
- 从原生 WebGL 1.0 / GLSL ES 1.00 入门，理解 GPU。
- 实现不依赖大型引擎的 MiniGame Renderer。
- 掌握 Sprite、Mesh、Camera、Material、Lighting、Shadow、Post Processing。
- 面向微信小游戏等受限环境，理解 API、资源、兼容性和移动 GPU 预算。
- 能为具体游戏类型制定渲染方案并交付可运行 Demo。

## 学习路径

| 阶段 | 主题 | 核心产出 | 属性 |
|---|---|---|---|
| 00 | 环境与工程习惯 | 可运行开发环境 | 必修 |
| 01 | 数学与图形学预备 | 向量/矩阵实验 | 必修基础 |
| 02 | GAMES101 | 软件光栅化器 | 必修理论 |
| 03 | 原生 WebGL 1.0 | 可交互 3D 场景 | 必修 |
| 04 | 游戏渲染架构 | Mini Renderer v0.1 | 必修 |
| 05 | Shader 与游戏视觉 | 游戏效果 Shader 集 | 必修 |
| 06 | 光照与 PBR | 材质球实验室 | 必修 |
| 07 | 阴影、AO、后处理 | 综合渲染场景 | 必修核心 |
| 08 | 微信小游戏适配 | 真机运行 Demo | 必修目标 |
| 09 | 性能与高级渲染 | 优化报告 | 必修基础/选修专题 |
| 10 | 游戏专项毕业项目 | 可复用渲染模块 | 必修 |

详见 [ROADMAP.md](ROADMAP.md)。

## 仓库结构

- [CURRICULUM/](CURRICULUM/)：课程、目标、资源和验收标准。
- [EXERCISES/](EXERCISES/)：小练习与作业。
- [PROJECTS/](PROJECTS/)：贯穿式渲染器和最终游戏项目。
- [REFERENCES/](REFERENCES/)：官方课程、文档、教材与视频索引。
- [NOTES/](NOTES/)：概念笔记、公式推导、踩坑记录。
- [TRACKING/](TRACKING/)：每周记录、作业模板、阶段验收。
- [PROGRESS.md](PROGRESS.md)：当前学习状态。

## 技术路线

先 WebGL 1.0，再按需求扩展。初期使用原生 Canvas + WebGL API，不用 Three.js、Babylon.js 等封装，以理解 Shader、Buffer、Texture、Draw Call 和 GPU 状态。之后单独学习 WebGL 2.0，并为微信小游戏增加 Platform Adapter。

WebGL 1.0 是教学起点，不代表所有微信小游戏项目都必须使用 WebGL 1.0。最终以目标基础库、设备覆盖范围和实测为准。

## 每课学习闭环

每课严格执行：提交上一课 → 检查真实源码与运行证据 → 验收通过 → 在 GitHub 创建并初始化下一课项目 → 初始化课程目标、实验和验收标准 → 正式教学 → 学习者独立完成并提交 → 再次审查。

一门课程可以拆成多个递进的子实验。每个子实验使用独立二级目录，包含自己的 index.html、main.js、README.md，只聚焦一个核心问题，并独立运行、提交和验收。必须逐个通过，不一次性布置整门课的所有任务。课程总览放在课程根目录 README 中。

没有源码或运行证据时标记待补交/待验收；不得把口头报告或答对知识题直接记为整课通过。每次验收后更新 PROGRESS.md 和对应实验 README。完整规范见 [WORKFLOW.md](WORKFLOW.md)。

当前阶段与课程以 [PROGRESS.md](PROGRESS.md) 为准。主线项目：MiniGame Renderer。

课程链接与第三方代码遵循各自版权和许可；引用时保留来源。
