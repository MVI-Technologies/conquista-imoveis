import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-[#fafaf9]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Primeiro lar aconchegante"
          className="w-full h-full object-cover"
        />
        {/* Left→right light fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #fafaf9 0%, rgba(250,250,249,0.94) 40%, rgba(250,250,249,0.7) 70%, rgba(250,250,249,0.2) 100%)",
          }}
        />
        {/* Bottom fade to next section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, #fafaf9 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-2xl">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 animate-fade-up"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(13,148,136,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Home
              strokeWidth={1.5}
              style={{ width: "14px", height: "14px", color: "#0d9488" }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#0d9488",
              }}
            >
              Corretor de Imóveis Especialista · Seu Primeiro Lar
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-tight mb-6 animate-fade-up"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              animationDelay: "0.1s",
              lineHeight: 1.1,
            }}
          >
            <span style={{ display: "block", color: "#1c1917" }}>
              Seu primeiro lar,
            </span>
            <span style={{ display: "block", color: "#0d9488" }}>
              mais perto do que imagina.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mb-10 animate-fade-up"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              color: "#57534e",
              lineHeight: 1.7,
              maxWidth: "500px",
              animationDelay: "0.2s",
            }}
          >
            Sem burocracia, com parcelas que cabem no seu bolso. Te guio passo a passo na conquista da sua chave própria, usando seu FGTS e subsídios.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Primary */}
            <Link
              to="/agendar"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#0d9488",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#0f766e")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#0d9488")
              }
            >
              Simular Financiamento
            </Link>

            {/* Secondary */}
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold transition-all duration-200"
              style={{
                border: "1px solid rgba(13,148,136,0.45)",
                color: "#0d9488",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(13,148,136,0.08)";
                el.style.borderColor = "rgba(13,148,136,0.65)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(13,148,136,0.45)";
              }}
            >
              Ver Serviços
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-12 pt-6 animate-fade-up"
            style={{
              borderTop: "1px solid rgba(13,148,136,0.18)",
              animationDelay: "0.4s",
            }}
          >
            {[
              { value: "250+", label: "Famílias com chaves" },
              { value: "R$ 0", label: "Custo de Assessoria" },
              { value: "100%", label: "Aprovação facilitada" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    color: "#0d9488",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#57534e",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center p-2"
          style={{ border: "1px solid rgba(13,148,136,0.4)" }}
        >
          <div
            className="w-0.5 h-2 rounded-full"
            style={{ backgroundColor: "#0d9488" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
