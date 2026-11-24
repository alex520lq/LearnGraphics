# 07 · 渲染优化

> 目标：掌握渲染性能分析与系统级优化方法，形成可量化的优化能力。

## 性能分析

### 瓶颈定位

| 瓶颈类型 | 表现 | 分析工具 |
|----------|------|----------|
| CPU Bound | GPU 利用率低、帧时间受逻辑影响 | CPU Profiler、 Tracy |
| GPU Bound | GPU 满载、帧时间受绘制影响 | RenderDoc、Nsight、PIX |
| 带宽 Bound | 纹理采样密集、高分辨率 | 带宽计数器 |
| 填充率 Bound | 过度绘制、大透明面积 | 覆盖率分析 |

### 关键指标

- 帧时间（Frame Time）与 FPS
- Draw Call 数量
- 三角形数量
- 纹理带宽与显存占用
- Shader 指令数与寄存器占用

## 优化策略

### CPU 侧

- 合批（Batching）与实例化（Instancing）
- 减少状态切换（材质排序、Shader 排序）
- 多线程渲染命令生成
- 场景剔除：视锥、遮挡、距离
- 对象池与内存预分配

### GPU 侧

- LOD（细节层次）：网格 LOD、纹理 Mipmap
- GPU Driven Rendering：间接绘制、可见性缓冲
- 纹理压缩：ASTC / BC / ETC
- 减少过度绘制：Early-Z、Z-Prepass
- 帧缓冲优化：MRT 复用、降低分辨率后处理
- Compute Shader 替代传统 Pass

### 内存与带宽

- 纹理图集（Texture Atlas）
- 数据对齐与缓存友好布局（SoA）
- Uniform Buffer Object 复用
- 资源流式加载

## 工具链

- [RenderDoc](https://renderdoc.org/) — 帧捕获与逐 Draw Call 分析
- [NVIDIA Nsight Graphics](https://developer.nvidia.com/nsight-graphics) — GPU 性能剖析
- [Tracy Profiler](https://github.com/wolfpld/tracy) — CPU/GPU 帧分析
- [PIX](https://devblogs.microsoft.com/pix/) — DirectX 性能分析
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/) — WebGL 分析

## 实践任务

| 任务 | 描述 | 状态 |
|------|------|------|
| O1 | 使用 RenderDoc 捕获并分析完整帧 | 未开始 |
| O2 | 建立性能基准测试场景 | 未开始 |
| O3 | Draw Call 优化（合批 + 实例化） | 未开始 |
| O4 | 实现 LOD 与视锥剔除优化 | 未开始 |
| O5 | 完成后处理链优化并量化收益 | 未开始 |

## 优化报告模板

```
## 优化目标
- 场景描述：
- 初始指标（FPS / 帧时间 / Draw Call）：

## 瓶颈分析
- 工具与数据：
- 定位结论：

## 优化措施
1. 措施一：收益 +X%
2. 措施二：收益 +Y%

## 最终结果
- 优化后指标：
- 总收益：
- 遗留问题：
```

## 状态

| 项目 | 状态 |
|------|------|
| 性能分析 | 未开始 |
| CPU 优化 | 未开始 |
| GPU 优化 | 未开始 |
| 实践任务 | 0 / 5 |
