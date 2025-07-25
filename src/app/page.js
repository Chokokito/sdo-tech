"use client";
import MainButton from "@/components/main-button";
import { motion } from "framer-motion";
import FuzzyText from "@/components/Reactbites/FuzzyText";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoreAbout from "@/components/MoreAbout";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <MoreAbout></MoreAbout>
    </div>
  );
}
