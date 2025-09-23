import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import THREE

export function Model(props) {
  const { nodes, materials } = useGLTF("/hitem3d.glb");

  // You can change properties directly on the material
  // For example, to make it red and metallic:
  materials.pbr_material.color = new THREE.Color("#F3F3F3");
  materials.pbr_material.metalness = 1.5;
  materials.pbr_material.roughness = 0.2;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.tmp593hadh7obj.geometry}
        material={materials.pbr_material} // The modified material is used here
      />
    </group>
  );
}

useGLTF.preload("/hitem3d.glb");