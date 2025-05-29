"use client";
import { motion } from "framer-motion";

export default function MainButton({ label, onClick, disabled = false }) {
  return (
    <motion.button
      className={`bg-blue-500 text-white font-bold py-6 px-8 rounded-[200px] w-[200px] cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: 5 }}
    >
      {label}
    </motion.button>
  );
}
