import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';

const Scene3D = ({ children, cameraPos = [5, 5, 5], controls = true }) => {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={cameraPos} fov={50} />
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Environment preset="city" />
      
      {children}

      <ContactShadows 
        position={[0, -0.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4.5} 
      />

      {controls && <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} />}
    </Canvas>
  );
};

export default Scene3D;
