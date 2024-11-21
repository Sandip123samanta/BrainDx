import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Brain(props) {
  const brain = useRef(null);
  const { nodes, materials } = useGLTF('/brain_tumor.glb');

  useFrame(() => {
    if (brain.current) brain.current.rotation.y += 0.01;
  });

  return (
    <group ref={brain} {...props} dispose={null}>
      <group position={[7.345, 1.89, -1.89]} rotation={[0, 0, -Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.mtl1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.mtl4865}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.mtl9617}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.mtl9617}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/brain_tumor.glb');
