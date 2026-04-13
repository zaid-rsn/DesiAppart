import React, { useState } from 'react';
import Scene3D from '../components/3d/Scene3D';
import ModelLoader from '../components/3d/ModelLoader';
import { motion } from 'framer-motion';
import { Grid, Trash2, Camera, Sun, Moon } from 'lucide-react';

const DesignStudio = () => {
  const [items, setItems] = useState([
    { id: 1, type: 'couch', pos: [0, -0.5, 0], scale: 1.5, url: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/couch-blue/model.gltf' }
  ]);
  const [mood, setMood] = useState('day');

  return (
    <div className="pt-24 h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar Controls */}
      <div className="w-full md:w-80 bg-white border-r border-slate-200 p-6 flex flex-col z-10">
        <h2 className="text-2xl font-black text-space-dark">Designy</h2>
        <p className="text-sm text-slate-500 mt-2">Drag and drop furniture to visualize your dream piece.</p>

        <div className="mt-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Mood Selector</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setMood('day')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${mood === 'day' ? 'border-indigo-custom bg-indigo-custom/5 text-indigo-custom' : 'border-slate-100 text-slate-400'}`}
            >
              <Sun size={18} /> Day
            </button>
            <button
              onClick={() => setMood('night')}
              className={`p-3 rounded-xl border flex items-center justify-center gap-2 transition-all ${mood === 'night' ? 'border-indigo-custom bg-indigo-custom/5 text-indigo-custom' : 'border-slate-100 text-slate-400'}`}
            >
              <Moon size={18} /> Night
            </button>
          </div>
        </div>

        <div className="mt-10 flex-grow">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Objects in Scene</h3>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.id} className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 capitalize">{item.type}</span>
                <button className="text-slate-400 hover:text-coral-custom transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-primary w-full mt-6 py-4 flex items-center justify-center gap-2">
          <Camera size={20} /> Snapshot Scene
        </button>
      </div>

      {/* Main 3D Canvas */}
      <div className="flex-grow relative bg-slate-200">
        <Scene3D cameraPos={[10, 10, 10]}>
          <gridHelper args={[20, 20, 0xbfdbfe, 0xe2e8f0]} />

          {mood === 'night' && (
            <color attach="background" args={['#0f172a']} />
          )}

          {items.map(item => (
            <ModelLoader
              key={item.id}
              url={item.url}
              position={item.pos}
              scale={item.scale}
              floating={false}
            />
          ))}
        </Scene3D>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
          <div className="glass px-6 py-3 rounded-full flex gap-6 text-slate-600">
            <button className="hover:text-indigo-custom flex items-center gap-2"><Grid size={18} /> Grid</button>
            <button className="hover:text-indigo-custom flex items-center gap-2">✨ AI Suggest</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStudio;
