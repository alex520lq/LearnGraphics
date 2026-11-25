// Experiment 03: Back-face Culling
// Start from the verified Mesh implementation in ../02-cube-mesh/main.js.
// Copy the working cube Mesh and rendering setup here only after experiment 02 passes.

const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
if (!gl) throw new Error("WebGL 1.0 is not available.");

// TODO 1: Bring in the verified cube Mesh and shader setup from experiment 02.
// TODO 2: First render with CULL_FACE disabled.
// TODO 3: Enable CULL_FACE, set frontFace(CCW), and cullFace(BACK).
// TODO 4: Reverse one face's winding and compare the result.

console.log("Experiment 03 starter loaded. Complete the TODOs after experiment 02.");
