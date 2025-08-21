import { Quote, Star } from "lucide-react"

export function Testimonials() {

  const testimonials = [
    {
      text: '"A Ventmar HVAC instalou nosso novo sistema de ar central no mês passado. A equipe foi profissional, pontual e a instalação foi impecável. Nossa casa nunca esteve tão confortável!"', 
      name: "Lucas Otávio", 
      local: "Barra da Tijuca, Rio de Janeiro"
    },
    {
      text: '"Quando nosso ar-condicionado quebrou no auge do verão, a Ventmar HVAC veio nos socorrer em poucas horas. Excelente serviço de emergência e preços muito razoáveis."', 
      name: "Melissa Cunha", 
      local: "Barra da Tijuca, Rio de Janeiro"
    },
    {
      text: '"Utilizo a Ventmar HVAC para manutenção do nosso prédio comercial há 3 anos. Eles são confiáveis, experientes e sempre prestam um serviço de qualidade. Altamente recomendado!"', 
      name: "Carlos Silva", 
      local: "Centro, Rio de Janeiro"
    },
    {
      text: 'Os técnicos foram corteses e explicaram tudo o que estavam fazendo. O reparo foi concluído rapidamente e nosso sistema está funcionando melhor do que nunca. Ótimo atendimento ao cliente!', 
      name: "Ana Paula", 
      local: "Ipanema, Rio de Janeiro"
    }
  ]

  return (
    
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <article className="flex flex-col space-y-3 items-center">
          {/*Texto do Testemunhos*/}
          <div className="space-y-5">
            <h3 className="text-3xl font-semibold text-center">O que nossos clientes dizem</h3>
            <p className="text-center text-gray-500">Não acredite apenas na nossa palavra. Veja o que nossos clientes satisfeitos têm a dizer sobre nossos serviços de HVAC.</p>
          </div>
          {/*Cards do Testemunhos*/}
          <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
            {testimonials.map((item, index) => {
              return (
              <div key={index} className="border border-gray-200 rounded-lg py-4 px-6 m-4  space-y-2 hover:shadow-lg transition-shadow duration-300">
                {/* Estrelas de Avaliação */}
                <div className="flex items-center space-x-2 mb-2 pb-3">
                  <Quote className="w-8 h-8 text-blue-600" />
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                </div>
                {/* Texto do Testemunhos*/}
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-500 text-sm border-b border-gray-300 pb-6">{item.text}</p>
                  <div className="flex flex-col pt-4 space-y-1">
                    <span className="text-gray-700 text-[14px]">{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.local}</span>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </article>
      </div>
    </section>
  )
}
