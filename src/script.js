import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// initialize the scene
const scene = new THREE.Scene();

// create custom geometry

// const vertices = new Float32Array([
//   0,0,0,
//   0,2,0,
//   2,0,0
// ]);

// pass the vertices array to a BufferAttribute threejs.org
// const bufferAttribute = new THREE.BufferAttribute(vertices, 3);
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', bufferAttribute);
// add objects to the scene
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

// add objects to a scene

const geometry = new THREE.CapsuleGeometry(5,3,16,52,24);
const material = new THREE.MeshBasicMaterial({color: 'dodgerblue', wireframe: true});
const capsule = new THREE.Mesh(geometry, material);
// const cubeMaterial = new THREE.MeshBasicMaterial({ color: "dodgerblue", wireframe: true });
// const cubeMesh = new THREE.Mesh(geometry, cubeMaterial);

scene.add(capsule);



// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
camera.position.z = 5;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// render the scene
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
