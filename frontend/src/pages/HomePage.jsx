import React from 'react';
import Scene3D from '../components/3d/Scene3D';
import ModelLoader from '../components/3d/ModelLoader';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center px-10 pt-20">
        <div className="md:w-1/2 text-left z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-display font-black leading-none text-space-dark"
          >
            Design Your <br />
            <span className="text-indigo-custom">Dream Space</span> <br />
            in 3D & AI.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 max-w-lg"
          >
            Experience the future of interior design. Transform your house with real-time AI suggestions and immersive 3D visualization.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <button className="btn-primary flex items-center gap-2">
              Start Designing
            </button>
            <button className="btn-secondary">
              View Showroom
            </button>
          </motion.div>
        </div>

        <div className="md:w-1/2 h-[600px] w-full mt-10 md:mt-0 relative">
          <Scene3D cameraPos={[8, 5, 8]}>
            <ModelLoader 
               url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/couch-blue/model.gltf" 
               scale={2}
               position={[0, -0.5, 0]}
            />
          </Scene3D>
          
          <div className="absolute bottom-10 right-10 glass-card p-4 rounded-2xl animate-float">
            <p className="text-xs font-bold text-indigo-custom uppercase tracking-widest">Live Preview</p>
            <p className="text-sm text-slate-700">Velvet Modern Sofa</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
