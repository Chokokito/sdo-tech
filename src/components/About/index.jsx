import React from "react";
import SDOWLogo from "../ui/sdowhitelogo";
import { motion } from "framer-motion";
import Card from "./card";
import { FileBox } from "lucide-react";
import Contact from "../Contact";
import { ShineBorder } from "../magicui/shine-border";

export default function About() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <motion.div
        className="flex md:flex-row flex-col items-center justify-between gap-10 p-10 border-b-[1px] rounded-b-4xl rounded-l-4xl sm:w-[80vw] w-auto  max-h-[auto] bg-blue-600"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { ease: "linear" },
          layout: { duration: 0.5 },
        }}
      >
        <div className="flex flex-col  md:items-start items-center md:align-top max-w-[850px] md:justify-start justify-center  text-left -5">
          <h1 className="poppins-bold md:text-5xl  text-3xl leading-13 md:leading-15 text-white">
            Mais que Tecnologia,
            <br />
            <b className="text-white text-6xl mt-2">Confiança.</b>
          </h1>
          <p className="poppins-regular md:max-w-[100%] lg:max-w-[60%] w-full pt-5 pl-0 text-lg p-4 text-left text-white ">
            Em um mundo onde a tecnologia é a base de tudo, a complexidade pode
            ser um obstáculo. A <b>SDO</b> nasceu com um propósito claro:
            simplificar essa complexidade e entregar a base sólida que toda
            empresa precisa para operar com segurança e eficiência. Para nós,
            cada projeto de infraestrutura é um compromisso com a continuidade
            do seu negócio. Não entregamos apenas cabos, câmeras ou servidores;
            entregamos a tranquilidade de saber que sua operação está em mãos de
            especialistas dedicados a fazer certo da primeira vez.
          </p>
        </div>
        <div className="w-[50%] md:w-1/3 flex items-center justify-center mt-8 md:mt-0">
          <SDOWLogo className="w-2 mb-10 " />
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center w-full m-20 p-5">
        <h1 className="poppins-bold text-4xl text-center">
          <b className="text-blue-600">Inteligência</b>, do Início ao Fim.
        </h1>
        <p className="poppins-regular md:max-w-[70%] lg:max-w-[50%] w-full pt-5 pl-0 text-lg p-4 text-center text-slate-700">
          Nossa metodologia garante que cada solução seja robusta, escalável e
          perfeitamente alinhada às suas necessidades. Atuamos em um processo de
          quatro etapas:
        </p>
        <motion.div className="flex md:flex-row flex-col items-center justify-center gap-10 p-10 sm:w-[80vw] w-auto  max-h-[auto] bg-transparent mt-10">
          <Card
            content={
              "Mergulhamos na sua operação para entender seus desafios e objetivos. Um bom projeto começa com as perguntas certas."
            }
            icon={
              <FileBox className="size-5 flex items-center justify-center" />
            }
          >
            1. Diagnóstico Preciso
          </Card>
          <Card
            content={
              "Desenhamos uma solução de infraestrutura personalizada, utilizando as melhores tecnologias e práticas do mercado para garantir performance e segurança."
            }
            icon={
              <FileBox className="size-5 flex items-center justify-center" />
            }
          >
            2. Projeto Sob Medida
          </Card>
          <Card
            content={
              "Nossa equipe técnica executa o projeto com atenção meticulosa aos detalhes, seguindo as mais altas normas de qualidade para uma entrega impecável."
            }
            icon={
              <FileBox className="size-5 flex items-center justify-center" />
            }
          >
            3. Implementação Criteriosa
          </Card>
          <Card
            content={
              "Nosso relacionamento não termina com a entrega. Vemos cada cliente como um parceiro de longo prazo, oferecendo o suporte necessário para que sua infraestrutura evolua junto com seu negócio."
            }
            icon={
              <FileBox className="size-5 flex items-center justify-center" />
            }
          >
            4. Parceria Contínua
          </Card>
        </motion.div>
      </div>
      <Contact></Contact>
    </div>
  );
}
