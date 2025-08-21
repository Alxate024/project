import React from "react";
import { motion } from "framer-motion";

export default function Inicio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-8"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          📖 Contexto del Proyecto
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Este proyecto surge en el marco del estudio de los grupos de investigación en Colombia, los cuales representan una parte fundamental en el desarrollo científico, tecnológico y académico del país.
La información fue obtenida de bases de datos oficiales, en donde se encuentra clasificada la producción investigativa, el nivel de reconocimiento de los grupos y su relación con diferentes áreas del conocimiento.

El propósito principal fue realizar un análisis exploratorio de datos (EDA) que permita:

Detectar patrones y tendencias relevantes en los grupos de investigación.

Identificar las áreas de mayor producción científica en Colombia.

Explorar la distribución de los grupos según categorías (instituciones, líneas de investigación, impacto, etc.).

Facilitar la comprensión de la información mediante visualizaciones interactivas y gráficas estadísticas.

Para ello, se aplicaron técnicas propias del ciclo de vida de Machine Learning:

Recolección de Datos: obtención de la información estructurada en formato digital.

Preprocesamiento: limpieza de registros inconsistentes, tratamiento de valores nulos y normalización de variables.

Análisis Univariado y Bivariado: estudio de variables individuales y relaciones entre ellas.

Visualización de Datos: histogramas, diagramas de barras, gráficos de pastel, treemaps, mapas de calor y gráficos de densidad.

Conclusiones: hallazgos clave sobre las tendencias de investigación y oportunidades de mejora en la clasificación de los grupos.

En este sentido, el proyecto no solo tiene un carácter académico, sino que también aporta valor estratégico al mostrar cómo las herramientas de análisis de datos pueden ser aplicadas en la investigación científica y en la toma de decisiones de política pública.
        </p>
      </div>
    </motion.div>
  );
}
