# 阶段 04：游戏渲染基础架构

**类型**：必修。主项目：MiniGame Renderer v0.1。

模块：Renderer、Renderable、Transform、Camera、Mesh、Material、Texture、Resource Manager、Sprite/Sprite Sheet、Render Queue、Debug Stats（Draw Call/对象/纹理数量）。

实现顺序：
1. 把三角形绘制封装成 Renderer。
2. 抽象 Mesh 与 Material。
3. 增加 Transform 和 Camera。
4. 增加 Texture 与资源加载。
5. 增加 Sprite 与图集动画。
6. 增加 Render Queue 和统计信息。

**验收**：新增 Sprite 或 Mesh 时，只创建数据对象并提交给 Renderer，不复制 Shader 编译和绘制流程。