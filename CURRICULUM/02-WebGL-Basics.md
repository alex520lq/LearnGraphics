# 02 · WebGL 基础

> 目标：掌握 WebGL API 与 GPU 渲染管线的实际操作流程。

## 核心概念

### WebGL 渲染管线

```
顶点数据 → 顶点着色器 → 图元装配 → 光栅化 → 片元着色器 → 测试与混合 → 帧缓冲
```

### 关键 API

| 类别 | API | 说明 |
|------|-----|------|
| 上下文 | `getContext('webgl2')` | 获取 WebGL 2 上下文 |
| 着色器 | `createShader` / `compileShader` | 编译着色器 |
| 程序 | `createProgram` / `linkProgram` | 链接着色器程序 |
| 缓冲区 | `createBuffer` / `bufferData` | 上传顶点数据 |
| VAO | `createVertexArray` | 管理顶点属性状态 |
| 纹理 | `createTexture` / `texImage2D` | 上传纹理数据 |
| 绘制 | `drawArrays` / `drawElements` | 发起绘制调用 |

## 学习主题

- [ ] WebGL 上下文初始化与画布配置
- [ ] 着色器编译、链接与错误处理
- [ ] 顶点属性与 VBO / VAO / EBO
- [ ] Uniform 变量与矩阵传递
- [ ] 纹理：2D 纹理、立方体贴图、Mipmap
- [ ] 深度测试、模板测试、混合
- [ ] 帧缓冲对象（FBO）与离屏渲染
- [ ] 相机控制：轨道相机、第一人称相机
- [ ] gl-matrix 矩阵库使用

## 推荐资源

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [LearnOpenGL（可对照 WebGL 实现）](https://learnopengl.com/)
- [MDN WebGL API](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
- [The Book of Shaders](https://thebookofshaders.com/)

## 实践任务

| 任务 | 描述 | 状态 |
|------|------|------|
| P1 | 绘制彩色三角形 | 未开始 |
| P2 | 绘制带纹理的立方体 | 未开始 |
| P3 | 实现轨道相机控制 | 未开始 |
| P4 | 实现离屏渲染与后处理 | 未开始 |
| P5 | 实现简单的粒子系统 | 未开始 |

## 常见坑点

- 忘记启用 `DEPTH_TEST` 导致深度顺序错误
- 顶点属性指针步长（stride）与偏移（offset）计算错误
- 纹理坐标 Y 轴翻转（WebGL 与图像坐标原点不同）
- 未解绑 FBO 导致后续绘制到离屏缓冲

## 状态

| 项目 | 状态 |
|------|------|
| 基础 API | 未开始 |
| 纹理与缓冲 | 未开始 |
| 实践任务 | 0 / 5 |
