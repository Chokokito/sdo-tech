export default function SectionOne() {
  return (
    <div className="flex items-center justify-center p-8 w-full h-auto flex-col-reverse md:flex-row gap-6">
      <div className="w-[70%] md:w-[50%] flex-col flex gap-10">
        <div className="">
          <h1 className=" poppins-bold text-3xl">
            Infraestrutura de Redes Robusta
          </h1>
          <p className="poppins-regular text-md md:text-xl text-slate-600 max-w-4xl">
            {" "}
            Projetamos e implementamos sistemas de cabeamento estruturado e
            fibra óptica que são a espinha dorsal do seu negócio. Garantimos uma
            base sólida, veloz e escalável, pronta para suportar suas operações
            mais críticas hoje e no futuro.
          </p>
        </div>
        <div>
          <button className="py-5 px-5 bg-blue-700 cursor-pointer hover:bg-blue-800 text-white poppins-regular md:w-[50%] w-full rounded-b-3xl rounded-l-3xl">
            Ver detalhes da solução
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/Images/Solutions/customer1.png"
          alt="Infraestrutura de Redes"
          className="w-[65%] h-auto  s"
        />
      </div>
    </div>
  );
}
