# 03 · 游戏渲染管线

> 目标：理解并实现游戏引擎中完整的渲染架构与数据流。

## 渲染架构

### 渲染路径对比

| 路径 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| Forward | 实现简单、支持 MSAA、透明处理容易 | 多光源开销大 | 光源少、移动端 |
| Deferred | 光源数量不敏感 | 显存占用高、MSAA 困难、透明需额外处理 | 多光源场景 |
| Forward+ | 兼顾两者 | 实现复杂、需要分块 | 现代主流方案 |
| TBDR | 带宽极低 | 硬件依赖强 | 移动 GPU |

### 核心模块

- **场景图**：节点变换、层级关系、空间划分
- **可见性剔除**：视锥剔除、遮挡剔除（HzB / 软件光栅）
- **材质系统**：Shader 变体、参数绑定、材质实例
- **渲染队列**：不透明/透明排序、批处理与实例化
- **渲染目标**：G-Buffer、多渲染目标（MRT）、Ping-Pong 缓冲
- **后处理链**：Bloom、色调映射、FXAA/TAA、景深

## 实现清单

- [ ] 渲染设备管理（上下文、交换链、渲染目标）
- [ ] 场景管理层（实体、组件、变换更新）
- [ ] 相机与视锥剔除
- [ ] 材质与 Shader 管理
- [ ] Forward 渲染路径
- [ ] Deferred 渲染路径（G-Buffer）
- [ ] 后处理框架（可插拔 Pass）
- [ ] 渲染统计与调试视图

## G-Buffer 设计参考

```
RT0: Albedo.rgb + MaterialID.a
RT1: Normal.rgb  + Roughness.a
RT2: Metallic.rgb + AO.a
RT3: Emissive.rgb + Depth (or separate depth)
Depth: DepthStencil
```

## 推荐资源

- [LearnOpenGL - Deferred Shading](https://learnopengl.com/Advanced-Lighting/Deferred-Shading)
- [Real-Time Rendering, 4th Ed. — Chapter 20](https://www.realtimerendering.com/)
- [Unity SRP 文档](https://docs.unity3d.com/Manual/SRPBatcher.html)

## 实践项目

- 实现一个支持 Forward 与 Deferred 切换的渲染器 Demo
- 实现可插拔的后处理 Pass 系统
- 输出渲染管线流程图与性能对比报告

## 状态

| 项目 | 状态 |
|------|------|
| 理论学习 | 未开始 |
| Forward 路径 | 未开始 |
| Deferred 路径 | 未开始 |
| 后处理系统 | 未开始 |
