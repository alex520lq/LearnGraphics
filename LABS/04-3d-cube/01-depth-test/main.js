const canvas = document.querySelector("canvas");

// 1. 获取 WebGL 1.0 上下文
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL 1.0 is not available.");
}

// Experiment 01: Depth Test
// Focus: compare two overlapping triangles at different Z values.

const vertexShaderSource = `
attribute vec3 a_position;
attribute vec3 a_color;
varying vec3 v_color;

void main() {
  gl_Position = vec4(a_position, 1.0);
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
  const vs = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program));
  }
  return program;
}

const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);

// Triangle A is red and farther away (NDC z = +0.5).
// Triangle B is blue and nearer (NDC z = -0.5).
const positions = new Float32Array([
  // A：远处红色三角形
  -0.6, 0.6, 0.5,
  0.6, 0.6, 0.5,
  0.0, -0.6, 0.5,

  // B：近处蓝色三角形
  -0.6, 0.6, -0.5,
  0.6, 0.6, -0.5,
  0.0, -0.6, -0.5
]);

const colors = new Float32Array([
  1, 0, 0,
  1, 0, 0,
  1, 0, 0,

  0, 0, 1,
  0, 0, 1,
  0, 0, 1
]);


const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

gl.useProgram(program);

const positionLocation = gl.getAttribLocation(program, "a_position");
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.enableVertexAttribArray(positionLocation);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

const colorLocation = gl.getAttribLocation(program, "a_color");
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.enableVertexAttribArray(colorLocation);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

gl.clearDepth(1.0);
gl.clearColor(0.03, 0.04, 0.07, 1.0);
gl.enable(gl.SCISSOR_TEST);

const halfWidth = Math.floor(canvas.width / 2);
const halfHeight = Math.floor(canvas.height / 2);
const experiments = [
  { x: 0, y: halfHeight, width: halfWidth, height: canvas.height - halfHeight, useDepthTest: true, drawNearFirst: false },
  { x: halfWidth, y: halfHeight, width: canvas.width - halfWidth, height: canvas.height - halfHeight, useDepthTest: true, drawNearFirst: true },
  { x: 0, y: 0, width: halfWidth, height: halfHeight, useDepthTest: false, drawNearFirst: false },
  { x: halfWidth, y: 0, width: canvas.width - halfWidth, height: halfHeight, useDepthTest: false, drawNearFirst: true }
];

for (const experiment of experiments) {
  const { x, y, width, height, useDepthTest, drawNearFirst } = experiment;

  gl.viewport(x, y, width, height);
  gl.scissor(x, y, width, height);

  if (useDepthTest) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);
  } else {
    gl.disable(gl.DEPTH_TEST);
  }

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  if (drawNearFirst) {
    gl.drawArrays(gl.TRIANGLES, 3, 3);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  } else {
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 3, 3);
  }
}

gl.disable(gl.SCISSOR_TEST);

console.log("Depth test comparison rendered in four canvas quadrants.");
