import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { Model } from "./Model";
import * as THREE from "three";

const InteractiveModel = () => {
  const modelRef = useRef<Mesh>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.018;
    }
  });

  return (
    <mesh ref={modelRef}>
      <Model scale={25} position={[0, -4, 3]} />
    </mesh>
  );
};

const AsciiRenderer = () => {
  const { gl, scene, camera } = useThree();
  const effectRef = useRef<AsciiEffect | null>(null);

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      // Increase the FOV
      camera.fov = 90;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  useEffect(() => {
    // Assuming 'camera' is your PerspectiveCamera instance
    // Position the camera closer to the model and halfway up its height
    // Adjust the Y position to half of your model's estimated height
    camera.position.set(8, 3.2, 0.01); // Increased Y value to elevate the camera

    // Tilt the camera upwards by making it look at a point slightly below its new height
    // Assuming the model or point of interest is around the origin (0, 0, 0)
    // Adjust the Y value in lookAt to control the tilt
    camera.lookAt(new THREE.Vector3(0, 20, 0));

    camera.updateProjectionMatrix(); // Update the camera to apply the new orientation
  }, [camera]);

  useEffect(() => {
    // Hide the original canvas
    gl.domElement.style.display = "none";

    // Create the ASCII effect
    const effect = new AsciiEffect(gl, " mh.:-+*=%@#", { invert: false });
    const updateEffectSizeAndPosition = () => {
      const width = window.innerWidth * 0.5; // 50% of window width
      const height = window.innerHeight * 0.5; // 50% of window height
      effect.setSize(width + 85, height + 450);
      effect.domElement.style.width = `${width}px`;
      effect.domElement.style.height = `${height + 150}px `;
      effect.domElement.style.position = "absolute";
      effect.domElement.style.bottom = "0"; // Position at the bottom
      effect.domElement.style.left = "0"; // Position at the left
      effect.domElement.style.zIndex = "10"; // Ensure it's above the canvas
    };

    // Initial size and position update
    updateEffectSizeAndPosition();

    // Listen for window resize to update size and position
    window.addEventListener("resize", updateEffectSizeAndPosition);

    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "transparent";
    document.body.appendChild(effect.domElement);
    effectRef.current = effect;

    // Prevent the body from scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Cleanup
      window.removeEventListener("resize", updateEffectSizeAndPosition);
      if (effectRef.current && effectRef.current.domElement) {
        document.body.removeChild(effectRef.current.domElement);
      }
      gl.domElement.style.display = "";
      document.body.style.overflow = "";
    };
  }, [gl]);

  useFrame(() => {
    if (effectRef.current) {
      effectRef.current.render(scene, camera);
    }
  }, 1);

  return null;
};

function ThreeScene() {
  return (
    <Canvas
      shadows
      style={{
        width: "700px",
        height: "700px",
        display: "block",
        margin: "auto",
      }}
    >
      <ambientLight intensity={0.9} />
      <spotLight
        position={[0, 10, 10]}
        angle={0.45}
        penumbra={0.7}
        castShadow
      />
      <InteractiveModel />
      <AsciiRenderer />
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeScene;
