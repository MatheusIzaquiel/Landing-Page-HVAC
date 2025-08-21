import Image from "next/image";
import { Users, Award, MapPin, Clock } from "lucide-react";

export function About() {
  const aboutItens = [
    { icon: Users, number: "500+", reference: "Clientes satisfeitos" },
    { icon: Award, number: "15+", reference: "Anos de experiência" },
    { icon: MapPin, number: "50+", reference: "Áreas atendidas" },
    { icon: Clock, number: "24 horas", reference: "Serviço de Emergência" },
  ];

  return (
    <section className="w-full bg-gray-50 py-20" id="sobre">
      <div className="container max-w-7xl mx-auto px-4">
        <article className="grid grid-cols-1 mt-5 gap-15 lg:grid-cols-2 items-center">
          <div className="space-y-5 px-3">
            {/*Texto do About*/}
            <div className="space-y-4 pb-5">
              <h3 className="text-2xl">Sobre a Ventmar HVAC</h3>
              <p className="text-gray-600">
                Há mais de 15 anos, a AMSUNO HVAC é a parceira de confiança dos
                Cariocas para todas as necessidades de aquecimento, ventilação e
                ar condicionado. Nos orgulhamos de oferecer um serviço
                excepcional, mão de obra de qualidade e soluções confiáveis que
                garantem o conforto dos nossos clientes o ano todo.
              </p>
              <p className="text-gray-600">
                Nossa equipe de técnicos licenciados e certificados traz vasta
                experiência e conhecimento para cada projeto. Seja para reparos
                emergenciais, manutenção de rotina ou instalação completa de um
                sistema, temos o compromisso de superar suas expectativas.
              </p>
            </div>
            {/*Cards do About*/}
            <div className="grid grid-cols-2 gap-5">
              {aboutItens.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center border border-gray-300 space-y-2 rounded-2xl py-2"
                  >
                    <Icon className="w-10 h-10 mt-3 text-blue-600" />
                    <span className="text-xl font-light">{item.number}</span>
                    <span className="mb-10 text-gray-600 text-sm">
                      {item.reference}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/*Imagem do About*/}
          <div className="w-full">
            <Image
              src="/about-img.avif"
              alt="Imagem do Aboute, Pessoas em reunião."
              width={1200}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
