import LogoAnimated from "./logo";
import WppButton from "./wppbutton";
import Link from "next/link";
import { motion, stagger } from "framer-motion";

const Header = () => {
  return (
    <header className="w-[100%] h-[100px] flex items-center bg-white justify-around p-1.5">
      <LogoAnimated></LogoAnimated>
      <motion.div
        className="flex display-none sm:display-flex"
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ staggerChildren: 0.5, duration: 0.5 }}
      >
        <ul className="flex gap-7 items-center text-[1.2rem] justify-between font-sans display-none sm:display-flex">
          <li className="text-black p-5 font-extralight">
            <Link
              href=""
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
              href=""
              className="inline-block min-w-[100px] font-extralight hover:text-blue-500 hover:font-light transition-all"
            >
              Contatos
            </Link>
          </li>
        </ul>
      </motion.div>
      <WppButton label={"Chame no Whatsapp!"}></WppButton>
    </header>
  );
};

export default Header;
