# 阶段 08：微信小游戏平台适配

**类型**：必修目标。前置：完成 WebGL 核心和 Renderer 基础模块。

官方入口：https://developers.weixin.qq.com/minigame/dev/guide/

任务：
- [ ] 查阅当前 Canvas/WebGL 文档和基础库版本。
- [ ] 区分浏览器 DOM Canvas 与小游戏运行环境。
- [ ] 封装 Platform Adapter：Canvas、资源加载、时间、输入、生命周期。
- [ ] 处理屏幕尺寸、DPR、横竖屏和 resize。
- [ ] 检查纹理格式、尺寸、扩展和设备差异。
- [ ] 在开发者工具和真机验证启动、资源、触摸与帧时间。

注意：小游戏不是普通浏览器页面。不要假设 document、Image、fetch、requestAnimationFrame 或文件路径行为完全相同。以当前官方文档、目标基础库和真机测试为准。

**交付**：目标小游戏环境运行的最小 Sprite Demo，记录设备、基础库版本、兼容性和性能。