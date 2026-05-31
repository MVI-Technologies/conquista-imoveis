import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Juliana & Roberto",
    role: "Rossi Ideal",
    content:
      "O atendimento da equipe foi espetacular! Eles conseguiram aprovar o nosso financiamento Minha Casa Minha Vida com um subsídio excelente. Nem acreditamos quando pegamos as chaves.",
    rating: 5,
  },
  {
    name: "Mateus Silva",
    role: "Parque Cerrado",
    content:
      "Comprar meu primeiro apartamento parecia um sonho distante. Eles planejaram o uso do meu FGTS para abater a entrada inteira e parcelaram o restante. A assessoria me deu total segurança.",
    rating: 5,
  },
  {
    name: "Camila Rodrigues",
    role: "Residencial Viver Bem",
    content:
      "O que eu mais gostei foi a clareza nas explicações. Eu não entendia nada de taxas de juros da Caixa ou ITBI, e eles me guiaram passo a passo com total paciência.",
    rating: 5,
  },
  {
    name: "Lucas & Fernanda",
    role: "Condomínio Altos do Sol",
    content:
      "Estávamos cansados de pagar aluguel. Fizemos a simulação gratuita no site e em menos de 24h já sabíamos nosso potencial de crédito Caixa. O processo todo foi muito seguro.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="depoimentos"
      style={{ backgroundColor: "#fafaf9" }}
      className="pt-16 pb-24 border-t border-stone-100"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-teal-800 bg-teal-50 border border-teal-200">
            Depoimentos
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Histórias de quem já conquistou </span>
            <span style={{ color: "#0d9488" }}>o primeiro lar</span>
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
            A alegria de ver nossos clientes recebendo as chaves é o que nos move. Conheça as experiências de quem escolheu a Conquista Imóveis.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-7 relative border border-stone-100 shadow-sm rounded-2xl"
            >
              {/* Large quote mark */}
              <div
                className="absolute top-4 right-6 font-display font-bold select-none pointer-events-none"
                style={{ fontSize: "72px", color: "rgba(13,148,136,0.06)", lineHeight: 1 }}
                aria-hidden
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: "14px",
                      height: "14px",
                      fill: "#f59e0b",
                      color: "#f59e0b",
                    }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="mb-6 relative z-10 text-stone-700"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14.5px",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(13,148,136,0.1)",
                    border: "1px solid rgba(13,148,136,0.2)",
                  }}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: "14px", color: "#0d9488" }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#1c1917",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#57534e",
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div
          className="mt-12 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-center gap-8 text-center bg-white border border-stone-100 shadow-sm"
        >
          {/* 4.9 */}
          <div className="flex items-center gap-3">
            <span
              className="font-display font-bold text-teal-700"
              style={{ fontSize: "48px", lineHeight: 1 }}
            >
              4.9
            </span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    style={{ width: "13px", height: "13px", fill: "#f59e0b", color: "#f59e0b" }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  color: "#57534e",
                }}
              >
                Avaliação média Caixa Habitacional
              </span>
            </div>
          </div>

          <div
            className="hidden md:block w-px h-10 bg-stone-100"
          />

          <div>
            <div
              className="font-display font-bold text-stone-900"
              style={{ fontSize: "30px" }}
            >
              +300
            </div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#57534e",
              }}
            >
              Famílias atendidas em SP
            </span>
          </div>

          <div
            className="hidden md:block w-px h-10 bg-stone-100"
          />

          <div>
            <div
              className="font-display font-bold text-stone-900"
              style={{ fontSize: "30px" }}
            >
              100%
            </div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "12px",
                color: "#57534e",
              }}
            >
              Assessoria com Custo Zero
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
