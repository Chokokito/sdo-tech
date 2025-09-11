import ContactForm from "./ContactForm";
import { Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full  h-full" id="contact">
      <div className="bg-blue-600 w-full h-full rounded-t-[80px] p-10 flex lg:flex-row flex-col">
        <div>
          <h1 className="text-4xl text-slate-50 font-bold text-center pt-10 poppins-semibold text-left">
            Solicite uma proposta <br></br> Personalizada agora mesmo.
          </h1>
          <ContactForm></ContactForm>
        </div>
        <div className="poppins-semibold lg:pt-30 pl-5 mb-4">
          <h1 className="text-2xl text-white mb-4">
            Ou entre em contato diretamente:
          </h1>
          <a
            href="mailto:contato@sdotecnologia.com.br"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            aria-label="Envie um email para a SDO Tecnologia"
            title="contato@sdotecnologia.com.br"
          >
            {" "}
            <Mail size={24} color="#fff" />
            <span className="inline text-white">
              contato@sdotecnologia.com.br
            </span>
          </a>
          <a
            href="https://instagram.com/sdotecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-3 flex items-center gap-2 hover:text-blue-400 transition-colors"
            aria-label="Siga a SDO Tecnologia no Instagram"
            title="Siga-nos no Instagram"
          >
            <Instagram size={24} color="white" />
            <span className="hidden inline text-white">@sdotecnologia</span>
          </a>
        </div>
      </div>
    </div>
  );
}
