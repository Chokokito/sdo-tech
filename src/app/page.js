"use client";
import MainButton from "@/components/main-button";
import { motion } from "framer-motion";
import FuzzyText from "@/components/Reactbites/FuzzyText";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoreAbout from "@/components/MoreAbout";
import CustomersList from "@/components/CustomersList";
import ServicesSec from "@/components/ServicesSec";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <MoreAbout></MoreAbout>
      <CustomersList></CustomersList>
      <ServicesSec></ServicesSec>
      <Contact></Contact>
    </div>
  );
}
