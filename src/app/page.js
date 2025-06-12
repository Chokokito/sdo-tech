"use client";
import MainButton from "@/components/main-button";
import { motion } from "framer-motion";
import FuzzyText from "@/components/Reactbites/FuzzyText";

export default function Home() {
  return (
    <div>
      <motion.div className="min-h-screen flex items-center justify-center ">
        <MainButton label={"Miguel"}></MainButton>
      </motion.div>
    </div>
  );
}
