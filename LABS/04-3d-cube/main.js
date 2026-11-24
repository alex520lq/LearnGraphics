const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas"));
const gl = canvas.getContext("webgl");

if (!gl) {
  throw new Error("WebGL 1.0 is not available in this browser.");
}

// Lesson 04 starter:
// Complete the TODOs while following README.md.
// Keep the first implementation small and explain each WebGL state you enable.

const vertexShaderSource = `
attribute vec3 a_position;
attribute vec3 a_color;

varying vec3 v_color;

void main() {
  // TODO 1: Pass the 3D position to clip space.
  // This starter intentionally does not provide a camera/projection matrix yet.
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

// TODO 2: Define a cube Mesh with 3D positions, colors and Uint16 indices.
// Tip: for a first cube, decide whether you want 8 shared corner vertices
// or 24 face-specific vertices. Explain the trade-off in your README.
const mesh = {
  positions: new Float32Array([
    // TODO: x, y, z for cube vertices
  ]),
  colors: new Float32Array([
    // TODO: r, g, b for each vertex
  ]),
  indices: new Uint16Array([
    // TODO: triangle indices for all six faces
  ])
};

// TODO 3: Create ARRAY_BUFFERs for positions and colors.
// TODO 4: Create ELEMENT_ARRAY_BUFFER for mesh.indices.
// TODO 5: Configure a_position and a_color attributes.
// TODO 6: Enable depth testing and choose the correct depth clear value.
// TODO 7: Experiment with gl.CULL_FACE and triangle winding.
// TODO 8: Draw the cube with gl.drawElements().

gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.03, 0.04, 0.07, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
gl.useProgram(program);

console.log("LearnGraphics Lesson 04 starter loaded.");
