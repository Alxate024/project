import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContent from './components/HomeContent';
import ProjectPage from "./pages/ProyectPage"; 

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
        >
          <source src="https://videos.pexels.com/video-files/852292/852292-hd_1728_1080_25fps.mp4" type="video/mp4" />
        </video>

        {/* Contenido principal */}
        <div className="relative z-10 w-full">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/proyecto-final" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}