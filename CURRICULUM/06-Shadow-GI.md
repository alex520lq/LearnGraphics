# 06 · 阴影与全局光照

> 目标：实现高质量阴影与间接光照，理解实时 GI 的主流方案。

## 阴影技术

### 阴影映射（Shadow Mapping）

```
1. 从光源视角渲染深度图（Shadow Map）
2. 从相机视角渲染，将片元变换到光源空间
3. 比较片元深度与 Shadow Map 中的深度
```

### 常见问题与改进

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 阴影失真（Acne） | 深度精度不足 | Bias / Normal Bias / Slope Scale |
| 彼得潘效应（Peter-Panning） | Bias 过大 | 动态调整 Bias |
| 锯齿 | Shadow Map 分辨率不足 | PCF / PCSS / 级联阴影 |

### 级联阴影（CSM）

- 按视距将视锥切分为多级
- 每级生成独立 Shadow Map
- 根据片元深度选择合适的级联
- 需要处理级联过渡（Blend）

### 软阴影算法

- PCF（Percentage Closer Filtering）
- PCSS（Percentage Closer Soft Shadows）
- VSM（Variance Shadow Maps）
- ESM（Exponential Shadow Maps）

## 全局光照（GI）

### 间接光照方案

- **光照探针（Light Probes）**：球面谐波（SH）编码
- **辐照度体积（Irradiance Volumes）**：空间插值的探针网格
- **SSGI**：屏幕空间全局光照
- **光线追踪 GI**：实时路径追踪 / 混合渲染
- **VXGI**：体素化全局光照

### 环境光遮蔽

- SSAO：屏幕空间采样，半球核 + 噪声旋转
- HBAO：基于地平线的遮蔽
- GTAO：Ground Truth AO

## 学习主题

- [ ] 基础阴影映射与 Bias 调优
- [ ] PCF / PCSS 软阴影
- [ ] 级联阴影地图（CSM）
- [ ] SSAO / GTAO 实现
- [ ] 光照探针与 SH 编码
- [ ] 实时光线追踪 GI（DXR / Vulkan RT）
- [ ] 混合渲染管线设计

## 实践任务

| 任务 | 描述 | 状态 |
|------|------|------|
| G1 | 基础 Shadow Map + PCF | 未开始 |
| G2 | 级联阴影（4 级） | 未开始 |
| G3 | PCSS 接触硬化软阴影 | 未开始 |
| G4 | SSAO / GTAO | 未开始 |
| G5 | 光照探针间接光 | 未开始 |

## 推荐资源

- [GAMES202: 高质量实时渲染](https://www.bilibili.com/video/BV1S54y1R7SB)
- [Real-Time Shadows](https://www.realtimerendering.com/realtimeshadows.html)
- [LearnOpenGL - Shadow Mapping](https://learnopengl.com/Advanced-Lighting/Shadows/Shadow-Mapping)
- [LearnOpenGL - SSAO](https://learnopengl.com/Advanced-Lighting/SSAO)

## 状态

| 项目 | 状态 |
|------|------|
| 阴影映射 | 未开始 |
| 软阴影 | 未开始 |
| 级联阴影 | 未开始 |
| GI 方案 | 未开始 |
