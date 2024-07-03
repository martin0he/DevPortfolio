import React, { useEffect } from "react";
import * as THREE from "three";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import useWindowDimensions from "./useWindowDimensions";

let camera: THREE.PerspectiveCamera;
let controls: TrackballControls;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let effect: AsciiEffect;
let model: THREE.Group; // Changed from sphere to model

const start = Date.now();

const ThreeScene: React.FC = () => {
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    init();
    return () => {
      // Cleanup logic
      if (controls) controls.dispose();
      if (renderer) renderer.dispose();
      if (effect && effect.domElement) {
        document.body.removeChild(effect.domElement);
      }
    };
  }, []);

  const init = () => {
    camera = new THREE.PerspectiveCamera(50, 1, 1, 1500);
    camera.position.x = 0; // Adjust if you want to view the model from a slight angle
    camera.position.y = 650; // Adjust to be slightly above the model to see the top of the face
    camera.position.z = 550;

    // Tilting the camera upwards
    camera.rotation.x = 5;
    camera.fov = 30; // Decrease this value to zoom in, increase to zoom out
    camera.updateProjectionMatrix(); // Apply the change

    scene = new THREE.Scene();
    scene.background = new THREE.Color(37, 37, 38);

    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load("myface.glb", (gltf) => {
      model = gltf.scene;
      // Adjust model scale and position as needed
      model.scale.set(1000, 1000, 1000); // Example scale, adjust as needed
      model.position.y = 0;
      scene.add(model);
    });

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(0.45 * width, 0.67 * height);
    renderer.setAnimationLoop(animate);

    effect = new AsciiEffect(renderer, " mh.:-+*=%@#", { invert: false });
    effect.setSize(0.45 * width, 0.67 * height);
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "transparent";

    document.body.appendChild(effect.domElement);

    controls = new TrackballControls(camera, effect.domElement);

    window.addEventListener("resize", onWindowResize);
  };

  const onWindowResize = () => {
    const aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(550, 550);
    effect.setSize(550, 550);
  };

  const animate = () => {
    const timer = Date.now() - start;

    if (model) {
      model.rotation.y = timer * 0.0003;
    }

    controls.update();
    effect.render(scene, camera);
  };

  return <></>;
};

export default ThreeScene;
