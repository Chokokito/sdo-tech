export default function CustomersList() {
  const images = [
    "/Images/CustomersList/arenamrv-logo.png",
    "/Images/CustomersList/avvale-logo.png",
    "/Images/CustomersList/cbre-logo.png",
    "/Images/CustomersList/ch3-logo.png",
    "/Images/CustomersList/efe-logo.png",
    "/Images/CustomersList/evertical-logo.png",
    "/Images/CustomersList/fundacaosagres-logo.png",
    "/Images/CustomersList/grupogps-logo.png",
    "/Images/CustomersList/grupohofsaude-logo.png",
    "/Images/CustomersList/icismep-logo.png",
    "/Images/CustomersList/image1.png",
    "/Images/CustomersList/image2.png",
    "/Images/CustomersList/image3.png",
    "/Images/CustomersList/image4.png",
    "/Images/CustomersList/image5.png",
    "/Images/CustomersList/image6.png",
    "/Images/CustomersList/nava-logo.png",
    "/Images/CustomersList/nobrehairface-logo.png",
    "/Images/CustomersList/renapsi-logo.png",
    "/Images/CustomersList/teleinfo-logo.png",
    "/Images/CustomersList/tecnogera.png",
    "/Images/CustomersList/qualicorp-logo.png",
  ];
  // Duplicar para efeito seamless
  const allImages = [...images, ...images, ...images, ...images];

  return (
    <div className="flex flex-col justify-center items-center w-full py-6  border-b-2 border-t-2 border-indigo-300/50  overflow-x-hidden  ">
      <h1 className="text-[1rem] md:text-2xl  text-blue-700 mb-6 poppins-semibold">
        Quem já escolheu fazer diferente
      </h1>
      <div className="relative w-full overflow-x-hidden">
        <div className="infinite-scroll flex flex-nowrap items-center min-w-max gap-10">
          {allImages.map((src, idx) => {
            // Adiciona margem à direita exceto no último de cada bloco
            const isLastInBlock = (idx + 1) % images.length === 0;
            return (
              <img
                key={idx}
                src={src}
                alt={`Cliente ${idx + 1}`}
                className={`h-auto w-28 select-none pointer-events-none grayscale  ${
                  !isLastInBlock ? " mr-10" : ""
                }`}
                draggable={false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
