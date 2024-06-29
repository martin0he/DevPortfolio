import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const Cube = () => {
  const cubeRef = useRef<Mesh>(null);
  useFrame(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    cube.rotation.y += 0.02;
  });
  return (
    <mesh ref={cubeRef} scale={[2.2, 2.2, 2.2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="aqua" />
    </mesh>
  );
};

export default Cube;
