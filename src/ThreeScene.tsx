import React, { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

let camera: THREE.PerspectiveCamera;
let controls: TrackballControls;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let effect: AsciiEffect;
let sphere: THREE.Mesh;
//let cube: THREE.Mesh;

const start = Date.now();

const ThreeScene: React.FC = () => {
  useEffect(() => {
    init();
    return () => {
      // Cleanup logic if needed
      renderer.dispose(); // Clean up renderer
    };
  }, []);

  const init = () => {
    camera = new THREE.PerspectiveCamera(70, 1, 1, 1000); // Aspect ratio 1 for square aspect
    camera.position.y = 150;
    camera.position.z = 500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    sphere = new THREE.Mesh(
      new THREE.SphereGeometry(200, 20, 10),
      new THREE.MeshPhongMaterial({ flatShading: true })
    );
    scene.add(sphere);
    /*
    cube = new THREE.Mesh(
      new THREE.BoxGeometry(110, 110, 200),
      new THREE.MeshPhongMaterial({ flatShading: true })
    );
    scene.add(cube);
*/
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(550, 550); // Set canvas size to 550px x 550px
    renderer.setAnimationLoop(animate);

    effect = new AsciiEffect(renderer, " mh.:-+*=%@#", { invert: true });
    effect.setSize(550, 550); // Set effect size to match canvas size
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "transparent";

    // Append effect.domElement instead of renderer.domElement
    document.body.appendChild(effect.domElement);

    controls = new TrackballControls(camera, effect.domElement);

    window.addEventListener("resize", onWindowResize);
  };

  const onWindowResize = () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(550, 550); // Set renderer size to maintain aspect ratio
    effect.setSize(550, 550); // Set effect size to match canvas size
  };

  const animate = () => {
    const timer = Date.now() - start;

    sphere.rotation.y = timer * 0.0003;

    controls.update();

    effect.render(scene, camera);
  };

  return <></>; // No need to return anything as we directly manipulate the DOM
};

export default ThreeScene;
