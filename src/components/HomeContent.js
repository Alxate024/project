import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';
import { useNavigate } from "react-router-dom";

export default function HomeContent() {
  const [message, setMessage] = useState("¡Entra A nuestro proyecto campista !");
  const navigate = useNavigate();

  const handleClick = () => {
    setMessage("¡bienvenido campista!");
    navigate("/proyecto-final");
  };

  // Datos de ejemplo para el feed de videos
  const techVideos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/ihxUT1Burp8",
      title: "Video 1: Introducción a IA",
      description: "Video introductorio sobre inteligencia artificial."
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/Q7y5Obw-BIU",
      title: "Video 2: Machine Learning",
      description: "Conceptos básicos de machine learning."
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/D4VlmL3G4_o",
      title: "Video 3: matplotlib",
      description: "Introducción a la visualización de datos con matplotlib."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-10 rounded-lg shadow-xl text-center max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Grupos de investigación más conocidos en Colombia
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Un portal interactivo de Juan Pablo Alzate Villada y Romel Bayer.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out"
      >
        {message}
      </motion.button>
      
      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">
        Nuestro Feed de Videos Tecnológicos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techVideos.map(video => (
          <VideoCard
            key={video.id}
            videoUrl={video.url}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        (juan pablo alzate - Romel Bayer )
      </p>
    </motion.div>
  );
}