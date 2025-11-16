import { useState, useEffect } from "react";
import { Menu, X, Vote, Shield, Calendar, TrendingUp } from "lucide-react";
import logoSedn from "../components/assets/onpe.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  // Detectar la sección activa basada en la URL del navegador
// Detectar la sección activa basada en la URL del navegador
useEffect(() => {
  const detectActiveSection = () => {
    const path = window.location.pathname;
    
    if (path === "/" || path === "/inicio") {
      setActiveSection("inicio");
    } else if (path.includes("/partidos")) {  // 👈 AGREGAR ESTA LÍNEA
      setActiveSection("partidos");           // 👈 AGREGAR ESTA LÍNEA
    } else if (path.includes("/voto-digital")) {
      setActiveSection("voto-digital");
    } else if (path.includes("/resultados")) {
      setActiveSection("resultados");
    } else if (path.includes("/informacion")) {
      setActiveSection("informacion");
    } else if (path.includes("/votar")) {
      setActiveSection("votar");
    } else {
      setActiveSection("inicio");
    }
  };

    detectActiveSection();
    window.addEventListener("popstate", detectActiveSection);
    
    const observer = new MutationObserver(detectActiveSection);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("popstate", detectActiveSection);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const fechaElecciones = new Date("2026-04-12T00:00:00").getTime();
  const ahora = new Date().getTime();
  const diasRestantes = Math.floor((fechaElecciones - ahora) / (1000 * 60 * 60 * 24));

const menuItems = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "partidos", label: "Partidos", path: "/partidos" }, // ✅ ID CORRECTO
  { id: "voto-digital", label: "Voto Digital", path: "/voto-digital" }, // ✅ SIN DUPLICAR
  { id: "resultados", label: "Resultados", path: "/resultados", badge: "Live" },
  { id: "informacion", label: "Información", path: "/informacion" },
];
  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }

        @keyframes expandHeight {
          from { max-height: 0; opacity: 0; }
          to { max-height: 500px; opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(-15px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes smoothGlow {
          0% {
            box-shadow: 0 4px 6px -1px rgba(227, 30, 36, 0.1);
          }
          100% {
            box-shadow: 0 10px 15px -3px rgba(227, 30, 36, 0.3);
          }
        }

        .navbar-enter {
          animation: slideDown 0.5s ease-out;
        }

        .menu-item {
          animation: slideInLeft 0.3s ease-out forwards;
          opacity: 0;
        }

        .menu-item:nth-child(1) { animation-delay: 0.05s; }
        .menu-item:nth-child(2) { animation-delay: 0.1s; }
        .menu-item:nth-child(3) { animation-delay: 0.15s; }
        .menu-item:nth-child(4) { animation-delay: 0.2s; }
        .menu-item:nth-child(5) { animation-delay: 0.25s; }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        .logo-hover:hover .logo-icon {
          animation: wiggle 0.5s ease-in-out;
        }

        .mobile-menu-enter {
          animation: expandHeight 0.3s ease-out;
        }

        .gradient-slide {
          position: relative;
          overflow: hidden;
        }

        .gradient-slide::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #C41E3A, #8B0000);
          transform: translateX(100%);
          transition: transform 0.3s ease;
        }

        .gradient-slide:hover::before {
          transform: translateX(0);
        }

        .gradient-slide > span {
          position: relative;
          z-index: 1;
        }

        .nav-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-active {
          animation: smoothGlow 0.4s ease-in-out;
        }

        .nav-link:hover {
          transform: translateY(-1px);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isVisible ? 'navbar-enter' : ''
        } ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Barra superior con contador */}
          <div
            className="flex items-center justify-between py-2 border-b border-gray-100 transition-all duration-300 overflow-hidden"
            style={{
              opacity: scrolled ? 0 : 1,
              maxHeight: scrolled ? 0 : '48px',
            }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-[#E31E24]" />
              <span className="font-medium">
                Elecciones 2026: <span className="text-[#E31E24] font-bold">{diasRestantes} días</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Participación en tiempo real
              </span>
            </div>
          </div>

          {/* Navbar principal */}
          <div className="flex justify-between items-center py-4">
            {/* Logo con imagen ONPE */}
            <a
              href="/"
              className="flex items-center gap-3 group logo-hover cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={logoSedn} 
                  alt="Logo SEDN" 
                  className="h-10 w-auto rounded-lg shadow-lg logo-icon transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-500/30 object-contain"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white pulse-animation" />
              </div>
              <div>
                <span className="text-2xl font-black text-gray-900 group-hover:text-[#E31E24] transition-colors duration-300">
                  Voto Perú
                </span>
                <span className="block text-xs text-gray-500 font-medium -mt-1 group-hover:text-gray-700 transition-colors duration-200">
                  Tu voto, tu voz
                </span>
              </div>
            </a>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {/* Links de navegación */}
              <div className="flex items-center bg-gray-50/80 rounded-full px-2 py-1.5 border border-gray-100 shadow-sm">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.path}
                    className={`nav-link relative px-6 py-2 font-semibold text-sm rounded-full ${
                      activeSection === item.id
                        ? "text-white bg-gradient-to-r from-[#E31E24] to-[#C41E3A] shadow-md nav-link-active"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                      {item.label}
                      {item.badge && (
                        <span className={`px-2 py-0.5 text-[10px] font-black rounded-full transition-all duration-300 ${
                          activeSection === item.id 
                            ? "bg-white/30 text-white pulse-animation" 
                            : "bg-red-100 text-[#E31E24]"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </a>
                ))}
              </div>

              {/* Botón Admin */}
              <a
                href="/admin/login"
                className="p-3 text-gray-400 hover:text-[#E31E24] hover:bg-red-50 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 inline-flex items-center justify-center cursor-pointer border border-transparent hover:border-red-100"
                title="Acceso Administrativo"
              >
                <Shield className="w-5 h-5" />
              </a>

              {/* Botón principal CTA */}
              <a
                href="/votar"
                className="gradient-slide bg-gradient-to-r from-[#E31E24] to-[#C41E3A] text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-500/30 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40 active:scale-95 inline-flex items-center gap-2.5 border-2 border-red-600/20"
              >
                <span className="flex items-center gap-2.5">
                  <Vote className="w-5 h-5" />
                  <span>Ir a Votar</span>
                </span>
              </a>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-[#E31E24] hover:bg-red-50 rounded-lg transition-all duration-200 active:scale-90"
            >
              <div className="transition-transform duration-200">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Menú móvil mejorado */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/98 backdrop-blur-lg mobile-menu-enter">
            <div className="px-6 py-6 space-y-1">
              {menuItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={handleNavClick}
                  className={`menu-item block px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-red-50 to-red-100 text-[#E31E24]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-red-100 text-[#E31E24] text-xs font-bold rounded-full pulse-animation">
                        {item.badge}
                      </span>
                    )}
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-[#E31E24] rounded-full pulse-animation" />
                    )}
                  </span>
                </a>
              ))}

              {/* Botón CTA móvil */}
              <a
                href="/votar"
                onClick={handleNavClick}
                className="menu-item block mt-4 bg-gradient-to-r from-[#E31E24] to-[#C41E3A] text-white px-6 py-3.5 rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <Vote className="w-5 h-5" />
                  Ir a Votar Ahora
                </span>
              </a>

              {/* Admin móvil */}
              <a
                href="/admin/login"
                onClick={handleNavClick}
                className="menu-item flex items-center gap-3 px-4 py-3 mt-4 border-t border-gray-200 text-gray-600 hover:text-[#E31E24] transition-colors duration-300"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">Acceso Administrativo</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Espaciador */}
      <div className={`transition-all duration-300 ${scrolled ? "h-[73px]" : "h-[113px]"}`} />
    </>
  );
}   