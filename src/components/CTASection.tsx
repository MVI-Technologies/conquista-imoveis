import { Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const CTASection = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  // Scroll reveal
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
      { threshold: 0.15 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // Pulse ring animation
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    let initial: any;
    let timeout: any;
    let interval: any;

    const runAnimation = () => {
      btn.classList.add("animate-pulse-ring");
      timeout = setTimeout(() => {
        btn.classList.remove("animate-pulse-ring");
      }, 1200);
    };

    initial = setTimeout(() => {
      runAnimation();
      interval = setInterval(runAnimation, 3500);
    }, 2000);

    return () => {
      clearTimeout(initial);
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      style={{ backgroundColor: "#0d9488" }}
      className="pt-16 pb-24 relative overflow-hidden"
    >
      {/* Subtle radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
          }}
        >
          {/* Eyebrow */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                }}
              >
                Simule Agora Sem Custo
              </span>
            </div>
          </div>

          {/* Title */}
          <h2
            className="font-display font-bold mb-5 text-white"
            style={{ fontSize: "clamp(30px, 5vw, 42px)", lineHeight: 1.15 }}
          >
            Pronto para conquistar
            <br />
            <span style={{ color: "#fbbf24" }}>o seu primeiro lar?</span>
          </h2>

          {/* Subtitle */}
          <p
            className="mb-8 max-w-lg mx-auto text-teal-50"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
            }}
          >
            Descubra em minutos o valor do seu subsídio Caixa, o valor das suas parcelas e quais apartamentos se encaixam no seu orçamento.
          </p>

          <p
            className="flex items-center justify-center gap-2 mb-8 text-xs font-bold uppercase tracking-wider text-teal-100"
          >
            Rápido, Didático e 100% Online
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              ref={btnRef as any}
              to="/agendar"
              aria-label="Simular Grátis"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-bold transition-all duration-200 bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-md shadow-amber-500/20 text-sm"
            >
              Simular Financiamento
            </Link>

            <a
              href="tel:+5511999990888"
              aria-label="Ligar para consultores"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-bold transition-all duration-200 border text-white text-sm"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "rgba(255,255,255,0.1)";
                el.style.borderColor = "#ffffff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "rgba(255,255,255,0.4)";
              }}
            >
              <Phone
                strokeWidth={2}
                style={{ width: "16px", height: "16px" }}
              />
              (11) 99999-0888
            </a>
          </div>

          {/* Micro-copy */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#ccfbf1",
            }}
          >
            Assessoria de crédito oficial Caixa Aqui sem custos adicionais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
