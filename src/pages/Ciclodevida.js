import React from 'react';
import { motion } from 'framer-motion';
import MLCycleHeader from '../components/MLCycleHeader';
import MLStageCard from '../components/MLStageCard';
import { Database, Wrench, Brain, Rocket, Monitor, Repeat } from 'lucide-react';

const MatrixCode = () => {
  const characters = '0123456789ABCDEF';
  const randomChar = () => characters[Math.floor(Math.random() * characters.length)];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 font-mono text-xs opacity-50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [Math.random() * window.innerHeight, window.innerHeight + 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
          style={{
            whiteSpace: 'nowrap',
            transform: `rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`,
          }}
        >
          {Array.from({ length: Math.floor(Math.random() * 20) + 5 }).map((_, j) => randomChar())}
        </motion.div>
      ))}
    </div>
  );
};

const AtomParticles = () => {
  return (
    <div className="absolute inset-0 z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.1,
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

const App = () => {
  const mlStages = [
    {
      icon: Database,
      title: "1. Recolección de Datos",
      description: "Adquisición y recopilación de datos relevantes de diversas fuentes para el  basado en la base de datos oficiales:https://www.datos.gov.co/Ciencia-Tecnolog-a-e-Innovaci-n/Grupos-de-Investigaci-n-Reconocidos/hrhc-c4wu/about_data."
    },
    {
      icon: Wrench,
      title: "2. Preprocesamiento de Datos",
      description: "Limpieza, transformación y preparación de los datos para que sean aptos para el entrenamiento."
    },
    {
      icon: Brain,
      title: "3. Entrenamiento del Modelo",
      description: "Alimentar el modelo con datos preprocesados para que aprenda patrones y relaciones."
    },
    {
      icon: Rocket,
      title: "4. Evaluación del Modelo",
      description: "Medir el rendimiento del modelo con datos no vistos para asegurar su precisión y robustez."
    },
    {
      icon: Monitor,
      title: "5. Despliegue del Modelo",
      description: "Integrar el modelo entrenado en un entorno de producción para su uso en el mundo real."
    },
    {
      icon: Repeat,
      title: "6. Monitoreo y Mantenimiento",
      description: "Supervisar el rendimiento del modelo en producción y realizar ajustes si es necesario."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans py-12 px-4 relative overflow-hidden">
      <MatrixCode />
      <AtomParticles />
      <div className="relative z-10 container mx-auto max-w-7xl">
        <MLCycleHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mlStages.map((stage, index) => (
            <MLStageCard
              key={index}
              icon={stage.icon}
              title={stage.title}
              description={stage.description}
              delay={0.5}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;