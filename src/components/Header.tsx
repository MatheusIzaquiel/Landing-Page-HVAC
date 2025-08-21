"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(!isOpen);
  }

  // Função para rolar para a seção correspondente
  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Fecha o menu mobile após o clique
    }
  };

  const menuItems = [
    { href: "inicio", label: "Início" },
    { href: "servicos", label: "Serviços" },
    { href: "sobre", label: "Sobre" },
    { href: "contato", label: "Contato" },
  ];

  return (
    <header className="w-full sticky top-0 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between relative">
        {/* LOGO */}
        <span className="font-bold text-2xl">
          Ventmar <span className="text-blue-600">HVAC</span>
        </span>

        {/* Botão Mobile */}
        <button
          className="md:hidden cursor-pointer"
          onClick={open}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </ul>
        </nav>

        {/* Ações Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm">(+55) xx xxxxx-xxxx</span>
          <button className="bg-blue-600 text-white px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-500 duration-200">
            Cotação
          </button>
        </div>
      </div>

      {/* Menu Mobile (expansível) */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all duration-300 opacity-100">
          <ul className="flex flex-col gap-3 text-center p-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 text-start text-sm cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4"/>
              <span className="text-sm text-start">(+55) xx xxxxx-xxxx</span>
            </div>
            <button className="bg-blue-600 text-white px-2 py-1 rounded-lg w-[100px] hover:bg-blue-700 duration-200">
              Cotação
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}