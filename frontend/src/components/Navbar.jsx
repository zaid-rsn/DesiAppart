import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles, Store, Layout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="glass px-8 py-4 rounded-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-black text-indigo-custom flex items-center gap-2">
          <Sparkles className="fill-indigo-custom" />
          <span>DesiAppart</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium font-sans">
          <Link to="/" className="hover:text-indigo-custom transition-colors flex items-center gap-1">
            <Home size={18} /> Home
          </Link>
          <Link to="/studio" className="hover:text-indigo-custom transition-colors flex items-center gap-1">
            <Layout size={18} /> Studio
          </Link>
          <Link to="/marketplace" className="hover:text-indigo-custom transition-colors flex items-center gap-1">
            <Store size={18} /> Market
          </Link>
        </div>

        <button className="btn-primary py-2 px-5 text-sm">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
