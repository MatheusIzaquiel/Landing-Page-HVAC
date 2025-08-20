import { Shield, Clock, Wrench } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-200 to-blue-100" id="inicio">
      <div className="container max-w-7xl mx-auto px-4 py-3 lg:flex gap-10"> 
        {/* Caixa de Texto */}
        <div className="flex flex-col">

          {/* Titulo da caixa */}
          <h2 className="text-4xl mt-12">
            Serviços Profissionais de HVAC no <span>Rio de Janeiro</span>
          </h2>
          <p className="mt-4 mb-4">
            Mantenha sua casa e empresa confortáveis o ano todo com nossos
            serviços especializados de aquecimento, ventilação e ar condicionado.
            Licenciados, segurados e com a confiança dos Cariocas.
          </p>

          {/* Caixa de botões */}
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="bg-blue-700 text-white py-1 px-2 rounded-md cursor-pointer hover:bg-blue-600 duration-300">
              Agendar Serviço
            </button>
            <button className="border border-blue-700 text-blue-500 bg-white rounded-md py-1 px-2 cursor-pointer hover:text-gray-600 hover:bg-blue-100 duration-300">
              Serviços de Emergência
            </button>
          </div>

          {/* Caixa de Serviços */}
          <div className="flex justify-around mt-10">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Shield className="text-blue-700"/>
              <span className="text-center text-sm">Licenciado & <br /> Segurado</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <Clock className="text-blue-700"/>
              <span className="text-center text-sm">Emergência <br /> 24 horas</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <Wrench className="text-blue-700"/>
              <span className="text-center text-sm">Técnicos <br /> Experientes</span>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <Image 
         src="/hero-img.avif"
          alt="Imagem de destaque do serviço HVAC"
          width={1200}
          height={400}
          sizes="(max-width: 768px) 100vw, 1200px"
          className="w-full h-auto mt-8 mb-20 rounded-lg shadow-md lg:max-w-[500px]"
        />
      </div>
    </section>
  );
}
