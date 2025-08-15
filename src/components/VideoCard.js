import React from 'react';
import { motion } from 'framer-motion';

export default function VideoCard({ videoUrl, title, description }) {
  const isYouTube = videoUrl.includes('youtube') || videoUrl.includes('youtu.be');
  const isMp4 = videoUrl.endsWith('.mp4');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        {isYouTube ? (
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : isMp4 ? (
          <video
            className="absolute top-0 left-0 w-full h-full"
            controls
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : (
          <p>No se puede mostrar este tipo de video.</p>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}