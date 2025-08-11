import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";

export default function ServicesSec() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center p-8">
        <h2 className="poppins-semibold text-2xl md:text-3xl lg:text-4xl text-slate-800 mb-4">
          Soluções completas para sua <br></br>{" "}
          <span className="azulao">infraestrutura</span> de{" "}
          <span className="azulao">tecnologia</span> .
        </h2>
        <p className="poppins-regular text-md md:text-xl text-slate-600 max-w-4xl">
          Da fundação do cabeamento à energia que mantém tudo funcionando,
          projetamos e implementamos os sistemas críticos que garantem a
          performance, segurança e conectividade do seu negócio.
        </p>
      </div>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour></SectionFour>
    </div>
  );
}
