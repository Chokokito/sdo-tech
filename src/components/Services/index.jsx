'use client";';
import { motion } from "framer-motion";
import { BrickWall, HouseWifi, ShieldBanIcon, Zap } from "lucide-react";
import ServicesSection from "./section";
import Contact from "../Contact";

export default function Services({ className }) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <motion.div
        className="w-full px-[13vw]  py-10"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { ease: "linear" },
          layout: { duration: 0.5 },
        }}
      >
        <h1 className="poppins-bold text-4xl text-left">
          Infraestrutura de <b className="text-blue-600">Tecnologia</b>,{" "}
          <br></br>do<b className="text-blue-600"> Projeto </b>à{" "}
          <b className="text-blue-600">Execução</b>.
          <p className="poppins-regular text-2xl text-left mt-5 max-w-4xl text-slate-700">
            Explore o ecossistema de soluções que a SDO oferece para garantir a
            performance, segurança e escalabilidade da sua operação.
          </p>
        </h1>
        <div
          direction="middle"
          className="md:w-[50%] flex border-slate-300 border-2 my-5 p-2 rounded-3xl"
        >
          <div className="flex gap-7">
            <a href="#infra">
              <BrickWall
                size={52}
                className="hover:stroke-blue-400 cursor-pointer "
              ></BrickWall>
            </a>

            <a href="#security">
              <ShieldBanIcon
                size={52}
                className="hover:stroke-blue-400 cursor-pointer "
              ></ShieldBanIcon>
            </a>

            <a href="#energy">
              <Zap
                size={52}
                className="hover:stroke-blue-400 cursor-pointer "
              ></Zap>
            </a>

            <a href="#wifi">
              <HouseWifi
                size={52}
                className="hover:stroke-blue-400 cursor-pointer "
              ></HouseWifi>
            </a>
          </div>
        </div>
      </motion.div>
      <ServicesSection></ServicesSection>
      <Contact></Contact>
    </div>
  );
}
