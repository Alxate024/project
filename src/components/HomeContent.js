import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white relative overflow-hidden">
      {/* 🔮 Fondo tecnológico dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 z-0"></div>
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.12)_0,transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(0,255,255,0.08)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,0,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_6s_infinite]"></div>

      {/* ✨ Título futurista */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold tracking-wide drop-shadow-[0_0_25px_#00ffe5] z-10"
      >
        🌐 Proyecto Tecnológico
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl md:text-3xl font-semibold mt-4 text-purple-400 drop-shadow-[0_0_15px_#a855f7] z-10"
      >
        Proyecto Tecnologicos en Colombia
      </motion.h2>

      {/* Texto descriptivo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg md:text-xl max-w-3xl text-gray-300 z-10 leading-relaxed mt-6"
      >
        Bienvenido al <span className="text-cyan-400 font-semibold">laboratorio cibernético</span>.  
        Aquí podrás explorar el <span className="text-green-400">ciclo de vida del Machine Learning</span>,  
        conocer el <span className="text-yellow-400">contexto del proyecto</span>,  
        y analizar las <span className="text-blue-400">estadísticas avanzadas</span> con visualizaciones interactivas.
      </motion.p>

      {/* ⚡ Botones futuristas */}
      <div className="flex flex-wrap gap-8 justify-center z-10 mt-12">
        <Link
          to="/inicio"
          className="relative px-10 py-4 text-lg font-bold text-cyan-300 uppercase tracking-widest
                     border border-cyan-400 rounded-xl shadow-[0_0_15px_#00ffe5]
                     bg-white/5 backdrop-blur-lg
                     hover:text-black hover:bg-cyan-300 hover:shadow-[0_0_25px_#00ffe5]
                     transition-all duration-300 overflow-hidden"
        >
          🚀 Inicio
        </Link>

        <Link
          to="/ciclodevida"
          className="relative px-10 py-4 text-lg font-bold text-green-300 uppercase tracking-widest
                     border border-green-400 rounded-xl shadow-[0_0_15px_#22ff88]
                     bg-white/5 backdrop-blur-lg
                     hover:text-black hover:bg-green-300 hover:shadow-[0_0_25px_#22ff88]
                     transition-all duration-300 overflow-hidden"
        >
          🔄 Ciclo de Vida ML
        </Link>

        <Link
          to="/proyecto-final"
          className="relative px-10 py-4 text-lg font-bold text-purple-300 uppercase tracking-widest
                     border border-purple-400 rounded-xl shadow-[0_0_15px_#a855f7]
                     bg-white/5 backdrop-blur-lg
                     hover:text-black hover:bg-purple-300 hover:shadow-[0_0_25px_#a855f7]
                     transition-all duration-300 overflow-hidden"
        >
          📊 Estadísticas
        </Link>
      </div>

      {/* 🌌 Código binario flotando */}
      <div className="absolute bottom-6 text-green-400 text-xs font-mono opacity-40 animate-pulse z-0">
        101010101101100101001010110010101...
      </div>
    </div>
  );
}
