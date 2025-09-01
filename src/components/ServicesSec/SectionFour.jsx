

export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center p-8 w-full h-auto flex-col-reverse md:flex-row-reverse gap-6">
      <div className="w-[70%] md:w-[50%] flex-col flex gap-10">
        <div className="">
          <h1 className=" poppins-bold text-3xl">Conectividade Sem Limites </h1>
          <p className="poppins-regular text-md md:text-xl text-slate-600 max-w-4xl">
            {" "}
            Conecte toda a sua estrutura com redes Wi-Fi de alta performance e
            links sem fio estáveis e seguros. Desenvolvemos soluções de
            conectividade que entregam cobertura total e desempenho excepcional
            para seus colaboradores e clientes.
          </p>
        </div>
        <div className="flex align-start justify-start">
          <button className="py-5 px-5 bg-blue-700 cursor-pointer hover:bg-blue-800 text-white poppins-regular md:w-[50%] w-full rounded-b-3xl rounded-r-3xl">
            Ver opções de conectividade
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/Images/Solutions/customer4.png"
          alt="Infraestrutura de Redes"
          className="w-[65%] h-auto  s"
        />
      </div>
    </div>
  );
}
