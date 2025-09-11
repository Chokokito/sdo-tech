import { ShineBorder } from "../magicui/shine-border";
import RotatingText from "../Reactbites/RotatingText";
import SDOLogo from "../ui/sdologo";
import Link from "next/link";

export default function MoreAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full px-4 sm:px-8 md:px-[10vw] lg:px-[12vw] py-8 box-border  bg-white/80 rounded-[24px] shadow-lg">
      <div className="flex flex-col w-full md:w-1/2 h-auto justify-center items-start p-4 md:p-8 gap-5">
        <h2 className="flex flex-col items-start justify-center poppins-regular transition text-left text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-950 font-extralight mb-8 leading-tight">
          <span className="mr-2 text-nowrap">
            Mais que Serviços, <br />
            Compromisso com
          </span>
          <RotatingText
            texts={[
              " o Resultado",
              " a Inovação",
              " o Desempenho",
              " a Excelência",
            ]}
            mainClassName="whitespace-nowrap transition-all bg-blue-700 text-slate-50 rounded-lg w-full"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.01}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 whitespace-nowrap transition-all"
            transition={{ type: "spring", damping: 20, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>
        <p className="poppins-light text-wrap pb-7">
          Com mais de 10 anos de atuação, a SDO Tecnologia entrega soluções em
          infraestrutura, energia e tecnologia com alto padrão técnico e foco em
          eficiência. Atuando em ambientes que vão de escritórios a grandes
          indústrias, a empresa se destaca pela confiabilidade na execução de
          projetos em cabeamento estruturado, redes, segurança eletrônica e
          sistemas de energia.
        </p>
        <Link href="/about" className="w-full md:min-w-[300px]">
          <button className="uppercase flex text-lg text-slate-50 items-center justify-around transition-colors  bg-blue-700 hover:bg-blue-900 p-4 rounded-[15px] cursor-pointer w-full md:min-w-[300px] poppins-regular ">
            Conheça mais sobre a SDO
          </button>
        </Link>
      </div>
      <div className="w-[50%] md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <SDOLogo />
      </div>
    </div>
  );
}
