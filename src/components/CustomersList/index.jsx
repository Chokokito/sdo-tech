export default function CustomersList() {
  const images = [
    "/Images/CustomersList/image1.png",
    "/Images/CustomersList/image2.png",
    "/Images/CustomersList/image3.png",
    "/Images/CustomersList/image4.png",
    "/Images/CustomersList/image5.png",
    "/Images/CustomersList/image6.png",
    // Adicione mais imagens se necessário
  ];
  // Duplicar para efeito seamless
  const allImages = [...images, ...images, ...images, ...images];

  return (
    <div className="flex flex-col justify-center items-center w-full py-6 bg-indigo-100/50 border-b-2 border-t-2 border-indigo-300 shadow-sm overflow-x-hidden test-shadow ">
      <h1 className="text-[1rem] md:text-2xl font-semibold text-indigo-900 mb-6 poppins-medium">
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
                className={`h-16 w-auto select-none pointer-events-none${
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
