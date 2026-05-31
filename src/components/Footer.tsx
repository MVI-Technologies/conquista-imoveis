import { Clock, Instagram, Mail, MapPin, Phone, Home } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1c1917" }} className="border-t border-stone-800">
      <div>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{ borderColor: "#0d9488", backgroundColor: "rgba(13, 148, 136, 0.08)" }}
                >
                  <Home className="w-5 h-5 text-[#0d9488]" strokeWidth={1.5} />
                </div>
                <span
                  className="font-display font-bold text-lg text-stone-100"
                >
                  Conquista Imóveis
                </span>
              </a>
              <p
                className="mb-6 text-stone-400 text-xs"
                style={{
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.7,
                }}
              >
                Sua corretora especialista em aprovação Caixa Econômica e no programa Minha Casa Minha Vida. Saia do aluguel com assessoria 100% gratuita.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border border-stone-700 text-stone-400 hover:bg-teal-600 hover:text-white hover:border-teal-600"
                  aria-label="Instagram"
                >
                  <Instagram strokeWidth={1.5} className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-5 text-teal-500 font-bold text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    strokeWidth={1.5}
                    className="text-teal-500 w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    className="text-stone-400 text-xs"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    Av. Paulista, 1000 — 14º Andar
                    <br />
                    Bela Vista — São Paulo, SP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    strokeWidth={1.5}
                    className="text-teal-500 w-4 h-4 flex-shrink-0"
                  />
                  <a
                    href="tel:+5511999990888"
                    className="text-stone-400 hover:text-teal-500 transition-colors text-xs"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    (11) 99999-0888
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    strokeWidth={1.5}
                    className="text-teal-500 w-4 h-4 flex-shrink-0"
                  />
                  <a
                    href="mailto:contato@conquistaimoveis.com"
                    className="text-stone-400 hover:text-teal-500 transition-colors text-xs"
                    style={{
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    contato@conquistaimoveis.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4
                className="mb-5 text-teal-500 font-bold text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Horários
              </h4>
              <ul className="space-y-3">
                {[
                  { day: "Segunda a Sexta", hours: "09:00 – 19:00" },
                  { day: "Sábado", hours: "09:00 – 13:00" },
                  { day: "Domingo e Feriados", hours: "Fechado" },
                ].map((item) => (
                  <li key={item.day} className="flex items-start gap-3">
                    <Clock
                      strokeWidth={1.5}
                      className="text-teal-500 w-4 h-4 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <span
                        className="text-stone-200 text-xs font-bold"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.day}
                      </span>
                      <br />
                      <span
                        className="text-stone-400 text-xs"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="mb-5 text-teal-500 font-bold text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Sobre Nós", href: "#sobre" },
                  { label: "Serviços", href: "#servicos" },
                  { label: "Diferenciais", href: "#diferenciais" },
                  { label: "Depoimentos", href: "#depoimentos" },
                  { label: "Galeria", href: "#galeria" },
                  { label: "Simular Financiamento", href: "/agendar" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-stone-400 hover:text-teal-500 transition-colors text-xs"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800/80 bg-stone-950/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-stone-500 text-xs text-center md:text-left"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            © {new Date().getFullYear()} Conquista Imóveis. Todos os direitos reservados.
            <br />
            <span className="text-[10px] text-stone-600 block mt-1">
              Corretor de Imóveis: Thiago Silva · CRECI: 123456-F. Análise e aprovação de crédito em conformidade com as regras da Caixa Econômica Federal.
            </span>
          </p>
          <p
            className="text-stone-500 text-xs text-center md:text-right"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Realize o sonho da casa própria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
