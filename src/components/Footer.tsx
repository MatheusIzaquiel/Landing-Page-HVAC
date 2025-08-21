'use client'
import { Phone, Mail, MapPin} from "lucide-react";

export default function Footer() {

    const menuItems = [
    { href: "inicio", label: "Início" },
    { href: "servicos", label: "Serviços" },
    { href: "sobre", label: "Sobre" },
    { href: "contato", label: "Contato" },
  ];
  
    const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-6 px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/**Texto do Footer**/}
          <div className="flex flex-col gap-4 ">
            <h3 className="font-bold text-2xl">
              Ventmar <span className="text-blue-600">HVAC</span>
            </h3>
            <p className="text-sm">Seu parceiro de confiança em HVAC no Rio. Oferecemos serviços profissionais de aquecimento, ventilação e ar condicionado com compromisso com a excelência e a satisfação do cliente.</p>
            <p className="flex items-center space-x-4"> 
              <Phone className="w-4 h-4" /> 
              <span className="text-sm">(21) 1234-5678</span>
            </p>
            <p className="flex items-center space-x-4">
              <Mail className="w-4 h-4" /> 
              <span className="text-sm">contato@ventmar.com.br</span>
            </p>
            <p className="flex items-center space-x-4">
              <MapPin className="w-4 h-4" /> 
              <span className="text-sm">Rua Central, 123 - Rio de Janeiro, RJ</span>
            </p>
          </div>
          {/**Botões do Footer*/}
         <div className="flex flex-col gap-4 lg:flex-row lg:justify-around">
           <div className="flex flex-col gap-4">
            <h3>Serviços:</h3>
            <nav>
              <ul className="space-y-2">
                <li className="text-sm cursor-pointer hover:text-blue-400">Ar condicionado</li>
                <li className="text-sm cursor-pointer hover:text-blue-400">Serviços de aquecimento</li>
                <li className="text-sm cursor-pointer hover:text-blue-400">Ventilação</li>
                <li className="text-sm cursor-pointer hover:text-blue-400">Manutenção</li>
                <li className="text-sm cursor-pointer hover:text-blue-400">Reparo de emergência</li>
                <li className="text-sm cursor-pointer hover:text-blue-400">Instalação</li>
              </ul>
            </nav>
          </div>
          {/**Botões do Footer*/}
          <div className="flex flex-col gap-4">
            <h3>Links:</h3>
            <nav>
              <ul className="flex flex-col items-start gap-3">
                {menuItems.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm cursor-pointer hover:text-blue-400"
                >
                  {item.label}
                </button>
              ))}
              </ul>
            </nav>
          </div>
         </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ventmar HVAC. Todos os direitos reservados.</p>
          <div>
            <a href="#" className="text-sm hover:text-blue-400">Política de Privacidade</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-sm hover:text-blue-400">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
