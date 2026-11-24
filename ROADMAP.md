# 学习路线图

本路线图将图形学学习划分为 8 个阶段，从数学基础到渲染优化逐步推进。每个阶段包含核心主题、推荐资源与实践任务。

## 阶段总览

```
00 前置知识 → 01 GAMES101 → 02 WebGL 基础 → 03 游戏渲染管线
                                                      ↓
07 渲染优化 ← 06 阴影与 GI ← 05 光照与 PBR ← 04 Shader 编程
```

## 阶段 00：前置知识

**目标**：建立必要的数学与编程基础。

**核心主题**
- 线性代数：向量、矩阵、变换、点积与叉积
- 微积分基础：导数、积分、黎曼和
- 概率统计：采样、分布、蒙特卡洛方法基础
- C++ 基础：面向对象、模板、内存管理
- 工程实践：CMake、Git、调试技巧

**推荐资源**
- 《线性代数及其应用》David C. Lay
- [Mathematics for Computer Graphics](https://www.cs.cornell.edu/courses/cs4620/)
- [LearnCPP](https://www.learncpp.com/)

**实践任务**
- [ ] 实现向量与矩阵运算库
- [ ] 实现简单的光线与平面求交

**验收标准**：能够独立推导视图变换与投影变换矩阵。

## 阶段 01：GAMES101

**目标**：系统掌握现代图形学核心理论。

**核心主题**
- 向量与矩阵、变换（模型/视图/投影）
- 光栅化：三角形光栅化、深度测试、抗锯齿
- 着色：Blinn-Phong 模型、着色频率、纹理映射
- 几何：网格、贝塞尔曲线、曲面细分
- 光线追踪：Whitted 风格、路径追踪基础

**推荐资源**
- [GAMES101 课程主页](https://www.bilibili.com/video/BV1X74y147L7/)
- [GAMES101 作业仓库](https://github.com/hzgrtdei/Assignment-Games101)

**实践任务**
- [ ] 完成 GAMES101 全部 8 次作业
- [ ] 整理课程笔记到 [01-GAMES101.md](CURRICULUM/01-GAMES101.md)

**验收标准**：能够从零实现软光栅化器与简单光线追踪器。

## 阶段 02：WebGL 基础

**目标**：掌握 WebGL API 与 GPU 渲染流程。

**核心主题**
- WebGL 上下文与渲染管线
- 着色器编译、程序链接、Uniform/Attribute
- 缓冲区对象（VBO/VAO/EBO）
- 纹理、帧缓冲、混合与深度测试
- 矩阵库（gl-matrix）与相机控制

**推荐资源**
- [WebGL Fundamentals](https://webglfundamentals.org/)
- [The Book of Shaders](https://thebookofshaders.com/)

**实践任务**
- [ ] 绘制三角形与立方体
- [ ] 实现纹理映射与简单相机
- [ ] 实现离屏渲染（FBO）

**验收标准**：独立完成一个可交互的 3D 场景。

## 阶段 03：游戏渲染管线

**目标**：理解并实现游戏引擎的渲染架构。

**核心主题**
- 渲染管线架构：Forward / Deferred / TBDR
- 场景图、可见性剔除（视锥/遮挡）
- 材质系统、渲染队列、批处理与实例化
- 后处理：Bloom、色调映射、FXAA/TAA
- 多 Pass 与渲染目标管理

**推荐资源**
- [LearnOpenGL - Advanced Lighting](https://learnopengl.com/Advanced-Lighting/Advanced-Lighting)
- [Real-Time Rendering, 4th Edition](https://www.realtimerendering.com/)

**实践任务**
- [ ] 实现 Forward 与 Deferred 渲染路径
- [ ] 实现基础后处理链

**验收标准**：能够说明不同渲染路径的取舍并实现其中一种。

## 阶段 04：Shader 编程

**目标**：熟练使用 GLSL/HLSL 编写渲染效果。

**核心主题**
- GLSL/HLSL 语法与数据类型
- 顶点/片元/几何/计算着色器
- 常用算法：噪声、SDF、模糊、边缘检测
- Shader 调试与性能分析
- Shader 变体与管理

**推荐资源**
- [The Book of Shaders](https://thebookofshaders.com/)
- [Shadertoy](https://www.shadertoy.com/)

**实践任务**
- [ ] 实现 5 个以上 Shadertoy 风格效果
- [ ] 实现卡通渲染（Toon Shading）Shader
- [ ] 实现屏幕空间描边

**验收标准**：能够将任意视觉效果拆解为 Shader 实现。

## 阶段 05：光照与 PBR

**目标**：掌握基于物理的渲染理论与实际实现。

**核心主题**
- 辐射度量学与光度学基础
- 反射模型：BRDF、微表面理论
- 漫反射与镜面反射（Cook-Torrance）
- 材质模型：金属度-粗糙度工作流
- 图像基照明（IBL）：辐照度图、预滤波环境图、BRDF LUT

**推荐资源**
- [LearnOpenGL - PBR](https://learnopengl.com/PBR/Theory)
- [Real Shading in Unreal Engine 4](https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf)

**实践任务**
- [ ] 实现 Cook-Torrance BRDF
- [ ] 实现 IBL 材质系统
- [ ] 搭建材质参数调试界面

**验收标准**：能够解释并实现 PBR 核心公式。

## 阶段 06：阴影与全局光照

**目标**：实现高质量阴影与间接光照。

**核心主题**
- 阴影映射（Shadow Mapping）与级联阴影（CSM）
- 软阴影：PCF、PCSS、VSM、ESM
- 屏幕空间环境光遮蔽（SSAO）
- 全局光照：光照探针、辐照度体积、光线追踪 GI
- 实时光线追踪基础（DXR / Vulkan RT）

**推荐资源**
- [GAMES202 课程主页](https://www.bilibili.com/video/BV1S54y1R7SB)
- [Real-Time Shadows](https://www.realtimerendering.com/realtimeshadows.html)

**实践任务**
- [ ] 实现基础阴影映射与 PCF 软阴影
- [ ] 实现 SSAO
- [ ] 实现简单的实时 GI 方案

**验收标准**：能够对比不同阴影技术的质量与性能差异。

## 阶段 07：渲染优化

**目标**：掌握渲染性能分析与优化方法。

**核心主题**
- 性能瓶颈定位：CPU/GPU 负载分析
- Draw Call 优化：合批、实例化、GPU Driven
- 带宽与缓存优化：纹理压缩、Mipmap、UBO
- LOD、遮挡剔除、GPU 可见性
- 时序分析：GPU Profiler、RenderDoc

**推荐资源**
- [RenderDoc](https://renderdoc.org/)
- [GPU Gems](https://developer.nvidia.com/gpugems/gpugems3/contributors)

**实践任务**
- [ ] 使用 RenderDoc 分析一个完整场景
- [ ] 完成一次系统的性能优化并量化收益
- [ ] 撰写优化报告到 [07-Rendering-Optimization.md](CURRICULUM/07-Rendering-Optimization.md)

**验收标准**：能够独立定位瓶颈并完成端到端优化。

## 更新记录

| 日期 | 内容 |
|------|------|
| 2026-11-24 | 初始版本，定义 8 个学习阶段 |
