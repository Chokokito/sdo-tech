import { BrickWall, HouseWifi, ShieldBanIcon, Zap } from "lucide-react";

export default function ServicesSection({ className }) {
  return (
    <div>
      <div
        id="infra"
        className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm w-full px-[13vw]  py-10"
      >
        <br />
        <div className="flex align-middle items-center gap-5">
          <BrickWall size={40} className="stroke-blue-500"></BrickWall>
          <h2 className="font-bold text-slate-700 text-3xl poppins-semibold">
            A Fundação da sua Conectividade.
          </h2>
        </div>

        <br />
        <br />
        <span className="text-slate-600 poppins-regular">
          Uma infraestrutura de redes bem planejada é a espinha dorsal de
          qualquer operação digital. Garantimos que sua base seja sólida, veloz
          e pronta para o futuro, eliminando gargalos e garantindo a fluidez da
          informação.
        </span>
        <br />
        <br />
        <strong className="text-slate-800">Serviços Incluídos:</strong>
        <ul className="list-disc pl-6 mt-2 text-slate-700 poppins-regular">
          <li>Cabeamento Estruturado (Cat5E, Cat6, 6A e superiores)</li>
          <li>Redes de Fibra Óptica (Backbones e Links Dedicados)</li>
          <li>Organização e Montagem de Racks e Data Centers</li>
          <li>Certificação e Mapeamento de Pontos de Rede</li>
          <li>Infraestrutura para Redes Elétricas e de Telecom</li>
        </ul>
      </div>
      <div
        id="security"
        className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm w-full px-[13vw]  py-10"
      >
        <br />
        <div className="flex align-middle items-center gap-5">
          <ShieldBanIcon size={40} className="stroke-blue-500"></ShieldBanIcon>
          <h2 className="font-bold text-slate-700 text-3xl poppins-semibold">
            Proteção e Controle Total do seu Ambiente.
          </h2>
        </div>

        <br />
        <br />
        <span className="text-slate-600 poppins-regular">
          Implementamos sistemas de segurança inteligentes e integrados que
          oferecem vigilância proativa e controle de acesso rigoroso. Tenha
          visibilidade completa e a tranquilidade de saber que seus ativos e sua
          equipe estão protegidos.
        </span>
        <br />
        <br />
        <strong className="text-slate-800">Serviços Incluídos:</strong>
        <ul className="list-disc pl-6 mt-2 text-slate-700 poppins-regular">
          <li>Sistemas de CFTV (Digital e Analógico)</li>
          <li>Gerenciamento de Vídeo (VMS) e Analíticos Inteligentes</li>
          <li>
            Controle de Acesso (Biometria, Cartões, Fechaduras Eletrônicas)
          </li>
          <li>Monitoramento Veicular Móvel</li>
          <li>Sistemas de Alarme e Sensores de Presença</li>
        </ul>
      </div>
      <div
        id="energy"
        className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm w-full px-[13vw]  py-10"
      >
        <br />
        <div className="flex align-middle items-center gap-5">
          <Zap size={40} className="stroke-blue-500"></Zap>
          <h2 className="font-bold text-slate-700 text-3xl poppins-semibold">
            A Garantia de Operação Contínua.
          </h2>
        </div>

        <br />
        <br />
        <span className="text-slate-600 poppins-regular">
          Energia é o que move seu negócio. Nossas soluções garantem que essa
          energia seja estável, segura e ininterrupta, protegendo seus
          equipamentos mais sensíveis e assegurando que sua operação nunca pare
          por falhas elétricas.
        </span>
        <br />
        <br />
        <strong className="text-slate-800">Serviços Incluídos:</strong>
        <ul className="list-disc pl-6 mt-2 text-slate-700 poppins-regular">
          <li>
            Projetos de Redes Elétricas de Baixa Tensão (Normais e
            Estabilizadas)
          </li>
          <li>Sistemas de Energia Ininterrupta (UPS/Nobreaks)</li>
          <li>
            Controle de Acesso (Biometria, Cartões, Fechaduras Eletrônicas)
          </li>
          <li>Iluminação de Emergência e Convencional</li>
          <li>Quadros de Distribuição e Comandos Elétricos</li>
        </ul>
      </div>
      <div
        id="wifi"
        className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm w-full px-[13vw]  py-10"
      >
        <br />
        <div className="flex align-middle items-center gap-5">
          <HouseWifi size={40} className="stroke-blue-500"></HouseWifi>
          <h2 className="font-bold text-slate-700 text-3xl poppins-semibold">
            Performance e Cobertura Onde Você Precisar.
          </h2>
        </div>

        <br />
        <br />
        <span className="text-slate-600 poppins-regular">
          Levamos a conectividade de alta performance para todos os cantos da
          sua empresa. Nossas soluções de redes sem fio são projetadas para
          oferecer cobertura total, estabilidade e segurança, seja em um
          escritório ou em um grande centro de distribuição.
        </span>
        <br />
        <br />
        <strong className="text-slate-800">Serviços Incluídos:</strong>
        <ul className="list-disc pl-6 mt-2 text-slate-700 poppins-regular">
          <li>Redes Wi-Fi Corporativas de Alta Densidade</li>
          <li>Enlaces de Rádio Ponto a Ponto e Ponto-Multiponto</li>
          <li>Site Survey e Mapas de Calor para Otimização de Cobertura</li>
          <li>QGestão e Segurança de Redes Wireless</li>
        </ul>
      </div>
    </div>
  );
}
