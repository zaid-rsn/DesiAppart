import React from 'react';
import ProductCard3D from '../components/ProductCard3D';
import { motion } from 'framer-motion';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Classic Velvet Lounge",
    description: "An elegant blue velvet sofa with golden legs. Perfect for modern living rooms.",
    price: 899,
    model_url: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/couch-blue/model.gltf",
    scale: 1.5
  },
  {
    id: 2,
    name: "Industrial Floor Lamp",
    description: "Sleek matte black floor lamp with adjustable head. Minimalist design.",
    price: 149,
    model_url: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/floor-lamp/model.gltf",
    scale: 2
  },
  {
    id: 3,
    name: "Scandi Coffee Table",
    description: "Natural oak coffee table with clean lines and a lower shelf for storage.",
    price: 299,
    model_url: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/coffee-table/model.gltf",
    scale: 2
  },
  {
    id: 4,
    name: "Ceramic Planter",
    description: "Large white ceramic planter with a drainage hole. Great for indoor plants.",
    price: 45,
    model_url: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/flower-pot/model.gltf",
    scale: 5
  }
];

const Marketplace = () => {
  return (
    <div className="pt-32 pb-20 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-indigo-custom font-bold uppercase tracking-widest text-sm">Our Collection</span>
            <h2 className="text-5xl font-black text-space-dark mt-2">The 3D Catalog</h2>
            <p className="text-slate-500 mt-4 max-w-xl text-lg">
              Explore furniture from every angle. High-quality 3D models linked directly to real inventory.
            </p>
          </div>
          
          <div className="flex gap-4">
            <select className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-custom/20 transition-all">
              <option>All Categories</option>
              <option>Living Room</option>
              <option>Lighting</option>
              <option>Accessories</option>
            </select>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {DUMMY_PRODUCTS.map(product => (
            <ProductCard3D key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;
