import React from 'react';
import Scene3D from './3d/Scene3D';
import ModelLoader from './3d/ModelLoader';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductCard3D = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full"
    >
      <div className="h-64 bg-slate-100/50 relative">
        <Scene3D cameraPos={[3, 2, 3]} controls={true}>
          <ModelLoader 
            url={product.model_url} 
            scale={product.scale || 1}
            floating={true}
          />
        </Scene3D>
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-custom shadow-sm">
          ${product.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl text-space-dark">{product.name}</h3>
        <p className="text-slate-500 text-sm mt-2 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto pt-6 flex gap-3">
          <button className="flex-grow btn-primary py-2 px-4 text-sm flex items-center justify-center gap-2">
            <ShoppingCart size={16} /> Add
          </button>
          <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
            <Eye size={18} className="text-slate-600" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard3D;
