import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Capsule,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
} from '@react-three/drei';
import Brain from './Brain';
import CameraRig from './CameraRig';

function BrainModel() {
  return (
    <div className="h-[30em] w-full">
      <Canvas
        camera={{ position: [0, 0, 18] }}
        gl={{ antialias: false, alpha: false }}
        dpr={1}
        className="h-full"
      >
        <color args={['#c3e9ff']} attach="background" />
        <Suspense>
          <Capsule args={[10, 1, 4, 40]}>
            <MeshTransmissionMaterial
              thickness={0.1}
              anisotropy={0.9}
              ior={1}
              color={'#c3e9ff'}
              clearcoat={0}
              roughness={0.3}
              iridescence={0.7}
              iridescenceIOR={1}
              chromaticAberration={10}
            />
          </Capsule>
          <Brain scale={0.1} />

          <Environment preset="city" />
          <Text
            rotation={[0, 0, 0]}
            position={[0, 0, -10]}
            fontSize={13}
            color="#FFFFFF"
            letterSpacing={-0.05}
          >
            BrainDx
          </Text>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default BrainModel;
