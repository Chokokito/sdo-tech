"use client";
import MainButton from "@/components/main-button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div className="min-h-screen flex items-center justify-center ">
        <MainButton label={"Dinossauro"}></MainButton>
      </motion.div>
    </div>
  );
}
