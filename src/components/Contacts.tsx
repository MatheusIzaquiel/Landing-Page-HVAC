import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contacts() {
  const contacts = [
    { icon: Phone, serviceName: "Telefone", contact: "(21) 1234-5678" },
    {
      icon: Mail,
      serviceName: "E-mail",
      contact: "contato@ventmarhvac.com.br",
    },
    {
      icon: MapPin,
      serviceName: "Endereço",
      contact: "Rua Central, 123 - Rio de Janeiro, RJ",
    },
    {
      icon: Clock,
      serviceName: "Horário de Atendimento",
      contact: "Seg-Sex: 8h-18h Sáb: 9h-14h Dom: apenas emergências",
    },
  ];

  const inputContent = [
    {type: 'primeiro nome', content: 'Primeiro nome'},
    {type: 'último nome', content: 'Último nome'},
    {type: 'email', content: 'E-mail'},
    {type: 'telefone', content: 'Telefone'},
  ]


  return (
    <section className="w-full py-15 bg-gray-50" id="contato">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <article className="flex flex-col space-y-5">
          {/*Texto do Contato*/}
          <div className="space-y-4">
            <h3 className="text-3xl text-center font-semibold">
              Entre em contato
            </h3>
            <p className="text-center">
              Pronto para melhorar seu conforto? Entre em contato conosco hoje
              mesmo para uma consulta e orçamento gratuitos.
            </p>
          </div>
          {/*Cards do Contato*/}
          <div className="flex flex-col lg:flex-row lg:items-center  gap-10 justify-between">
            <div className="flex flex-col gap-6 py-5 md:grid-cols-3">
              {contacts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col rounded-2xl border border-gray-300 space-y-3 py-5 px-3 bg-white"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold">{item.serviceName}</span>
                    <div className="flex flex-col">
                      <span className="text-gray-600">{item.contact}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*Formulário do Contato*/}
            <div className="border border-gray-300 px-4 py-8 rounded-2xl bg-white">
              <div className="flex flex-col space-y-3">
                <div className="space-y-4 py-3.5">
                  <h3 className="text-2xl font-semibold">Solicite um orçamento</h3>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e entraremos em contato com
                    você com um orçamento personalizado.
                  </p>
                </div>
                <form>
                  <fieldset className="py-5">
                    
                    <div className="flex flex-col space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {inputContent.map((input, index) => (
                        <div key={index} className="flex flex-col">
                          <label htmlFor={input.type} className="text-sm font-bold mt-1">{input.content}</label>
                          <input
                            type={input.type}
                            id={input.type}
                            className="bg-gray-200 py-1 px-2 rounded outline-0"
                          />
                        </div>
                      ))}
                      </div>

                      <label htmlFor="serviços" className="text-sm font-bold mt-1">Serviço</label>
                      <select
                        id="service"
                        className="bg-gray-200 py-1 px-2 rounded outline-0"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="instalacao">Instalação</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="limpeza">Limpeza</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="emergência">Emergência</option>
                      </select>

                      <label htmlFor="message" className="text-sm font-bold mt-1">Mensagem</label>
                      <textarea
                        id="message"
                        className="bg-gray-200 py-1 px-2 rounded outline-none w-[100%] min-h-[120px] overflow-hidden "
                      />
                    </div>
                  </fieldset>
                    <div className="flex items-center justify-center pt-3">
                      <button className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
                        Enviar
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
