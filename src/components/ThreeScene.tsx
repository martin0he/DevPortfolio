import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { Model } from "./Model";
import * as THREE from "three";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const InteractiveModel = () => {
  const modelRef = useRef<Mesh>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getScaleAndPosition = () => {
    if (isSmallScreen) return { scale: 15, position: [0, -3, 0] };
    if (isMediumScreen) return { scale: 20, position: [0, -4, 0] };
    return { scale: 25, position: [0, -5, 0] };
  };

  const { scale, position } = getScaleAndPosition();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.021;
    }
  });

  return (
    <mesh ref={modelRef}>
      <Model scale={scale} position={position} />
    </mesh>
  );
};

const AsciiRenderer = () => {
  const { gl, scene, camera } = useThree();
  const effectRef = useRef<AsciiEffect | null>(null);

  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 70;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  useEffect(() => {
    camera.position.set(8, 2.2, 2);
    camera.lookAt(new THREE.Vector3(0, 22, 0));
    camera.updateProjectionMatrix();
  }, [camera]);

  useEffect(() => {
    gl.domElement.style.display = "none";

    const effect = new AsciiEffect(gl, " mh.:-+*=%@#", { invert: false });
    const updateEffectSizeAndPosition = () => {
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.width = `${window.innerWidth + 300}px`;
      effect.domElement.style.height = `${window.innerHeight}px`;
      effect.domElement.style.marginLeft = `calc(-${
        window.innerWidth * 0.33
      }px)`;
      effect.domElement.style.zIndex = "10";
    };

    updateEffectSizeAndPosition();

    window.addEventListener("resize", updateEffectSizeAndPosition);
    effect.domElement.style.color = "white";
    effect.domElement.style.backgroundColor = "transparent";
    gl.domElement.parentElement?.appendChild(effect.domElement);

    effectRef.current = effect;

    document.body.style.overflow = "hidden";

    return () => {
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
    <Box width="100%" height="100%" overflow="hidden">
      <Canvas
        shadows
        style={{
          width: "100%",
          height: "100%",
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
    </Box>
  );
}

export default ThreeScene;
