const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
if (!gl) throw new Error("WebGL 1.0 is not available.");

// Experiment 02: Cube Mesh
// Focus: represent a cube with 3D vertices and an index buffer.
// Do not enable face culling in this experiment.

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

function createProgram(gl, vsSource, fsSource) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
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

// TODO 1: Define a Mesh with 8 xyz positions.
// TODO 2: Define 8 RGB colors (one per vertex).
// TODO 3: Define 36 Uint16 indices (12 triangles).
const mesh = {
  positions: new Float32Array([]),
  colors: new Float32Array([]),
  indices: new Uint16Array([])
};

// TODO 4: Create and upload the position and color ARRAY_BUFFERs.
// TODO 5: Create and upload the ELEMENT_ARRAY_BUFFER.
// TODO 6: Configure both vertex attributes.
// TODO 7: Enable DEPTH_TEST, clear the depth buffer, and drawElements.

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.03, 0.04, 0.07, 1.0);
console.log("Experiment 02 starter loaded. Complete the TODOs.");
