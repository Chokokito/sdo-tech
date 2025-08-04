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
        visualDuration: 0.5,
      }}
      className="flex items-center justify-center w-full sm:w-auto"
    >
      <Button
        variant="outline"
        size="lg"
        className={
          "bg-emerald-600 text-white py-6 px-8 rounded-[25px] cursor-pointer  font-light border-none sm:w-min md:w-50 lg:w-70 w-full flex items-center justify-center gap-3 transition-all hover:bg-emerald-700 hover:text-white"
        }
      >
        <Link
          href=""
          className="hidden lg:flex transition-all sm:hidden text-lg font-extralight items-center justify-center gap-2 w-full"
        >
          <span className="flex items-center justify-center gap-2 w-full urbanist">
            {label}
            <PhoneForwardedIcon className="size-5 flex items-center justify-center" />
          </span>
        </Link>
        <span className="lg:hidden flex items-center justify-center">
          <PhoneForwardedIcon className="size-5 flex items-center justify-center" />
        </span>
      </Button>
    </motion.div>
  );
}
