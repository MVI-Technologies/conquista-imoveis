import { useEffect, useRef } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
};

const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    alt: "Entrega de chaves do novo apartamento próprio",
    caption: "Sonho Realizado",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
    alt: "Sala de estar aconchegante de apartamento decorado",
    caption: "Sala Decorada de Entrada",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600",
    alt: "Cozinha planejada compacta e moderna",
    caption: "Cozinha Funcional",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
    alt: "Fachada de condomínio residencial moderno",
    caption: "Condomínio Moderno",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600",
    alt: "Área de lazer com piscina",
    caption: "Lazer Completo para a Família",
  },
  {
    src: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600",
    alt: "Casal jovem assinando contrato de financiamento",
    caption: "Assinatura Caixa Sem Burocracia",
  },
];

const GallerySection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="galeria"
      style={{ backgroundColor: "#fafaf9" }}
      className="pt-16 pb-24 border-t border-stone-100"
    >
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
            Galeria & Decorados
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Inspire-se com o seu </span>
            <span style={{ color: "#0d9488" }}>futuro lar</span>
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
            Confira imagens reais de apartamentos decorados, condomínios prontos e a alegria dos nossos clientes conquistando a casa própria.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto",
            gap: "12px",
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s",
          }}
          className="sm:grid"
        >
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                borderRadius: "16px",
                border: "1px solid #f5f5f4",
                transition: "border-color 0.25s ease, transform 0.3s ease",
                gridRow: item.tall ? "span 2" : "span 1",
                minHeight: item.tall ? "460px" : "220px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(13,148,136,0.35)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#f5f5f4";
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107"
                style={{ display: "block" }}
              />

              {/* Hover overlay with caption */}
              <div
                className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(28,25,23,0.85) 0%, rgba(28,25,23,0.2) 50%, transparent 100%)",
                }}
              >
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "15px",
                    color: "#ffffff",
                    textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                  }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="text-center mt-10">
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#57534e",
              fontStyle: "italic",
              marginBottom: "16px",
            }}
          >
            Acompanhe as entregas de chaves em tempo real!
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir no Instagram"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200"
            style={{
              border: "1px solid rgba(13,148,136,0.3)",
              color: "#0d9488",
              fontFamily: "Inter, sans-serif",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "rgba(13,148,136,0.05)";
              el.style.borderColor = "#0d9488";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "rgba(13,148,136,0.3)";
            }}
          >
            @conquistaimoveis.oficial
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
