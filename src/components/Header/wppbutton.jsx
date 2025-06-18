"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneForwardedIcon } from "lucide-react";
import Link from "next/link";

export default function WppButton({ label }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        visualDuration: 0.5,
      }}
    >
      <Button
        variant="outline"
        size="lg"
        className={
          "bg-emerald-500 text-white font-bold py-6 px-8 rounded-[200px] cursor-pointer sm:w-min md:w-50 lg:w-70 w-full flex items-center justify-center transition-all"
        }
      >
        <Link href="" className="hidden md:inline transition-all">
          {label}
        </Link>
        <PhoneForwardedIcon className="size-5"></PhoneForwardedIcon>
      </Button>
    </motion.div>
  );
}
