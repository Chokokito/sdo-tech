import RotatingText from "../Reactbites/RotatingText";
import SDOLogo from "../ui/sdologo";

export default function MoreAbout() {
  return (
    <div className="flex sm:flex-col md:flex-row items-center justify-center h-[100vh] bg-transperent ">
      <div className="transition-all flex sm:flex-col sm:w-[80vw] md:w-[50vw] sm:h-[70vh] h-[70vh] justify-center items-left rounded-[70px] pl-[10%] pr-[10%] pt-[10%]  gap-3 ">
        <h2 className="flex flex-col items-left justify-center  poppins-regular transition text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-950 font-extralight mb-8">
          <span className="mr-2 text-wrap">
            Mais que Serviços, <br></br>Compromisso com
          </span>
          <RotatingText
            texts={[
              " o Resultado",
              " a Inovação",
              " o Desempenho",
              " a Excelência",
            ]}
            mainClassName="whitespace-nowrap transition-all bg-sky-900  text-slate-50 rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 whitespace-nowrap"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h2>
        <p className="poppins-light text-wrap pb-7">
          Com mais de 7 anos de atuação, a SDO Tecnologia entrega soluções em
          infraestrutura, energia e tecnologia com alto padrão técnico e foco em
          eficiência. Atuando em ambientes que vão de escritórios a grandes
          indústrias, a empresa se destaca pela confiabilidade na execução de
          projetos em cabeamento estruturado, redes, segurança eletrônica e
          sistemas de energia.
        </p>
        <button className="uppercase flex text-lg text-slate-50 items-center justify-around transition-colors horizontal-shadow bg-blue-800 hover:bg-blue-900 p-4 rounded-[15px] cursor-pointer  md:w-[400px] sm:w-[300px] poppins-regular">
          Conheça mais sobre a SDO
        </button>
      </div>
      <div className="sm:w-auto md:w-[50vw] sm:h-[70vh] h-[70vh] flex items-center justify-center">
        <SDOLogo></SDOLogo>
      </div>
    </div>
  );
}
