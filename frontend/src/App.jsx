import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Marketplace from './pages/Marketplace';
import DesignStudio from './pages/DesignStudio';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-space-light">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Future routes for Studio and Marketplace */}
            <Route path="/studio" element={<DesignStudio />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </main>

        <footer className="py-10 text-center text-slate-400 text-sm">
          &copy; 2026 DesiAppart - AI Powered Interior Design
        </footer>
      </div>
    </Router>
  );
}

export default App;
