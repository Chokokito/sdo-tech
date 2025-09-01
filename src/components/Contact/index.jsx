import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full  h-full">
      <div className="bg-blue-600 w-full h-full rounded-t-[80px] p-10 flex">
        <div>
          <h1 className="text-4xl text-slate-50 font-bold text-center pt-10 poppins-semibold text-left">
            Solicite uma proposta <br></br> Personalizada agora mesmo.
          </h1>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}
