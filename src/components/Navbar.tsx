import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu, Home } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Conquistas", href: "#galeria" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "rgba(250, 250, 249, 0.96)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(13, 148, 136, 0.14)"
          : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
              style={{ borderColor: "#0d9488", backgroundColor: "rgba(13, 148, 136, 0.08)" }}
            >
              <Home className="w-5 h-5 text-[#0d9488]" strokeWidth={1.5} />
            </div>
            <span
              className="font-display font-bold text-lg tracking-wide"
              style={{ color: "#1c1917" }}
            >
              Conquista Imóveis
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#57534e",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#0d9488")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#57534e")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/agendar"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200"
              style={{
                backgroundColor: "#0d9488",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
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
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#57534e" }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={1.5} className="w-6 h-6" />
            ) : (
              <Menu strokeWidth={1.5} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#fafaf9",
            borderBottom: "1px solid rgba(13, 148, 136, 0.14)",
          }}
        >
          <div className="container py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base font-semibold transition-colors duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#57534e",
                  borderBottom: "1px solid rgba(13, 148, 136, 0.08)",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#0d9488")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#57534e")
                }
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/agendar"
              className="mt-4 inline-flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-sm"
              style={{
                backgroundColor: "#0d9488",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Simular Financiamento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
