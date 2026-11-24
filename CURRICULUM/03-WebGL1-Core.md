# 阶段 03：原生 WebGL 1.0

**类型**：必修实践。目标：不依赖 Three.js 等引擎封装理解 GPU 绘制。

资源：
- WebGL Fundamentals：https://webglfundamentals.org/
- WebGL 2 Fundamentals（后续对照）：https://webgl2fundamentals.org/
- MDN：https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API
- Khronos：https://www.khronos.org/webgl/

顺序：Canvas/context → GLSL ES 1.00 → Shader 编译链接 → attribute/uniform → Buffer → drawArrays/drawElements → Texture/UV → viewport/depth/blend/cull → 矩阵/相机/动画循环。

第一轮严格使用 WebGL 1.0 和 GLSL ES 1.00（attribute、varying、gl_FragColor）。不要把 WebGL 2.0 的 VAO 等功能混入基础作业。

练习：
- [ ] 清屏并绘制三角形
- [ ] 顶点颜色
- [ ] 旋转立方体
- [ ] 纹理映射
- [ ] 透视相机
- [ ] 深度测试与背面剔除
- [ ] 鼠标/触摸相机控制

**验收**：能从空白 HTML 创建 context、编译 Shader、上传 Buffer 并绘制纹理立方体。