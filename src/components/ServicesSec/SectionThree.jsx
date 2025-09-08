import Link from "next/link";

export default function SectionOne() {
  return (
    <div className="flex items-center justify-center p-8 w-full h-auto flex-col-reverse md:flex-row gap-6">
      <div className="w-[70%] md:w-[50%] flex-col flex gap-10">
        <div className="">
          <h1 className=" poppins-bold text-3xl">
            Energia Confiável e Eficiente
          </h1>
          <p className="poppins-regular text-md md:text-xl text-slate-600 max-w-4xl">
            {" "}
            Assegure a continuidade ininterrupta de suas operações com sistemas
            elétricos e de energia projetados para máxima confiabilidade. De
            redes estabilizadas a sistemas de nobreak (UPS), garantimos a
            energia que seu negócio precisa para nunca parar.
          </p>
        </div>
        <div>
          <Link href="/services#energy">
            <button className="py-5 px-5 bg-blue-700 cursor-pointer hover:bg-blue-800 text-white poppins-regular md:w-[50%] w-full rounded-b-3xl rounded-l-3xl">
              Explorar projetos de energia
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/Images/Solutions/customer3.png"
          alt="Infraestrutura de Redes"
          className="w-[65%] h-auto  s"
        />
      </div>
    </div>
  );
}
