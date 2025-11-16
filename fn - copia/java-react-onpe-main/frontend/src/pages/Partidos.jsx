import { useState } from "react";
import { Search, ExternalLink, Users, BookOpen, TrendingUp, Filter, X, MapPin, Calendar, Award, Eye, ChevronRight } from "lucide-react";

export default function Partidos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroIdeologia, setFiltroIdeologia] = useState("Todos");
  const [partidoExpandido, setPartidoExpandido] = useState(null);

  const partidos = [
    {
      id: 1,
      nombre: "Acción Popular",
      siglas: "AP",
      color: "#E31E24",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Acci%C3%B3n_Popular.png",
      ideologia: "Centro-derecha",
      fundacion: "1956",
      fundador: "Fernando Belaúnde Terry",
      lider: "Mesías Guevara",
      slogan: "La Fuerza de la Libertad",
      descripcion: "Partido político peruano de ideología de centro-derecha, democracia cristiana y populismo. Fundado por Fernando Belaúnde Terry, quien fue dos veces presidente del Perú. Se caracteriza por su énfasis en obras públicas y descentralización.",
      propuestas: [
        "Construcción de carreteras marginales y desarrollo de infraestructura vial",
        "Fortalecimiento de gobiernos regionales y locales con mayor autonomía",
        "Inversión masiva en educación rural y programas de alfabetización",
        "Desarrollo agrario y apoyo a comunidades campesinas",
        "Creación de viviendas populares y programas de acceso a la propiedad"
      ],
      logros: [
        "Construcción de miles de km de carreteras durante gobiernos de Belaúnde",
        "Creación del Banco de la Nación y reforma del sistema financiero",
        "Implementación de programas de cooperación popular"
      ],
      sitioWeb: "https://accionpopular.com.pe",
      miembros: "150,000+",
      congresistas: 15,
      presencia: "Nacional - fuerte en la sierra central y sur"
    },
    {
      id: 2,
      nombre: "Alianza Para el Progreso",
      siglas: "APP",
      color: "#0066CC",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Alianza_para_el_Progreso_Peru.svg/1200px-Alianza_para_el_Progreso_Peru.svg.png",
      ideologia: "Centro",
      fundacion: "2001",
      fundador: "César Acuña Peralta",
      lider: "César Acuña Peralta",
      slogan: "Progreso para Todos",
      descripcion: "Partido político peruano fundado por el empresario y educador César Acuña Peralta. Tiene fuerte presencia en el norte del país, especialmente en La Libertad. Se enfoca en educación, emprendimiento y desarrollo tecnológico.",
      propuestas: [
        "Modernización del sistema educativo con enfoque en tecnología",
        "Desarrollo de infraestructura educativa de última generación",
        "Programas de emprendimiento juvenil y apoyo a startups",
        "Inversión en investigación científica y desarrollo tecnológico",
        "Digitalización del Estado y gobierno electrónico"
      ],
      logros: [
        "Gestión municipal exitosa en Trujillo",
        "Creación de la Universidad César Vallejo",
        "Implementación de programas educativos innovadores"
      ],
      sitioWeb: "https://app.pe",
      miembros: "200,000+",
      congresistas: 22,
      presencia: "Fuerte en el norte - La Libertad, Lambayeque, Cajamarca"
    },
    {
      id: 3,
      nombre: "Fuerza Popular",
      siglas: "FP",
      color: "#FF6600",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fuerza_popular.svg/1024px-Fuerza_popular.svg.png",
      ideologia: "Derecha",
      fundacion: "2010",
      fundador: "Keiko Fujimori",
      lider: "Keiko Fujimori",
      slogan: "Fuerza y Corazón",
      descripcion: "Partido político peruano de derecha, heredero del fujimorismo. Defiende el legado del gobierno de Alberto Fujimori (1990-2000). Tiene importante presencia en Lima y regiones del sur. Propone políticas de mano dura contra la delincuencia.",
      propuestas: [
        "Mano dura contra la delincuencia y reducción de la criminalidad",
        "Impulso masivo a la inversión privada y libre mercado",
        "Programas sociales focalizados con énfasis en educación y salud",
        "Construcción de infraestructura penitenciaria moderna",
        "Reforma del sistema judicial para mayor eficiencia"
      ],
      logros: [
        "Segunda fuerza política en elecciones 2011, 2016 y 2021",
        "Bancada con mayor representación en varios congresos",
        "Fuerte estructura partidaria a nivel nacional"
      ],
      sitioWeb: "https://fuerzapopular.com.pe",
      miembros: "180,000+",
      congresistas: 24,
      presencia: "Lima Metropolitana, sur del país, sectores populares"
    },
    {
      id: 4,
      nombre: "Partido Morado",
      siglas: "PM",
      color: "#8B4789",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Partido_Morado_logo.svg",
      ideologia: "Centro",
      fundacion: "2017",
      fundador: "Julio Guzmán",
      lider: "Julio Guzmán",
      slogan: "Orden y Progreso",
      descripcion: "Partido político peruano de centro, fundado por el economista Julio Guzmán. Propone reformas institucionales profundas, transparencia y meritocracia. Se caracteriza por su enfoque técnico y propuestas basadas en evidencia.",
      propuestas: [
        "Reforma del sistema político y electoral para mayor representatividad",
        "Lucha frontal contra la corrupción con instituciones fortalecidas",
        "Implementación de meritocracia en todos los niveles del Estado",
        "Reforma del sistema de justicia y del Poder Judicial",
        "Inversión en educación de calidad y ciencia aplicada"
      ],
      logros: [
        "Ingreso al Congreso en 2020 con bancada técnica",
        "Propuestas legislativas innovadoras en transparencia",
        "Reconocimiento por propuestas basadas en evidencia"
      ],
      sitioWeb: "https://partidomorado.pe",
      miembros: "80,000+",
      congresistas: 10,
      presencia: "Sectores urbanos, clase media, profesionales"
    },
    {
      id: 5,
      nombre: "Renovación Popular",
      siglas: "RP",
      color: "#00A651",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Renovaci%C3%B3n_Popular_logo.svg/1632px-Renovaci%C3%B3n_Popular_logo.svg.png",
      ideologia: "Derecha",
      fundacion: "2019",
      fundador: "Rafael López Aliaga",
      lider: "Rafael López Aliaga",
      slogan: "Libertad y Valores",
      descripcion: "Partido político peruano de derecha conservadora, fundado por el empresario Rafael López Aliaga. Defiende valores cristianos tradicionales y el libre mercado. Propone reducción del tamaño del Estado y mayor libertad económica.",
      propuestas: [
        "Reducción significativa del tamaño del Estado y burocracia",
        "Defensa de valores cristianos y familia tradicional",
        "Libre mercado sin intervención estatal excesiva",
        "Reducción de impuestos y simplificación tributaria",
        "Mano dura contra el terrorismo y delincuencia organizada"
      ],
      logros: [
        "Tercera fuerza en elecciones presidenciales 2021",
        "Alcaldía de Lima (2023) con propuestas de seguridad",
        "Crecimiento rápido en sectores conservadores"
      ],
      sitioWeb: "https://renovacionpopular.com.pe",
      miembros: "90,000+",
      congresistas: 13,
      presencia: "Lima, sectores conservadores, empresarios"
    },
    {
      id: 6,
      nombre: "Perú Libre",
      siglas: "PL",
      color: "#DC143C",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Per%C3%BA_Libre_logo.svg/1200px-Per%C3%BA_Libre_logo.svg.png",
      ideologia: "Izquierda",
      fundacion: "2016",
      fundador: "Vladimir Cerrón",
      lider: "Vladimir Cerrón",
      slogan: "Patria o Muerte",
      descripcion: "Partido político peruano de izquierda marxista, fundado por Vladimir Cerrón. Ganó las elecciones presidenciales 2021 con Pedro Castillo. Propone cambios estructurales en el modelo económico y nueva Constitución.",
      propuestas: [
        "Convocatoria a Asamblea Constituyente para nueva Constitución",
        "Nacionalización de recursos naturales estratégicos",
        "Segunda reforma agraria y redistribución de tierras",
        "Mayor rol del Estado en la economía",
        "Renegociación de contratos con empresas extractivas"
      ],
      logros: [
        "Victoria en elecciones presidenciales 2021",
        "Gobierno regional de Junín (2019-2022)",
        "Presencia en sectores rurales y sindicales"
      ],
      sitioWeb: "https://perulibre.pe",
      miembros: "120,000+",
      congresistas: 16,
      presencia: "Sierra central y sur, sectores rurales y sindicales"
    },
    {
      id: 7,
      nombre: "Avanza País",
      siglas: "AP",
      color: "#FF8C00",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Avanza_Pais.png",
      ideologia: "Centro-derecha",
      fundacion: "2020",
      fundador: "Hernando de Soto",
      lider: "Hernando de Soto",
      slogan: "Economía Social de Mercado",
      descripcion: "Partido político peruano de centro-derecha fundado por el economista Hernando de Soto. Propone formalización masiva, emprendimiento y economía de mercado con justicia social.",
      propuestas: [
        "Formalización masiva de empresas y propiedades",
        "Acceso al crédito para microempresarios",
        "Simplificación de trámites y desburocratización",
        "Titulación de propiedades y seguridad jurídica",
        "Economía social de mercado con inclusión"
      ],
      logros: [
        "Propuestas reconocidas internacionalmente en formalización",
        "Participación en elecciones 2021",
        "Influencia en políticas de inclusión económica"
      ],
      sitioWeb: "https://avanzapais.org.pe",
      miembros: "60,000+",
      congresistas: 7,
      presencia: "Sectores empresariales y emprendedores"
    },
    {
      id: 8,
      nombre: "Podemos Perú",
      siglas: "PP",
      color: "#4169E1",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Logo_Podemos_Per%C3%BA.png/500px-Logo_Podemos_Per%C3%BA.png",
      ideologia: "Centro",
      fundacion: "2018",
      fundador: "José Luna Gálvez",
      lider: "José Luna Gálvez",
      slogan: "Juntos Podemos",
      descripcion: "Partido político peruano de centro fundado por el empresario educativo José Luna Gálvez. Enfocado en educación, juventud y desarrollo social.",
      propuestas: [
        "Inversión masiva en educación superior",
        "Programas de becas para jóvenes",
        "Desarrollo de infraestructura educativa",
        "Apoyo al emprendimiento juvenil",
        "Modernización tecnológica de instituciones"
      ],
      logros: [
        "Representación en el Congreso desde 2020",
        "Desarrollo de propuestas educativas",
        "Presencia en sectores juveniles"
      ],
      sitioWeb: "https://podemosperu.org.pe",
      miembros: "70,000+",
      congresistas: 5,
      presencia: "Lima y principales ciudades"
    },
    {
      id: 9,
      nombre: "Juntos por el Perú",
      siglas: "JP",
      color: "#00A651",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_juntos_por_el_Peru.svg",
      ideologia: "Izquierda",
      fundacion: "2017",
      fundador: "Roberto Sánchez Palomino",
      lider: "Roberto Sánchez Palomino",
      slogan: "AMA SUA, AMA QUELLA, AMA LULLA",
      descripcion: "Partido político peruano, situado en la izquierda del espectro.",
      propuestas: [
        "Establecer el Programa Regional de Investigación Científica (PRIC) para incentivar la investigación.",
        "Proponer la imprescriptibilidad de los delitos de corrupción.",
        "Asegurar un sistema de salud universal, único, gratuito y de calidad.",
        "Aplicar impuestos a todas las empresas sin excepción.",
        "Eliminar la inmunidad parlamentaria."
      ],
      logros: [
        "Fiscalización de obras de saneamiento",
        "Obtención de sellos Safe Travels para destinos turísticos",
        "Premios para destinos verdes y otras iniciativas en los ejes de inversión social",
        "Seguridad ciudadana y lucha contra la corrupción. "
      ],
      sitioWeb: "https://jp.org.pe/",
      miembros: "30.000+",
      congresistas: 5,
      presencia: "Lima y principales ciudades"
    },
    {
      id: 10,
      nombre: "Frente Amplio",
      siglas: "FA",
      color: "#4169E1",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Logo-frente-amplio.svg",
      ideologia: "Centro Izquierda - Izquierda",
      fundacion: "2010",
      fundador: "Marco Arana",
      lider: "Marco Arana",
      slogan: "Por la Vida, la Justicia y la Libertad",
      descripcion: "Es un partido político, el cual se define como una coalición de partidos, organizaciones políticas, movimientos sociales y ciudadanos activistas del Perú cuyo principal objetivo es consolidar a los distintos sectores de izquierda, progresistas, socialistas y ecologistas.",
      propuestas: [
        "Lograr que la economía peruana crezca, en promedio, un 6%, con una tasa de crecimiento anual del empleo formal de 6%, sustentado en la reactivación, redistribución y diversificación de la economía. ",
        "Generar un cambio total de la Constitución. Reconstruir el sistema de representación política, para ampliar los espacios de participación y representación en beneficio de la legitimidad de los representantes electos.",
        "Sensibilizar sobre el cuidado ambiental por medio de campañas nacionales y fortalecer la autoridad ambiental, con un enfoque transversal, multisectorial y descentralizado, y con una 9 real capacidad de fiscalización y sanción."
      ],
      logros: [
        "Salud: Se logró el nombramiento del personal CAS en el sector salud.",
        "Justicia: Se homologó la bonificación para los fiscales y se incluyó la criminalidad sistemática en el Código Penal.",
        "Protección social: Se impulsó la protección de los niños a través del diálogo sobre la crianza compartida.",
        "Cultura: Se apoyó la creación de una universidad artística en Ucayali."
      ],
      sitioWeb: "https://www.facebook.com/FrenteAmplioPeOficial/?locale=es_LA",
      miembros: "35.000+",
      congresistas: 1,
      presencia: "Lima, Cusco, Cajamarca y Puno"
    },
    {
      id: 11,
      nombre: "Alianza Popular Revolucionaria Americana",
      siglas: "APRA",
      color: "#DC143C",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/APRA_Peru_logo.svg",
      ideologia: "Derecha",
      fundacion: "1924",
      fundador: "Víctor Raúl Haya de la Torre",
      lider: "Víctor Raúl Haya de la Torre",
      slogan: "El APRA puede porque el APRA sabe",
      descripcion: "Originalmente concebido como un frente antiimperialista continental, se transformó en el Partido Aprista Peruano, uno de los partidos más importantes en la historia del Perú. El APRA se distinguió por ser un partido de masas moderno, su influencia a nivel latinoamericano y su evolución ideológica a lo largo del tiempo. ",
      propuestas: [
        "Formación policial: Impulsar la formación de 20,000 nuevos policías.",
        "Beneficios penitenciarios: Reducir los beneficios penitenciarios y eliminarlos para reincidentes. ",
        "Programas sociales: Duplicar la cobertura de programas como Cuna Más y Haku Wiñay.",
        "Alimentos: Mejorar la calidad de los alimentos en los programas sociales y promover el consumo de productos locales nutritivos."
      ],
      logros: [
        "Enfoque económico: Se realizó un giro hacia políticas económicamente ortodoxas y conservadoras, abandonando la retórica socialista de años anteriores para fortalecer la inversión privada y construir una coalición parlamentaria.",
        "Contexto favorable: El gobierno se benefició de un periodo de alto crecimiento económico en el país, lo que reforzó su orientación conservadora.",
        "Movilización obrera: El partido logró agrupar a una parte importante del incipiente proletariado industrial de Lima, especialmente a los obreros textiles, que se convirtieron en su principal base de apoyo inicial.",
        "Organización política: El APRA se fundó como una organización política que buscaba representar a los trabajadores manuales e intelectuales del Perú. "
      ],
      sitioWeb: "https://apraperu.org/",
      miembros: "	50.000+",
      congresistas: 1,
      presencia: "Lamabayeque y La Libertad"
    }
  ];

  const partidosFiltrados = partidos.filter((partido) => {
    const coincideBusqueda = 
      partido.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partido.siglas.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partido.ideologia.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partido.lider.toLowerCase().includes(searchTerm.toLowerCase());
    
    const coincideIdeologia = 
      filtroIdeologia === "Todos" || partido.ideologia === filtroIdeologia;
    
    return coincideBusqueda && coincideIdeologia;
  });

  const ideologias = ["Todos", ...new Set(partidos.map(p => p.ideologia))];

  const togglePartido = (id) => {
    setPartidoExpandido(partidoExpandido === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section Mejorado */}
      <section className="relative bg-gradient-to-br from-[#E31E24] via-[#C41E3A] to-[#8B0000] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full mb-8 border border-white/30">
              <Users className="w-5 h-5" />
              <span className="font-bold text-lg">Elecciones Generales 2026</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Partidos Políticos
              <span className="block text-5xl md:text-6xl mt-2 text-red-100">del Perú</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-10 leading-relaxed">
              Conoce a fondo las organizaciones políticas, sus propuestas, historia y representantes.
              <strong className="block mt-2 text-white">Vota informado, vota consciente.</strong>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-base">
              <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <BookOpen className="w-5 h-5" />
                <span className="font-bold">{partidos.length} Partidos Inscritos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <Award className="w-5 h-5" />
                <span className="font-bold">130 Congresistas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/25 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">Actualizado 2026</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,64 C360,96 720,96 1080,64 C1440,32 1440,120 1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Filtros Mejorados */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, siglas, líder o ideología..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-12 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-2xl border-2 border-gray-200 hover:border-[#E31E24] transition-all">
              <Filter className="w-6 h-6 text-[#E31E24]" />
              <select
                value={filtroIdeologia}
                onChange={(e) => setFiltroIdeologia(e.target.value)}
                className="bg-transparent font-bold text-gray-700 focus:outline-none cursor-pointer text-lg"
              >
                {ideologias.map((ideologia) => (
                  <option key={ideologia} value={ideologia}>
                    {ideologia}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-gray-600">
              Mostrando <span className="font-bold text-[#E31E24] text-lg">{partidosFiltrados.length}</span> de {partidos.length} partidos
            </span>
            {searchTerm || filtroIdeologia !== "Todos" ? (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFiltroIdeologia("Todos");
                }}
                className="text-[#E31E24] font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Lista de Partidos Mejorada */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {partidosFiltrados.map((partido) => (
            <div
              key={partido.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Banda lateral */}
                <div
                  className="w-full lg:w-3 bg-gradient-to-b"
                  style={{
                    background: `linear-gradient(to bottom, ${partido.color}, ${partido.color}AA)`,
                  }}
                />

                {/* Logo Mejorado */}
                <div className="flex items-center justify-center p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
                  <div
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 bg-white p-4"
                    style={{ borderColor: partido.color, borderWidth: '3px' }}
                  >
                    <img 
                      src={partido.logoUrl} 
                      alt={`Logo ${partido.nombre}`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-6xl">${partido.siglas}</span>`;
                      }}
                    />
                  </div>
                </div>

                {/* Contenido Principal */}
                <div className="flex-1 p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 group-hover:text-[#E31E24] transition-colors">
                          {partido.nombre}
                        </h3>
                        <span
                          className="px-4 py-2 rounded-full text-base font-black text-white shadow-lg"
                          style={{ backgroundColor: partido.color }}
                        >
                          {partido.siglas}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full font-semibold">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: partido.color }}></span>
                          {partido.ideologia}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-[#E31E24]" />
                          Fundado en {partido.fundacion}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-[#E31E24]" />
                          {partido.miembros} afiliados
                        </span>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-xl border border-blue-200 mb-4">
                        <p className="text-sm text-gray-700">
                          <strong className="text-blue-900">Líder actual:</strong> {partido.lider} • 
                          <strong className="text-blue-900 ml-2">Fundador:</strong> {partido.fundador}
                        </p>
                      </div>

                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {partido.descripcion}
                      </p>

                      {/* Estadísticas */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 px-6 py-3 rounded-xl border border-red-200">
                          <p className="text-xs text-red-600 font-bold mb-1">Congresistas</p>
                          <p className="text-2xl font-black text-red-700">{partido.congresistas}</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 px-6 py-3 rounded-xl border border-green-200 flex-1">
                          <p className="text-xs text-green-600 font-bold mb-1 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            Presencia Regional
                          </p>
                          <p className="text-sm font-semibold text-green-700">{partido.presencia}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Propuestas Principales */}
                  <div className="mb-6">
                    <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#E31E24]" />
                      Propuestas Principales
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {partido.propuestas.slice(0, partidoExpandido === partido.id ? undefined : 3).map((propuesta, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-200 hover:border-[#E31E24] transition-all">
                          <span className="text-[#E31E24] font-bold text-lg">✓</span>
                          <span className="leading-relaxed">{propuesta}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Logros (si está expandido) */}
                  {partidoExpandido === partido.id && partido.logros && (
                    <div className="mb-6 bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
                      <h4 className="text-lg font-black text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-600" />
                        Logros Destacados
                      </h4>
                      <ul className="space-y-2">
                        {partido.logros.map((logro, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                            <span className="text-amber-600 font-bold">★</span>
                            <span>{logro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Botones de Acción */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={partido.sitioWeb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E31E24] to-[#C41E3A] text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visitar sitio web
                    </a>
                    
                    <button
                      onClick={() => togglePartido(partido.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-[#E31E24] hover:text-[#E31E24] transition-all"
                    >
                      <Eye className="w-5 h-5" />
                      {partidoExpandido === partido.id ? 'Ver menos' : 'Ver más detalles'}
                      <ChevronRight className={`w-5 h-5 transition-transform ${partidoExpandido === partido.id ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Slogan */}
                  <div className="mt-6 text-center lg:text-left">
                    <p className="text-sm italic text-gray-500">
                      <span className="font-semibold" style={{ color: partido.color }}>"</span>
                      {partido.slogan}
                      <span className="font-semibold" style={{ color: partido.color }}>"</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

                    {/* Sin resultados */}
                    {partidosFiltrados.length === 0 && (
                      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center">
                        <p className="text-gray-600">No se encontraron partidos que coincidan con tus criterios.</p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            );
          }