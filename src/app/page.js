"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoreAbout from "@/components/MoreAbout";
import CustomersList from "@/components/CustomersList";
import ServicesSec from "@/components/ServicesSec";
import Contact from "@/components/Contact";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div>
      <Header className={poppins.className}></Header>
      <Hero className={poppins.className}></Hero>
      <MoreAbout className={poppins.className}></MoreAbout>
      <CustomersList className={poppins.className}></CustomersList>
      <ServicesSec className={poppins.className}></ServicesSec>
      <Contact className={poppins.className}></Contact>
    </div>
  );
}
