import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Clock, Sparkles, Home, FileText, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  popular?: boolean;
};

type Category = {
  id: string;
  label: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

const categories: Category[] = [
  {
    id: "credito",
    label: "Crédito & Caixa",
    icon: TrendingUp,
    items: [
      { name: "Análise de Crédito Habitacional", duration: "Até 24h", price: "Custo Zero", popular: true },
      { name: "Simulação de Subsídio MCMV", duration: "15 min", price: "Gratuito" },
      { name: "Uso Inteligente do FGTS", duration: "30 min", price: "Assessoria" },
      { name: "Planejamento de Entrada Parcelada", duration: "45 min", price: "Sem Custo" },
    ],
  },
  {
    id: "curadoria",
    label: "Escolha do Imóvel",
    icon: Home,
    items: [
      { name: "Curadoria de Imóveis de Entrada", duration: "Personalizado", price: "Custo Zero", popular: true },
      { name: "Agendamento de Visita Presencial", duration: "Sob demanda", price: "Grátis" },
      { name: "Apresentação de Decorados", duration: "1h", price: "Sem Taxa" },
    ],
  },
  {
    id: "assessoria",
    label: "Assessoria Completa",
    icon: FileText,
    items: [
      { name: "Assessoria até a Assinatura", duration: "Processo todo", price: "Custo Zero", popular: true },
      { name: "Análise Documental Preventiva", duration: "24h", price: "Incluído" },
      { name: "Estimativa de ITBI e Registro", duration: "20 min", price: "Gratuito" },
    ],
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("credito");
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="servicos" style={{ backgroundColor: "#fafaf9" }} className="pt-16 pb-24 border-t border-stone-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-teal-800 bg-teal-50 border border-teal-200">
            Nossos Serviços
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Tudo o que você precisa, </span>
            <span style={{ color: "#0d9488" }}>com custo zero de assessoria</span>
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              color: "#57534e",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Nossa remuneração é feita diretamente pelas construtoras parceiras ou agentes bancários. Você tem todo o suporte especializado sem pagar nem um real a mais por isso.
          </p>
        </div>

        {/* Layout: Image left + Price list right */}
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-14">
          {/* Left: Service image + quick visual */}
          <div className="lg:col-span-2 hidden lg:block">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "16px", aspectRatio: "4/5" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
                alt={`Serviços de ${activeCategory.label}`}
                className="w-full h-full object-cover"
                style={{ transition: "opacity 0.4s ease" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(28,25,23,0.85) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="font-display font-bold"
                  style={{ fontSize: "22px", color: "#fafaf9", lineHeight: 1.2 }}
                >
                  {activeCategory.label}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#d6d3d1",
                    marginTop: "4px",
                  }}
                >
                  {activeCategory.items.length} serviços focados na sua conquista
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tabs + Price list */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div
              className="flex gap-1 p-1 mb-6 rounded-xl bg-teal-50/60 border border-teal-100"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  aria-label={`Ver serviços de ${cat.label}`}
                  className="flex-1 flex items-center justify-center gap-1.5 px-2 py-3 rounded-lg text-xs font-bold transition-all duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    backgroundColor:
                      activeTab === cat.id ? "#0d9488" : "transparent",
                    color: activeTab === cat.id ? "#ffffff" : "#0f766e",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <cat.icon
                    strokeWidth={2}
                    style={{ width: "14px", height: "14px", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Price List */}
            <div
              className="bg-white border border-stone-100 shadow-sm overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              {activeCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-5 py-5 group transition-colors duration-200"
                  style={{
                    borderBottom:
                      index < activeCategory.items.length - 1
                        ? "1px solid #f5f5f4"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#fafaf9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {item.popular && (
                      <div
                        className="shrink-0 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200"
                      >
                        <Sparkles
                          strokeWidth={2}
                          style={{
                            width: "10px",
                            height: "10px",
                            color: "#f59e0b",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#f59e0b",
                          }}
                        >
                          Recomendado
                        </span>
                      </div>
                    )}
                    <div className="min-w-0">
                      <p
                        className="truncate font-semibold"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          color: "#1c1917",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </p>
                      <span
                        className="flex items-center gap-1 mt-1"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "12px",
                          color: "#57534e",
                        }}
                      >
                        <Clock
                          strokeWidth={2}
                          style={{
                            width: "12px",
                            height: "12px",
                            color: "#0d9488",
                          }}
                        />
                        Tempo médio: {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <span
                      className="font-display font-bold text-teal-700"
                      style={{ fontSize: "16px" }}
                    >
                      {item.price}
                    </span>
                    <Link
                      to="/agendar"
                      aria-label={`Solicitar ${item.name}`}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 shadow-sm border border-teal-200 text-teal-800 bg-teal-50"
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#0d9488";
                        el.style.color = "#ffffff";
                        el.style.borderColor = "#0d9488";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.backgroundColor = "#f0fdf4";
                        el.style.color = "#0f766e";
                        el.style.borderColor = "#ccfbf1";
                      }}
                    >
                      Solicitar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Simulador Banner */}
        <div
          className="p-8 md:p-10 rounded-2xl relative overflow-hidden bg-white shadow-sm border border-teal-100"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center lg:text-left max-w-lg">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 bg-teal-50 border border-teal-200"
              >
                <Sparkles
                  strokeWidth={2}
                  style={{ width: "13px", height: "13px", color: "#0d9488" }}
                />
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#0d9488",
                  }}
                >
                  Simulador de Parcelas
                </span>
              </div>

              <h3
                className="font-display font-bold mb-3 text-stone-900"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
              >
                Quer saber o tamanho do seu subsídio?
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "#57534e",
                  lineHeight: 1.7,
                }}
              >
                Fazemos a simulação completa do seu financiamento Caixa (Minha Casa Minha Vida) de forma 100% gratuita. Veja o valor das parcelas que cabem no seu bolso.
              </p>
            </div>

            {/* Right */}
            <div
              className="flex flex-col items-center lg:items-end shrink-0 border-t lg:border-t-0 lg:border-l border-stone-100 pt-8 lg:pt-0 lg:pl-10 w-full lg:w-auto"
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#57534e",
                  textDecoration: "line-through",
                  marginBottom: "4px",
                }}
              >
                Taxa Administrativa
              </span>
              
              <div className="flex items-baseline gap-1.5 mb-5">
                <span
                  className="font-display font-bold text-amber-500"
                  style={{ fontSize: "44px", lineHeight: 1 }}
                >
                  R$ 0
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#57534e",
                  }}
                >
                  / total
                </span>
              </div>

              <Link
                to="/agendar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-md shadow-amber-500/10"
              >
                Fazer Simulação Grátis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
