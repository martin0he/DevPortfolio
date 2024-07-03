/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei";
// @ts-expect-error i need this to build
export function Model(props) {
  const { nodes } = useGLTF("/myface.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.mesh_0 as any).geometry}
        material={(nodes.mesh_0 as any).material}
      />
    </group>
  );
}

useGLTF.preload("/myface.glb");
