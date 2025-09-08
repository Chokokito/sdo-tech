import LogoAnimated from "./logo";
import WppButton from "./wppbutton";
import Link from "next/link";
import { motion, stagger } from "framer-motion";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const Header = () => {
  return (
    <header className="w-full h-auto bg-white/40 flex lg:grid lg:grid-cols-3 items-center justify-between overflow-hidden rounded-b-[10px] p-3 backdrop-blur-lg">
      <div className="flex justify-center">
        <Link href="/">
          <LogoAnimated />
        </Link>
      </div>
      <motion.div
        className="hidden lg:flex justify-center h-60px"
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ staggerChildren: 0.5, duration: 0.5 }}
      >
        <ul className="flex gap-7 items-center text-[1.2rem] justify-center font-sans">
          <li className="text-black p-5 font-extralight">
            <Link
              href="/about"
              className="inline-block min-w-[80px] font-extralight hover:text-blue-500 hover:font-light transition-all"
            >
              Sobre
            </Link>
          </li>
          <li className="text-black p-5 font-extralight ">
            <Link
              href=""
              className="inline-block min-w-[100px] font-extralight hover:text-blue-500 hover:font-light transition-all"
            >
              Serviços
            </Link>
          </li>
          <li className="text-black p-5 font-extralight">
            <Link
              href="#contact"
              className="inline-block min-w-[100px] font-extralight hover:text-blue-500 hover:font-light transition-all"
            >
              Contatos
            </Link>
          </li>
        </ul>
      </motion.div>
      <div className="flex justify-center">
        <InteractiveHoverButton
          className="bg-blue-600 text-white hover:bg-blue-700 "
          pulse="bg-white"
          dot="bg-white text-blue-600"
          text="text-blue-600 font-bold"
        >
          <Link href="" className="text-lg font-extralight">
            Fale Conosco
          </Link>
        </InteractiveHoverButton>
      </div>
    </header>
  );
};

export default Header;
