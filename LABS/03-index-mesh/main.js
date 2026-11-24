const canvas = document.getElementById("canvas");

// 1. 获取 WebGL 1.0 上下文
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("当前浏览器不支持 WebGL");
}

// 2. 顶点着色器
const vertexShaderSource = `
attribute vec2 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_color = a_color;
}
`;

// 3. 片元着色器
const fragmentShaderSource = `
precision mediump float;

varying vec3 v_color;

void main() {
    gl_FragColor = vec4(v_color, 1.0);
}
`;

// 4. 编译 Shader
function createShader(gl, type, source) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const error = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(error);
  }

  return shader;
}

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);

const fragmentShader = createShader(
  gl,
  gl.FRAGMENT_SHADER,
  fragmentShaderSource,
);

// 5. 创建 GPU Shader Program
const program = gl.createProgram();

gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program));
}

const mesh ={
  positions:new Float32Array( [
  -0.8,  0.8,  // 顶点 0
   0.8,  0.8,  // 顶点 1
   0.8, -0.8,  // 顶点 2
  -0.8, -0.8   // 顶点 3
  ]),
colors : new Float32Array([
  1, 0, 0,  // 顶点 0：红
  0, 1, 0,  // 顶点 1：绿
  0, 0, 1,  // 顶点 2：蓝
  1, 1, 0   // 顶点 3：黄
]),indices : new Uint16Array([
  0, 1, 2,
  0, 2, 3
])
}

// 8. 创建并上传位置 Buffer
const positionBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, mesh.positions, gl.STATIC_DRAW);

const indexBuffer =gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,
  indexBuffer
)
gl.bufferData(
  gl.ELEMENT_ARRAY_BUFFER,
  mesh.indices,
  gl.STATIC_DRAW
);

// 9. 创建并上传颜色 Buffer
const colorBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, mesh.colors, gl.STATIC_DRAW);

// 10. 设置 Canvas 视口
gl.viewport(0, 0, canvas.width, canvas.height);

// 11. 清屏
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// 12. 启用 Shader Program
gl.useProgram(program);

// 13. 绑定顶点位置
const positionLocation = gl.getAttribLocation(program, "a_position");

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

gl.enableVertexAttribArray(positionLocation);

gl.vertexAttribPointer(
  positionLocation, //	对应 Shader 中的哪个 attribute
  2, //	每个顶点读取两个分量c
  gl.FLOAT, //	
  false, // 
  0, //	 
  0, //	 
);

// 14. 绑定顶点颜色
const colorLocation = gl.getAttribLocation(program, "a_color");

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

gl.enableVertexAttribArray(colorLocation);

gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

// 15. 发出绘制命令
gl.drawElements(
  gl.TRIANGLES,
  6,
  gl.UNSIGNED_SHORT,
  0
);

console.log("LearnGraphics: Indexed Rectangle Rendered!");
