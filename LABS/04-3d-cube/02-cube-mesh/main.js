const canvas = document.getElementById("canvas");
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
    // x, y, z
  ]),

  // TODO 2: Define one RGB color for each of the 8 vertices.
  colors: new Float32Array([
    // r, g, b
  ]),

  // TODO 3: Define 36 indices: 6 faces × 2 triangles × 3 indices.
  // Use only vertex indices 0..7.
  indices: new Uint16Array([
    // front, back, left, right, top, bottom
  ])
};

// TODO 4: Create two ARRAY_BUFFERs and upload positions/colors.
// TODO 5: Create one ELEMENT_ARRAY_BUFFER and upload indices.
// TODO 6: Configure a_position and a_color attributes.
// TODO 7: Enable DEPTH_TEST with LESS.
// TODO 8: Clear COLOR_BUFFER_BIT and DEPTH_BUFFER_BIT.
// TODO 9: Draw the mesh with drawElements(TRIANGLES, 36, UNSIGNED_SHORT, 0).

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.03, 0.04, 0.07, 1.0);

console.log("Experiment 02 starter loaded. Complete the cube Mesh TODOs.");
