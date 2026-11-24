# 05 · 光照与 PBR

> 目标：掌握基于物理的渲染（PBR）理论与工程实现。

## 理论基础

### 辐射度量学

| 量 | 符号 | 单位 | 含义 |
|----|------|------|------|
| 辐射能 | Q | J | 光能总量 |
| 辐射通量 | Φ | W | 单位时间辐射能 |
| 辐照度 | E | W/m² | 单位面积接收的通量 |
| 辐射强度 | I | W/sr | 单位立体角的通量 |
| 辐射亮度 | L | W/(m²·sr) | 单位面积单位立体角的通量 |

### 反射模型

- **BRDF**：双向反射分布函数，描述表面反射特性
- **漫反射**：Lambertian 模型 `f_diffuse = c / π`
- **镜面反射**：Cook-Torrance 微表面模型

```
f_specular = (D · G · F) / (4 · (n·l) · (n·v))

D: 法线分布函数（GGX / Trowbridge-Reitz）
G: 几何遮蔽函数（Smith）
F: 菲涅尔方程（Schlick 近似）
```

## 材质工作流

### 金属度-粗糙度（Metallic-Roughness）

- `Albedo`：基础颜色（金属时为 F0）
- `Metallic`：0 = 电介质，1 = 金属
- `Roughness`：0 = 光滑，1 = 粗糙
- `AO`：环境光遮蔽
- `Normal`：法线贴图
- `Emissive`：自发光

### 图像基照明（IBL）

- 辐照度图（Irradiance Map）：漫反射环境光
- 预滤波环境图（Prefiltered Env Map）：镜面反射
- BRDF LUT：预积分的镜面反射查找表

## 学习主题

- [ ] 辐射度量学与光度学基础
- [ ] 微表面理论与 BRDF 推导
- [ ] Cook-Torrance 着色模型实现
- [ ] 金属度-粗糙度工作流
- [ ] IBL 完整实现（离线生成 + 运行时采样）
- [ ] 材质编辑器与参数调试
- [ ] 面积光与 LTC 近似

## 实践任务

| 任务 | 描述 | 状态 |
|------|------|------|
| P1 | 实现 GGX + Smith + Schlick BRDF | 未开始 |
| P2 | 加载并解析 glTF PBR 材质 | 未开始 |
| P3 | 生成辐照度图与预滤波环境图 | 未开始 |
| P4 | 实现完整 IBL 渲染 | 未开始 |
| P5 | 材质球展示场景 | 未开始 |

## 推荐资源

- [LearnOpenGL - PBR](https://learnopengl.com/PBR/Theory)
- [Real Shading in UE4](https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf)
- [Background: Physics and Math of Shading](https://blog.selfshadow.com/publications/s2012-shading-course/hoffman/s2012_pbs_physics_math_notes.pdf)
- [glTF 2.0 Materials](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#materials)

## 状态

| 项目 | 状态 |
|------|------|
| 理论学习 | 未开始 |
| BRDF 实现 | 未开始 |
| IBL 实现 | 未开始 |
| 实践任务 | 0 / 5 |
