# 04 · Shader 编程

> 目标：熟练使用 GLSL/HLSL 编写并调试各类渲染特效。

## 语言基础

### GLSL 核心

- 数据类型：`vec2/3/4`、`mat2/3/4`、`sampler2D`
- 限定符：`in`、`out`、`uniform`、`layout`
- 内置函数：`dot`、`cross`、`mix`、`smoothstep`、`texture`
- 控制流：分支、循环、早期退出

### 着色器阶段

| 阶段 | 职责 |
|------|------|
| Vertex | 顶点变换、属性传递 |
| Fragment | 像素着色、材质计算 |
| Geometry | 图元生成/销毁 |
| Tessellation | 曲面细分 |
| Compute | 通用 GPU 计算 |

## 常用算法

- 噪声：Value Noise、Perlin Noise、Simplex Noise
- SDF：圆、矩形、线段、组合运算（union / subtract / intersect）
- 模糊：Box Blur、Gaussian Blur、双向分离模糊
- 边缘检测：Sobel 算子
- 色彩空间：sRGB ↔ Linear、色调映射（ACES / Reinhard）

## 学习主题

- [ ] GLSL 语法与 WebGL2 / OpenGL 版本差异
- [ ] 顶点与片元着色器数据传递
- [ ] Uniform Block 与纹理数组
- [ ] 程序化纹理与噪声
- [ ] 后处理 Shader（Bloom、SSAO、DOF）
- [ ] Compute Shader 入门
- [ ] Shader 变体与宏管理
- [ ] Shader 性能分析与指令数优化

## 实践任务

| 任务 | 描述 | 状态 |
|------|------|------|
| S1 | Shadertoy 效果复刻 ×5 | 未开始 |
| S2 | 卡通渲染（Toon Shading） | 未开始 |
| S3 | 屏幕空间描边（Sobel） | 未开始 |
| S4 | 程序化星空/火焰 | 未开始 |
| S5 | 高斯模糊 + Bloom | 未开始 |

## 调试技巧

- 将中间值直接输出为颜色（可视化调试）
- 使用 `precision highp float` 避免精度问题
- 检查 Shader 编译日志（`getShaderInfoLog`）
- 用 RenderDoc 捕获并单步调试像素

## 推荐资源

- [The Book of Shaders](https://thebookofshaders.com/)
- [Shadertoy](https://www.shadertoy.com/)
- [GLSL Specification](https://registry.khronos.org/OpenGL/specs/gl/GLSLangSpec.4.60.pdf)

## 状态

| 项目 | 状态 |
|------|------|
| 语法基础 | 未开始 |
| 常用算法 | 未开始 |
| 实践任务 | 0 / 5 |
