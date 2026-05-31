import { Shield, Sparkles, Smile, Landmark } from "lucide-react";
import productsImage from "@/assets/products.jpg";

const features = [
  {
    icon: Shield,
    title: "100% Transparência",
    description: "Sem pegadinhas ou taxas surpresa no meio do processo.",
  },
  {
    icon: Landmark,
    title: "Custo Zero",
    description: "Você não paga taxas pela nossa assessoria de financiamento.",
  },
  {
    icon: Sparkles,
    title: "Foco no Primeiro Lar",
    description: "Especialistas em subsídios do Minha Casa Minha Vida.",
  },
  {
    icon: Smile,
    title: "Suporte Amigável",
    description: "Te explicamos tudo do seu jeito, sem jargões difíceis.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="sobre"
      style={{ backgroundColor: "#fafaf9" }}
      className="pt-12 pb-24 overflow-hidden"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">

          {/* ── Left: Photo Column ── */}
          <div className="relative overflow-hidden rounded-l-2xl lg:rounded-r-none rounded-2xl lg:rounded-l-2xl border border-border bg-white">
            {/* Photo */}
            <img
              src={productsImage}
              alt="Thiago Silva orientando clientes na compra do primeiro imóvel"
              className="w-full h-full object-cover"
              style={{ minHeight: "480px" }}
            />

            {/* Right-side fade gradient → blends into bg */}
            <div
              className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent, #fafaf9)",
              }}
            />

            {/* Top + bottom subtle darkening */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(250,250,249,0.15) 0%, transparent 30%, transparent 65%, rgba(250,250,249,0.35) 100%)",
              }}
            />

            {/* Badge — bottom-left */}
            <div
              className="absolute bottom-6 left-6 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(13, 148, 136, 0.35)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                maxWidth: "240px",
              }}
            >
              <div
                className="font-display font-bold mb-1"
                style={{ fontSize: "28px", color: "#0d9488", lineHeight: 1.1 }}
              >
                8 anos
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#57534e",
                  lineHeight: 1.5,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Realizando o sonho da casa própria para famílias trabalhadoras.
              </p>
            </div>
          </div>

          {/* ── Right: Text Column ── */}
          <div
            className="flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-0"
            style={{ backgroundColor: "#fafaf9" }}
          >

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: "28px",
                  height: "1px",
                  backgroundColor: "#0d9488",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  color: "#0d9488",
                  textTransform: "uppercase",
                }}
              >
                Minha História & Propósito
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-display font-bold mb-6"
              style={{ lineHeight: 1.15 }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#1c1917",
                }}
              >
                De corretor a parceiro
              </span>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  color: "#0d9488",
                  marginTop: "4px",
                }}
              >
                da sua maior conquista
              </span>
            </h2>

            {/* Body paragraphs */}
            <p
              className="mb-4 leading-relaxed"
              style={{
                fontSize: "14px",
                color: "#57534e",
                fontFamily: "Inter, sans-serif",
                maxWidth: "460px",
              }}
            >
              Nossa missão é tornar a compra do primeiro lar acessível, transparente e livre de estresse. Acreditamos que a casa própria não deve ser um privilégio distante, mas um objetivo realista que com planejamento e a ajuda certa, pode ser conquistado por qualquer família.
            </p>
            <p
              className="mb-10 leading-relaxed"
              style={{
                fontSize: "14px",
                color: "#57534e",
                fontFamily: "Inter, sans-serif",
                maxWidth: "460px",
              }}
            >
              Diferente de grandes corporações imobiliárias, nosso foco é ajudar o trabalhador e o jovem casal a saírem de vez do aluguel. Te explico cada etapa do financiamento de forma simples, ajudando a usar seu FGTS e a aproveitar ao máximo o subsídio do governo.
            </p>

            {/* Feature 2×2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ padding: "12px 0" }}
                >
                  {/* Icon container */}
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      border: "1px solid rgba(13, 148, 136, 0.4)",
                      backgroundColor: "rgba(13, 148, 136, 0.08)",
                    }}
                  >
                    <feature.icon
                      strokeWidth={1.5}
                      style={{ width: "16px", height: "16px", color: "#0d9488" }}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#1c1917",
                        fontFamily: "Inter, sans-serif",
                        marginBottom: "3px",
                        lineHeight: 1.3,
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#57534e",
                        fontFamily: "Inter, sans-serif",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
