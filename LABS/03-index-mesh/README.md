# 第 03 课：索引绘制与 Mesh 数据封装

- 阶段：03 原生 WebGL 1.0
- 状态：已验收通过
- 验收方式：GitHub 源码检查 + 浏览器运行截图

## 验收结果

- [x] positions、colors、indices 已封装为 mesh 数据对象。
- [x] 顶点数据通过 ARRAY_BUFFER 上传。
- [x] 索引数据通过 ELEMENT_ARRAY_BUFFER 和 Uint16Array 上传。
- [x] 使用 gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0) 绘制。
- [x] 浏览器截图显示四角颜色插值的矩形，符合两个索引三角形组成矩形的预期结果。

运行证据由学习者于 2026-11-25 在课程对话中提交；截图未另存为仓库文件。

## 本课核心概念

- Vertex Buffer：存储顶点属性记录。
- Index Buffer：描述三角形如何引用顶点记录。
- Attribute：将 Buffer 数据解释为 Shader 输入。
- drawElements：按索引提交图元绘制。
- Mesh：组织位置、颜色和索引等几何数据。

## 课程复盘

完成从 drawArrays 的顺序顶点绘制到 drawElements 的索引绘制，并将几何数据封装为 Mesh 对象。下一课进入 3D 顶点、深度测试与背面剔除。
