import { motion } from "framer-motion";

export default function OrnamentButton({ label, icon }) {
  return (
    <motion.button
      transition={{ type: "spring", duration: 1, bounce: 0.5 }}
      initial={{ translateX: -150 }}
      animate={{ scale: 1.05, display: "flex", translateX: 0 }}
      className="flex text-lg text-slate-50 items-center justify-around transition-colors color-shadow bg-teal-500 hover:bg-emerald-600 p-4 rounded-[200px] cursor-pointer hover:emerald-emerald-800   md:w-[400px] sm:w-[300px]"
    >
      <span className="flex items-center gap-4 w-full justify-center">
        {label}
        {icon && (
          <span className="text-5xl flex items-center justify-center">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
}
