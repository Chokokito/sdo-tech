import BlurText from "../Reactbites/BlurText";
import OrnamentButton from "../ui/ornament";
import { ClockPlus } from "lucide-react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] padding-10 bg-transperent">
      <motion.div
        initial
        className="bg-[url(../assets/Images/HeroBG.png)] transition-all flex flex-col sm:w-[80vw] w-[90vw] sm:h-[70vh] h-[90vh] justify-center items-center md:rounded-[70px] sm:rounded-[50px] rounded-[40px] shadow-lg high-shadow p-[10%]"
      >
        <BlurText
          text="O seu parceiro em energia e transformação digital."
          delay={100}
          animateBy="words"
          direction="top"
          className="transition-all  lg:text-[48px] md:text-[20px] sm:text-[32px] text-[28px] text-center mb-4 text-slate-100 raleway uppercase  sm:justify-center align-center whitespace-nowrap sm:max-w-[75%] font-extralight"
        ></BlurText>
        <BlurText
          text="Soluções completas em cabeamento, segurança e infraestrutura para empresas que exigem eficiência."
          delay={150}
          animateBy="words"
          direction="top"
          className=" mb-8 text-slate-50 raleway sm:justify-center align-center raleway"
        ></BlurText>
        <InteractiveHoverButton className="w-400px">
          Solicite um orçamento!
        </InteractiveHoverButton>
      </motion.div>
    </div>
  );
}
