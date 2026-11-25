const canvas = document.querySelector("canvas");

// 1. 获取 WebGL 1.0 上下文
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL 1.0 is not available.");
}

// Experiment 02: Cube Mesh
// Focus: describe a cube with 8 vertex records and 36 indices.
// Important: no CULL_FACE in this experiment.
// We keep positions in clip space for now; model/view/projection matrices
// will be introduced in a later experiment.

const vertexShaderSource = `
attribute vec3 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
  // 1. 读取三维顶点
  float x = a_position.x;
  float y = a_position.y;
  float z = a_position.z;

  // 2. 简单斜投影
  float projectedX = x + z * 0.5;
  float projectedY = y + z * 0.5;

  // 3. 保留深度信息
  float projectedZ = -z * 0.5;

  // 4. 输出投影后的坐标
  gl_Position = vec4(
    projectedX,
    projectedY,
    projectedZ,
    1.0
  );

  v_color = a_color;
}
`;

const fragmentShaderSource = `
precision mediump float;

varying vec3 v_color;

void main() {
  gl_FragColor = vec4(v_color, 1.0);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
  }

  return program;
}

const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);

// TODO 1: Define 8 cube vertices.
// Each vertex has 3 position values: x, y, z.
// Suggested layout:
//   0..3 = front face corners
//   4..7 = back face corners
// Keep all x/y values inside [-1, 1].
// Give the front and back faces different z values.
const mesh = {
  positions: new Float32Array([
    // 前面
    -0.5, -0.5, 0.5,  // 0
    0.5, -0.5, 0.5,  // 1
    0.5, 0.5, 0.5,  // 2
    -0.5, 0.5, 0.5,  // 3

    // 后面
    -0.5, -0.5, -0.5,  // 4
    0.5, -0.5, -0.5,  // 5
    0.5, 0.5, -0.5,  // 6
    -0.5, 0.5, -0.5   // 7
  ]),

  // TODO 2: Define one RGB color for each of the 8 vertices.
  colors: new Float32Array([
     1, 0, 0,
     1, 0, 0,
     1, 0, 0,

     0, 0, 1,
     0, 0, 1,
     0, 0, 1,

     0, 1, 0,
     0, 1, 0
  ]),

  // TODO 3: Define 36 indices: 6 faces × 2 triangles × 3 indices.
  // Use only vertex indices 0..7.
  indices: new Uint16Array([
    // 前面
    0, 1, 2,
    0, 2, 3,
    // 后面
    4, 6, 5,
    4, 7, 6,
    // 左面
    4, 0, 3,
    4, 3, 7,
    // 右面
    1, 5, 6,
    1, 6, 2,
    // 顶面
    3, 2, 6,
    3, 6, 7,
    // 底面
    4, 5, 1,
    4, 1, 0
  ])

};

// TODO 4: Create two ARRAY_BUFFERs and upload positions/colors.
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER,mesh.positions,gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER,mesh.colors,gl.STATIC_DRAW);

// TODO 5: Create one ELEMENT_ARRAY_BUFFER and upload indices.
const indexBuffer = gl.createBuffer();
gl.bindBuffer(
  gl.ELEMENT_ARRAY_BUFFER,
  indexBuffer
);
gl.bufferData(
  gl.ELEMENT_ARRAY_BUFFER,
  mesh.indices,
  gl.STATIC_DRAW
);
// TODO 6: Configure a_position and a_color attributes.
const positionLocation = gl.getAttribLocation(
  program,
  "a_position"
);
const colorLocation = gl.getAttribLocation(
  program,
  "a_color"
);

gl.bindBuffer(
  gl.ARRAY_BUFFER,
  positionBuffer
);

gl.enableVertexAttribArray(positionLocation);

gl.vertexAttribPointer(
  positionLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0
);

gl.bindBuffer(
  gl.ARRAY_BUFFER,
  colorBuffer
);

gl.enableVertexAttribArray(colorLocation);

gl.vertexAttribPointer(
  colorLocation,
  3,
  gl.FLOAT,
  false,
  0,
  0
);
// TODO 7: Enable DEPTH_TEST with LESS.
gl.enable(gl.DEPTH_TEST);

gl.depthFunc(gl.LESS);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.03, 0.04, 0.07, 1.0);

// TODO 8: Clear COLOR_BUFFER_BIT and DEPTH_BUFFER_BIT.
gl.clearDepth(1.0);

gl.clear(
  gl.COLOR_BUFFER_BIT |
  gl.DEPTH_BUFFER_BIT
);
// TODO 9: Draw the mesh with drawElements(TRIANGLES, 36, UNSIGNED_SHORT, 0).
gl.useProgram(program);

gl.drawElements(
  gl.TRIANGLES,
  36,
  gl.UNSIGNED_SHORT,
  0
);

console.log("LearnGraphics 04.02 Cube Mesh completed.");
