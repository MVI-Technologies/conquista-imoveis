import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Thiago Silva",
    role: "Corretor & Fundador (CRECI SP)",
    specialty: "Curadoria de imóveis e planejamento financeiro personalizado.",
    experience: "8 anos de exp.",
    contact: "#simulador",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Parceria Caixa Aqui",
    role: "Correspondência Bancária",
    specialty: "Análise rápida de crédito, simulação de taxas e subsídios Minha Casa Minha Vida.",
    experience: "Canal Oficial",
    contact: "#simulador",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Suporte Documental",
    role: "Jurídico & Administrativo",
    specialty: "Liberação rápida de FGTS, análise de ITBI e registros cartoriais simplificados.",
    experience: "Especialistas",
    contact: "#simulador",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
];

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: "16px", height: "16px" }}
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const TeamSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipe"
      style={{ backgroundColor: "#fafaf9" }}
      className="pt-16 pb-24 overflow-hidden border-t border-stone-100"
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
            Quem nos apoia
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Parcerias e assessoria </span>
            <span style={{ color: "#0d9488" }}>para a sua conquista</span>
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
            Desde a escolha do imóvel ideal até as melhores taxas de financiamento. Nossa estrutura garante segurança e praticidade do início ao fim.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-md border border-stone-100 transition-all duration-300"
              style={{
                borderRadius: "16px",
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.7s ease-out ${index * 0.12}s, transform 0.7s ease-out ${index * 0.12}s`,
              }}
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,148,136,0.95) 40%, rgba(13,148,136,0.6) 100%)",
                  }}
                >
                  <a
                    href={member.contact}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-sm"
                    style={{
                      border: "1px solid rgba(255,255,255,0.4)",
                      color: "#ffffff",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(6px)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "#ffffff";
                      el.style.color = "#0d9488";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.backgroundColor = "rgba(255,255,255,0.15)";
                      el.style.color = "#ffffff";
                    }}
                  >
                    Fazer Simulação
                    <ArrowRightIcon />
                  </a>
                </div>

                {/* Experience/badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(13,148,136,0.2)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#0d9488",
                    }}
                  >
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="font-display font-bold mb-1"
                  style={{ fontSize: "20px", color: "#1c1917", lineHeight: 1.3 }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0d9488",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#57534e",
                    lineHeight: 1.6,
                  }}
                >
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom human note */}
        <p
          className="text-center mt-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "#57534e",
            fontStyle: "italic",
          }}
        >
          "Sua conquista com a assessoria de quem entende cada etapa."
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
