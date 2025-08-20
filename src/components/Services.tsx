import {
  CircleCheckBig,
  Snowflake,
  Flame,
  Fan,
  Settings,
  Zap,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Snowflake,
      title: "Ar condicionado",
      text: "Instalação, reparo e manutenção de sistemas de ar condicionado residenciais e comerciais.",
      jobs: [
        "Instalação de Ar Condicionado Central",
        "Reparo e Solução de Problemas de AC",
        "Manutenção Preventiva",
        "Melhorias na Eficiência Energética",
      ],
    },
    {
      icon: Flame,
      title: "Aquecimento",
      text: "Soluções completas de aquecimento para manter seu espaço aquecido e confortável.",
      jobs: [
        "Instalação de Forno",
        "Serviços de Bomba de Calor",
        "Reparo de Caldeira",
        "Manutenção de Sistemas de Aquecimento",
      ],
    },
    {
      icon: Fan,
      title: "Ventilação",
      text: "Melhore a qualidade do ar interno com sistemas de ventilação adequados.",
      jobs: [
        "Instalação de Dutos",
        "Limpeza de Dutos de Ar",
        "Projeto de Ventilação",
        "Teste de Qualidade do Ar Interno",
      ],
    },
    {
      icon: Settings,
      title: "Manutenção de Sistemas",
      text: "Manutenção regular para manter seu sistema HVAC funcionando de forma eficiente.",
      jobs: [
        "Ajustes Sazonais",
        "Troca de Filtros",
        "Inspeção do Sistema",
        "Otimização de Desempenho",
      ],
    },
    {
      icon: Zap,
      title: "Reparo de Emergência",
      text: "Serviços de reparo HVAC emergenciais 24/7 sempre que você precisar.",
      jobs: [
        "Disponibilidade 24/7",
        "Resposta Rápida",
        "Atendimento no Mesmo Dia",
        "Diagnóstico de Emergência",
      ],
    },
    {
      icon: CircleCheckBig,
      title: "Novas Instalações",
      text: "Projeto e instalação completos de sistemas HVAC para novas construções.",
      jobs: [
        "Projeto do Sistema",
        "Seleção de Equipamentos",
        "Instalação Profissional",
        "Suporte de Garantia",
      ],
    },
  ];

  return (
    <section className="w-full bg-white mt-20" id="servicos">
      <div className="container max-w-7xl mx-auto px-4 py-3 lg:flex gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl">Nossos Serviços de HVAC</h2>
          <p className="text-center text-[18px] text-gray-500">
            Da instalação à manutenção, oferecemos soluções abrangentes de HVAC
            para residências e empresas no Rio de Janeiro.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {/* Inserindo itens do array Dinamicamente */}
            {services.map((item, index) => {
              const Icon = item.icon; // pega o componente salvo no objeto

              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 border border-gray-300 px-4 py-4 rounded-4xl space-y-2 hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] duration-300 "
                >
                  <Icon className="w-12 h-12 text-blue-500" />
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-start text-gray-600 text-sm">
                    {item.text}
                  </p>
                  <ul key={index} className="space-y-2">
                  {item.jobs.map((job, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-extralight">
                      <CircleCheckBig className="w-4 h-4 text-green-500" />
                        {job}
                      </li>
                  ))}
                  </ul>
                  <div className="flex items-center justify-center mt-1">
                    <button className="cursor-pointer text-sm w-[80%] py-0.5  text-blue-500 border border-blue-500 rounded-md hover:bg-blue-100 duration-300 hover:text-black">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
