import React, { Suspense } from 'react';
import { useGLTF, Float } from '@react-three/drei';

const ModelLoader = ({ url, position = [0, 0, 0], scale = 1, rotation = [0, 0, 0], floating = true }) => {
  const { scene } = useGLTF(url);

  const Model = () => (
    <primitive 
      object={scene} 
      position={position} 
      scale={scale} 
      rotation={rotation} 
      castShadow 
      receiveShadow 
    />
  );

  return (
    <Suspense fallback={null}>
      {floating ? (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Model />
        </Float>
      ) : (
        <Model />
      )}
    </Suspense>
  );
};

export default ModelLoader;
