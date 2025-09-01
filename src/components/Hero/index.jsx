import BlurText from "../Reactbites/BlurText";
import OrnamentButton from "../ui/ornament";
import { ClockPlus } from "lucide-react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { ShineBorder } from "../magicui/shine-border";
/* Saporra desse vh é que tá bugando tudo, tem que mudar pra não quebrar
      na horizontal do celular */

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] padding-10 bg-transperent">
      {" "}
      <motion.div
        initial
        className=" overflow-hidden bg-[url(/Images/Frame.png)] transition-all flex flex-col sm:w-[80vw] w-[90vw] min-h-[90vh] max-h-[auto] justify-center items-center md:rounded-[70px] sm:rounded-[50px] rounded-[40px] shadow-lg high-shadow p-[5%] md-p-[10%] backdrop-blur-3xl"
      >
        <BlurText
          text="O seu parceiro em energia e transformação digital."
          delay={100}
          animateBy="words"
          direction="top"
          className="transition-all  lg:text-[56px] md:text-[26px] text-[28px] text-center mb-4 text-slate-100 raleway uppercase  sm:justify-center align-center whitespace-nowrap sm:max-w-[75%] poppins-semibold"
        ></BlurText>
        <BlurText
          text="Soluções completas em cabeamento, segurança e infraestrutura para empresas que exigem eficiência."
          delay={150}
          animateBy="words"
          direction="top"
          className=" mb-8 text-slate-50 raleway sm:justify-center align-center poppins-light text-[22px] text-center sm:max-w-[70%]"
        ></BlurText>
        <InteractiveHoverButton className="w-400px p-5 text-lg">
          Solicite um orçamento!
        </InteractiveHoverButton>
      </motion.div>
    </div>
  );
}
