export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center p-8 w-full h-auto flex-col-reverse md:flex-row-reverse gap-6">
      <div className="w-[70%] md:w-[50%] flex-col flex gap-10">
        <div className="">
          <h1 className=" poppins-bold text-3xl">
            Segurança Eletrônica Inteligente{" "}
          </h1>
          <p className="poppins-regular text-md md:text-xl text-slate-600 max-w-4xl">
            {" "}
            Proteja seus ativos com nossas soluções completas em CFTV, controle
            de acesso e monitoramento. Entregamos sistemas de segurança
            inteligentes que oferecem controle total e tranquilidade, permitindo
            que você foque no que realmente importa.
          </p>
        </div>
        <div className="flex align-start justify-start">
          <button className="py-5 px-5 bg-blue-700 cursor-pointer hover:bg-blue-800 text-white poppins-regular md:w-[50%] w-full rounded-b-3xl rounded-r-3xl">
            Conhecer sistemas de segurança
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/Images/Solutions/customer2.png"
          alt="Infraestrutura de Redes"
          className="w-[65%] h-auto  s"
        />
      </div>
    </div>
  );
}
