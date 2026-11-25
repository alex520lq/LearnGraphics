const canvas = document.getElementById("canvas");
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

// TODO 1: Define two triangles with identical X/Y coverage.
// Triangle A: red and farther away (NDC z = +0.5).
// Triangle B: blue and nearer (NDC z = -0.5).
const positions = new Float32Array([
  // TODO: 3 vertices for triangle A, then 3 for triangle B.
  // Each vertex is x, y, z.
]);

const colors = new Float32Array([
  // TODO: 3 RGB colors for triangle A, then 3 RGB colors for triangle B.
]);

// TODO 2: Upload positions and colors into separate ARRAY_BUFFERs.
// TODO 3: Configure a_position (3 floats) and a_color (3 floats).
// TODO 4: Enable depth test and set depthFunc to LESS.
// TODO 5: Clear both color and depth buffers.
// TODO 6: Draw A then B. Then reverse the calls to compare.
// TODO 7: Disable depth test and repeat the order comparison.

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.03, 0.04, 0.07, 1.0);
console.log("Experiment 01 starter loaded. Complete the TODOs.");
