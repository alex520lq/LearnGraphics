# LearnGraphics Roadmap

面向**游戏实时渲染开发**，从基础入门开始。预计 9–15 个月，每周 6–10 小时；按基础与游戏项目调整，不要求机械完成每门课的全部内容。

## 总体路线

```
环境/数学 → GAMES101 → 原生 WebGL 1.0
                         ↓
小游戏 Renderer ← 游戏渲染架构 ← Shader
                         ↓
              光照/PBR → 阴影/AO/后处理
                         ↓
            微信小游戏适配 → 性能优化
                         ↓
                  游戏专项项目
```

## 00 环境与工程习惯（必修）

安装 Node.js LTS、Git、编辑器和浏览器；熟悉静态服务器、DevTools、Console、Network；Clone 仓库并完成第一次 commit/push。

**交付/验收**：本地运行 HTML 页面；能说明启动、调试和提交步骤。

## 01 数学与图形学预备（必修基础，按需补课）

向量、点积、叉积、矩阵、齐次坐标、平移/旋转/缩放、Model/World/View/Clip/NDC/Screen 空间、透视与正交投影、角度弧度。

资源：3Blue1Brown 线性代数系列、GAMES101 数学讲解、Scratchapixel。

练习：Vec2/Vec3、2D 变换可视化、矩阵变换链、射线与平面求交。

**验收**：能解释点积、叉积、齐次坐标、透视除法及坐标空间。

## 02 GAMES101（必修理论主课）

重点：变换、光栅化、深度、透视正确插值、抗锯齿、着色、纹理、几何、光线追踪和路径追踪基础。

资源：
- 官方主页：https://sites.cs.ucsb.edu/~lingqi/teaching/games101.html
- GAMES 平台：https://games-cn.org/
- B站课程录像：https://www.bilibili.com/video/BV1X7411F744
- 教材参考：《Fundamentals of Computer Graphics》，按讲义章节查阅，不要求通读。

优先完成变换、光栅化、插值、纹理和基础光追作业；作业框架以官方材料为准。

**交付**：CPU 软件光栅化器，支持三角形、深度、插值、纹理；简易光追选做。

## 03 原生 WebGL 1.0（必修实践主课）

Canvas/context、GLSL ES 1.00、Shader 编译链接、attribute/uniform、Buffer、纹理、viewport、深度测试、混合、剔除、矩阵、相机和动画循环。

资源：
- https://webglfundamentals.org/
- https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- https://www.khronos.org/webgl/

第一轮严格使用 WebGL 1.0：attribute/varying/gl_FragColor。不要把 WebGL 2.0 的 VAO 等能力混入基础作业。

**交付**：原生 WebGL 旋转立方体、纹理场景和可交互相机。

## 04 游戏渲染基础架构（必修）

Renderer、Renderable、Transform、Camera、Mesh、Material、Texture、资源缓存、Sprite/Sprite Sheet、Render Queue、Draw Call 统计、update/render 游戏循环。

**交付**：MiniGame Renderer v0.1，支持 2D Sprite 与基础 3D Mesh。

## 05 Shader 与游戏视觉（必修）

GLSL ES 1.00、UV、坐标空间、Alpha/Blend、Sprite tint、受击闪白、Dissolve、粒子、Lambert、Phong/Blinn-Phong、Toon/Ramp、Fresnel。

**交付**：至少 5 个可调参数的游戏 Shader 效果。

## 06 光照与 PBR（必修核心）

线性颜色与 Gamma、法线、漫反射/镜面反射、BRDF、Cook–Torrance、GGX、Fresnel-Schlick、Metallic-Roughness、HDR、IBL。

资源：GAMES202、LearnOpenGL PBR（作为概念参考）、Real-Time Rendering。

**交付**：可调 Metallic、Roughness、光源和环境光的材质实验室。

## 07 阴影、AO 与后处理（必修核心专题）

Framebuffer、Shadow Mapping、Bias、PCF、PCSS/CSM 进阶、SSAO、Bloom、Tone Mapping、Gamma、FXAA；TAA/SSR/GI 后续选修。

**交付**：带阴影和至少两种后处理效果的场景。

## 08 微信小游戏适配（必修目标）

查阅当前官方 Canvas/WebGL 文档；封装 Platform Adapter；处理资源加载、生命周期、屏幕尺寸、DPR、输入、纹理限制和设备差异；真机测启动与帧时间。

官方入口：https://developers.weixin.qq.com/minigame/dev/guide/

注意：小游戏不是普通浏览器 DOM。不要假设 document、Image、fetch、requestAnimationFrame 和文件路径行为完全相同。以当前基础库文档和真机测试为准。

**交付**：目标小游戏环境运行的 Sprite Demo，记录设备、基础库和兼容性。

## 09 性能与高级渲染（性能基础必修，专题选修）

必修：CPU/GPU 瓶颈、帧时间、Draw Call、批处理、实例化、剔除、LOD、纹理尺寸/Mipmap/带宽、目标设备测试。

选修：WebGL 2.0、Vulkan/Metal/Direct3D、Deferred/Forward+、TAA、SSR、实时 GI、实时光追、GPU-driven。

**交付**：记录设备、场景、分辨率、帧时间、瓶颈和优化收益的报告。

## 10 游戏专项毕业项目（必修）

选择 2D Roguelike/塔防、3D 卡通动作、3D 写实 RPG 或俯视角/等距游戏。提交技术方案、模块图、可运行 Demo、源码、性能预算、兼容性记录和复盘。

## 重复内容与选课原则

| 内容 | 首次学习 | 后续复用 |
|---|---|---|
| 光栅化 | GAMES101 | WebGL 映射到 GPU 状态和 Draw Call |
| 变换/相机 | 数学与 GAMES101 | WebGL 实现、Renderer 封装 |
| Shader | WebGL 基础 | 后续专注游戏效果 |
| 光照 | Lambert/Phong | PBR 升级模型 |
| 阴影 | Shadow Mapping | GAMES202 学高级质量改进 |
| 光追 | GAMES101 概念 | 项目需要时再深入 |

CS4600 与 GAMES101 入门理论重叠，作为英文项目型补充；CS5610/6610 作为 OpenGL/GLSL 对照，不是 WebGL 主线硬性先修；CS6620/PBRT 偏离线渲染，属于选修。

## 阶段完成定义

需同时满足：能解释关键原理；独立完成核心实验；能解释关键代码和坐标空间；提交可复现运行证据；更新 PROGRESS 和阶段复盘。只看完视频不算完成。
