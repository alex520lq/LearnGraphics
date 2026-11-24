# Projects — 实战项目

## 主线项目：MiniGame Renderer

从原生 WebGL 1.0 开始，逐步形成可适配目标小游戏环境的轻量渲染器。

| 版本 | 目标 | 核心内容 |
|---|---|---|
| v0.0 | 最小 GPU 绘制 | 三角形、立方体、Shader |
| v0.1 | 渲染器基础 | Renderer、Mesh、Material、Transform、Camera |
| v0.2 | 资源与 2D | Texture、Sprite、Sprite Sheet、资源加载 |
| v0.3 | 游戏绘制组织 | Render Queue、状态管理、Draw Call 统计 |
| v0.4 | 游戏视觉 | Shader 效果集、粒子 |
| v0.5 | 光照材质 | Lambert、PBR、Material Lab |
| v0.6 | 画面增强 | Shadow、AO、Post Processing |
| v0.7 | 平台适配 | Platform Adapter、微信小游戏 Demo |
| v1.0 | 游戏专项 | 针对具体游戏需求的稳定渲染模块 |

## 项目目录规范

每个项目包含 README（目标、运行方式、验收）、src、assets、docs、screenshots。核心逻辑与平台 API 分离；每个版本记录 Demo、已知限制和性能数据。