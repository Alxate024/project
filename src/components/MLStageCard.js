import React from "react";
import { motion } from "framer-motion";

export default function MLStageCard({ icon: Icon, title, description, delay, index }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * index }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-10 h-10 text-blue-400 mr-4" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
