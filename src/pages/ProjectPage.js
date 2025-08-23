import React from 'react';
import { motion } from 'framer-motion';

export default function ProyectPage() {
  // 🔹 Bloque reutilizable para cada sección
  const AnalysisBlock = ({ title, description, pythonCode, analysisText, visualizationContent }) => (
    <section className="mb-10 bg-white p-8 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-blue-300">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      {pythonCode && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Código Python</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
            <code>{pythonCode}</code>
          </pre>
        </div>
      )}

      {analysisText && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Análisis Textual</h3>
          <p className="text-gray-700 leading-relaxed">{analysisText}</p>
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Visualización / Resultados</h3>
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-300 min-h-[200px] flex items-center justify-center text-gray-500 italic">
          {visualizationContent || <p>Pega aquí tus imágenes o resultados de Colab.</p>}
        </div>
      </div>
    </section>
  );

  // 🔹 Secciones principales
  const sections = [
    {
      title: "Laboratorio de Análisis de Datos",
      description: "Visualiza directamente el notebook de análisis de datos publicado en GitHub usando Nbviewer.",
      pythonCode: null,
      analysisText:
        "Este notebook contiene todo el análisis exploratorio de datos, incluyendo carga, limpieza, normalización y visualización.",
      visualizationContent: (
        <iframe
          src="https://nbviewer.org/github/Alxate024/Proyecto-Ia-exploratorio/blob/main/ANALISIS_DE_BASE_DE_DATOS.ipynb"
          width="100%"
          height="800"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
          title="Notebook Nbviewer"
        ></iframe>
      ),
    },
    {
      title: "Resumen del Proyecto",
      description: "Este proyecto analiza datos de grupos de investigación reconocidos en Colombia.",
      pythonCode: null,
      analysisText:
        "Se aplican técnicas de análisis de datos y visualización para extraer patrones y relaciones relevantes.",
      visualizationContent: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* 🔹 Título principal */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          PROYECTO FINAL - ANÁLISIS DE GRUPOS DE INVESTIGACIÓN
        </h1>

        {/* 🔹 Intro */}
        <p className="text-lg text-gray-700 mb-10 text-center">
          Este proyecto tiene como objetivo realizar un análisis exploratorio profundo sobre la base de datos
          de grupos de investigación reconocidos en Colombia, aplicando técnicas de limpieza, normalización
          y visualización de datos.  
          El desarrollo incluye la carga e inspección inicial de la información, tratamiento de valores nulos,
          normalización mediante Min-Max y Z-score, y análisis estadístico tanto univariado como bivariado.  
          Asimismo, se generan representaciones gráficas como histogramas, gráficos de densidad, diagramas de
          barras, gráficos de pastel, mapas de calor y treemaps interactivos con el fin de identificar patrones,
          tendencias y relaciones clave dentro de los datos.
        </p>

        {/* 🔹 Bloque PDF */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">📄 Proyecto completo en PDF</h2>
          <p className="text-gray-700 mb-4">
            Para conocer en detalle el desarrollo del proyecto, visualizar los análisis y descargar el informe completo en PDF, 
            accede al siguiente enlace. Allí encontrarás todas las gráficas, explicaciones y resultados del estudio.
          </p>
          <a
            href="/Sustentacion-Proyecto-Final-Juan-Pablo-Alzate-y-Romel-Bayer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Ver y descargar proyecto en PDF
          </a>
        </div>

        {/* 🔹 Render dinámico de secciones */}
        {sections.map((sec, idx) => (
          <AnalysisBlock key={idx} {...sec} />
        ))}

        {/* 🔹 Presentación del equipo */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-green-800 mb-4 border-b-2 pb-2 border-green-300">
            Presentación del Equipo
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Video Juan Pablo */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Juan Pablo Alzate Villada
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg border border-gray-300 overflow-hidden mb-4">
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  poster="/videos/alzate-thumbnail.jpg"
                >
                  <source src="/videos/Alzate_IA.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
            </div>

            {/* Video Romel */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Romel Bayer</h3>
              <div className="aspect-video bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center mb-4">
                {/* Aquí va el video de Romel */}
                <div className="text-center text-gray-500">
                  <video
                  controls
                  className="w-full h-full object-cover rounded-lg"
                  poster="/videos/alzate-thumbnail.jpg"
                >
                  <source src="/videos/Bayer_IA.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
                  <p className="text-sm">Video presentación D-ID</p>
                  <p className="text-xs text-gray-400">Sube aquí el video de Romel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info D-ID */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">📹 Videos de Presentación con D-ID</h3>
            <p className="text-gray-700 text-center mb-4">
              Conoce a los integrantes del equipo a través de nuestros videos de presentación creados con tecnología D-ID,
              donde explicamos los aspectos más relevantes del proyecto y nuestras contribuciones al análisis de datos.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong>Tecnología:</strong> D-ID AI
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong>Formato:</strong> Video MP4
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <strong>Duración:</strong> Aprox. 2-3 min c/u
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
