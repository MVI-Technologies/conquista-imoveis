import { MapPin, Clock, Phone, Car } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useEffect, useRef } from "react";

const LocationsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="unidades"
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
            Nosso Escritório
          </span>
          <h2
            className="font-display font-bold mt-5 mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15 }}
          >
            <span style={{ color: "#1c1917" }}>Venha tomar um café </span>
            <span style={{ color: "#0d9488" }}>conosco</span>
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
            Nosso escritório comercial é aconchegante e preparado para te receber com conforto e privacidade para simular e planejar a compra do seu lar.
          </p>
        </div>

        {/* Content Box */}
        <div
          ref={contentRef}
          className="grid lg:grid-cols-12 gap-8 items-stretch bg-white border border-stone-100 shadow-sm rounded-2xl overflow-hidden"
          style={{
            opacity: 0,
            transform: "translateY(28px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {/* Details (Left) */}
          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <h3
                  className="font-display font-bold text-stone-900 mb-2"
                  style={{ fontSize: "24px" }}
                >
                  Conquista Imóveis
                </h3>
                <p className="text-sm text-teal-700 font-semibold uppercase tracking-wider">
                  Escritório Central de Atendimento
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 text-teal-700 shrink-0">
                  <MapPin strokeWidth={2} style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Endereço</p>
                  <p className="text-stone-600 text-sm mt-0.5">Av. Paulista, 1000 — 14º Andar, Sala 1402</p>
                  <p className="text-stone-500 text-xs mt-0.5">Bela Vista — São Paulo / SP</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 text-teal-700 shrink-0">
                  <Clock strokeWidth={2} style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Horário de Atendimento</p>
                  <p className="text-stone-600 text-sm mt-0.5">Segunda a Sexta: 09h às 19h</p>
                  <p className="text-stone-600 text-sm mt-0.5">Sábado: 09h às 13h</p>
                  <p className="text-stone-500 text-xs mt-0.5">Domingo e Feriados: Fechado</p>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 text-teal-700 shrink-0">
                  <Phone strokeWidth={2} style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">Contatos Diretos</p>
                  <p className="text-stone-600 text-sm mt-0.5">
                    Telefone:{" "}
                    <a href="tel:11999990888" className="hover:text-teal-700 transition-colors">
                      (11) 99999-0888
                    </a>
                  </p>
                  <p className="text-stone-600 text-sm mt-0.5">E-mail: contato@conquistaimoveis.com</p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 w-fit">
                <Car strokeWidth={2} style={{ width: "16px", height: "16px" }} />
                <span className="text-xs font-bold">Estacionamento conveniado no subsolo</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://wa.me/5511999990888?text=Olá! Gostaria de agendar uma simulação de financiamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[150px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-all duration-200"
              >
                <WhatsAppIcon style={{ width: "16px", height: "16px" }} />
                Falar no WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av+Paulista+1000+São+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[150px] flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm border border-stone-200 text-stone-700 hover:bg-stone-50 transition-all duration-200"
              >
                <MapPin strokeWidth={2} style={{ width: "15px", height: "15px" }} />
                Como Chegar
              </a>
            </div>
          </div>

          {/* Maps Iframe (Right) */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-0 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975736173007!2d-46.6521903!3d-23.5649179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Conquista Imóveis"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
