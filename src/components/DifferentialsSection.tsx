import { Award, BookOpen, Building2, HeartHandshake, Compass, ShieldCheck, Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Assessoria sem Custos Adicionais",
    description:
      "Toda a assessoria de crédito e despachante é gratuita para você. Nossa remuneração vem dos parceiros bancários e construtoras.",
  },
  {
    icon: BookOpen,
    title: "Explicações Didáticas",
    description:
      "Descomplicamos todo o vocabulário de financiamento, taxas e juros de forma clara, sem letras miúdas ou surpresas.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Completo",
    description:
      "Estamos ao seu lado em todas as etapas: simulação, aprovação, escolha do imóvel, assinatura no banco e entrega das chaves.",
  },
  {
    icon: Compass,
    title: "Curadoria Focada no Primeiro Imóvel",
    description:
      "Selecionamos imóveis de entrada que oferecem a melhor relação de custo-benefício e potencial real de valorização.",
  },
  {
    icon: Award,
    title: "Correspondente Caixa Oficial",
    description:
      "Agilidade garantida. Cuidamos diretamente da aprovação do seu crédito junto à Caixa com taxas reduzidas.",
  },
  {
    icon: Building2,
    title: "Segurança de Construtoras Sólidas",
    description:
      "Trabalhamos exclusivamente com construtoras de excelente reputação, garantindo prazos de entrega e qualidade de obra.",
  },
];

const DifferentialsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

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
    if (gridRef.current) observer.observe(gridRef.current);
    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="diferenciais"
      style={{ backgroundColor: "#fafaf9" }}
      className="pt-16 pb-24 border-t border-stone-100"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-teal-800 bg-teal-50 border border-teal-200">
            Nossos Diferenciais
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Diferenciais que tornam sua </span>
            <span style={{ color: "#0d9488" }}>conquista segura e simples</span>
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
            Ajudamos famílias e jovens compradores a saírem do aluguel com clareza, segurança jurídica e planejamento financeiro sem mistérios.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out 0.1s, transform 0.7s ease-out 0.1s",
          }}
        >
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-7 transition-all duration-300 border border-stone-100 hover:shadow-sm rounded-2xl"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 mb-5 text-teal-700">
                <item.icon
                  strokeWidth={2}
                  style={{ width: "20px", height: "20px" }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#1c1917",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13.5px",
                  color: "#57534e",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Quote */}
        <div
          ref={quoteRef}
          className="mt-16 relative"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <div
            className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden bg-teal-900 border border-teal-800"
          >
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 left-8 opacity-10"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              <Quote
                style={{ width: "72px", height: "72px", color: "#ffffff" }}
              />
            </div>
            <div
              className="absolute bottom-6 right-8 opacity-10 rotate-180"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              <Quote
                style={{ width: "72px", height: "72px", color: "#ffffff" }}
              />
            </div>

            {/* Quote text */}
            <p
              className="font-display relative z-10 mx-auto text-teal-100"
              style={{
                fontSize: "clamp(20px, 2.5vw, 25px)",
                fontStyle: "italic",
                lineHeight: 1.6,
                maxWidth: "700px",
                fontWeight: 400,
              }}
            >
              "O financiamento do primeiro imóvel parecia impossível para nós. O Thiago e sua equipe descomplicaram tudo, cuidaram de toda a burocracia com a Caixa e hoje moramos no nosso próprio apartamento."
            </p>

            {/* Attribution */}
            <div className="flex items-center justify-center gap-4 mt-8 relative z-10">
              {/* Avatar initial */}
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold shrink-0 bg-white/10 border border-white/20 text-amber-400"
                style={{
                  fontSize: "16px",
                }}
              >
                F
              </div>
              <div className="text-left">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    lineHeight: 1.3,
                  }}
                >
                  Felipe & Amanda S.
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#ccfbf1",
                  }}
                >
                  Clientes Conquistados · Proprietários do Residencial Parque das Flores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
