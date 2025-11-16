// src/pages/votar/Candidatos.jsx

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  Eye,
  User,
  List,
  Users,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

// Importamos las fotos y logos
import fotoRLA from "../../assets/images/rafael_lopez_aliaga.jpg";
import fotoKeiko from "../../assets/images/keiko_fujimori.jpg";
import fotoAcuna from "../../assets/images/cesar_acuna.jpg";
import fotoAlvarez from "../../assets/images/carlos_alvarez.jpg";
import fotoLopezChau from "../../assets/images/alfonso_lopez_chau.jpg";
import fotoButters from "../../assets/images/phillip_butters.jpg";
import fotoPerezTello from "../../assets/images/marisol_perez_tello.jpg";

import logoRenovacion from "../../assets/logos/renovacion_popular.png";
import logoFuerza from "../../assets/logos/fuerza_popular.png";
import logoAPP from "../../assets/logos/app.png";
import logoPaisTodos from "../../assets/logos/pais_para_todos.png";
import logoAhoraNacion from "../../assets/logos/ahora_nacion.png";
import logoAvanza from "../../assets/logos/avanza_pais.png";
import logoPrimeroGente from "../../assets/logos/primero_la_gente.png";


export default function Candidatos({
  categoriaActual,
  onConfirmarVoto,
  onVolverCategorias,
}) {
  
  // Lista de candidatos
  const candidatos = [
    {
      id: 1,
      numero: "01",
      nombre: "Rafael López Aliaga",
      foto: fotoRLA,
      partido: "Renovación Popular",
      logoPartido: logoRenovacion,
      vicepresidentes: [
        "Norma Yarrow (1ra VP)",
        "Jhon Iván Ramos Malpica (2da VP)",
      ],
      propuestas: [
        "Retorno a la Unicameralidad del Congreso",
        "Proyectos de desarrollo en Lima y costa",
        "Seguridad y orden público",
        "Lucha frontal contra la corrupción y delincuencia.",
        "Promoción de la inversión privada para generar empleo.",
      ],
      biografia:
        "Rafael López Aliaga es un empresario y político peruano, actual alcalde de Lima. Fundador del partido Renovación Popular, es conocido por sus posturas conservadoras en lo social y liberales en lo económico. Esta es su segunda postulación a la presidencia.",
    },
    {
      id: 2,
      numero: "02",
      nombre: "Keiko Fujimori",
      foto: fotoKeiko,
      partido: "Fuerza Popular",
      logoPartido: logoFuerza,
      vicepresidentes: [
        "Luis Galarreta Valerde (1ra VP)",
        "Miguel Torres Morales (2da VP)",
      ],
      propuestas: [
        "Continuidad institucional",
        "Orden y seguridad ciudadana",
        "Reactivación económica",
        "Reformas para fortalecer la lucha contra la delincuencia.",
        "Programas de apoyo a la pequeña y mediana empresa.",
      ],
      biografia:
        "Keiko Fujimori es una política peruana, lideresa de Fuerza Popular. Ha sido Congresista de la República y ha postulado a la presidencia en múltiples ocasiones, pasando a segunda vuelta en 2011, 2016 y 2021. Es hija del expresidente Alberto Fujimori.",
    },
    {
      id: 3,
      numero: "03",
      nombre: "César Acuña",
      foto: fotoAcuna,
      partido: "Alianza Para el Progreso (APP)",
      logoPartido: logoAPP,
      vicepresidentes: [
        "Alejandro Soto Reyes (1ra VP)",
        "Jessica Tumi Rivas (2da VP)",
      ],
      propuestas: [
        "Desarrollo regional y descentralización",
        "Inclusión social",
        "Combate a la corrupción",
      ],
      biografia:
        "César Acuña es un empresario y político, fundador de la Universidad César Vallejo y del partido Alianza para el Progreso. Ha sido Congresista y Gobernador Regional de La Libertad. Este es un nuevo intento por alcanzar la presidencia.",
    },
    {
      id: 4,
      numero: "04",
      nombre: "Carlos Álvarez",
      foto: fotoAlvarez,
      partido: "País para Todos",
      logoPartido: logoPaisTodos,
      vicepresidentes: ["Por confirmarse (1ra VP)", "Por confirmarse (2da VP)"],
      propuestas: [
        "Cambio y renovación política",
        "Propuestas innovadoras",
        "Representación del voto de protesta",
      ],
      biografia:
        "Conocido comediante e imitador, Carlos Álvarez incursiona en la política con su partido 'País para Todos'. Su plataforma se centra en la lucha contra la corrupción y la renovación de la clase política, buscando capitalizar el descontento ciudadano.",
    },
    {
      id: 6,
      numero: "06",
      nombre: "Alfonso López Chau",
      foto: fotoLopezChau,
      partido: "Ahora Nación",
      logoPartido: logoAhoraNacion,
      vicepresidentes: ["Por confirmarse (1ra VP)", "Por confirmarse (2da VP)"],
      propuestas: [
        "Educación científica y tecnológica",
        "Mecanismos democráticos participativos",
        "Desarrollo sostenible",
      ],
      biografia:
        "Alfonso López Chau es un académico y fue rector de la Universidad Nacional de Ingeniería (UNI). Su candidatura se enfoca en la educación, la ciencia y la tecnología como motores del desarrollo nacional, con un enfoque en la participación ciudadana.",
    },
    {
      id: 7,
      numero: "07",
      nombre: "Phillip Butters",
      foto: fotoButters,
      partido: "Avanza País",
      logoPartido: logoAvanza,
      vicepresidentes: ["Fernán Altuve (1ra VP)", "Karol Paredes (2da VP)"],
      propuestas: [
        "Cambio estructural del país",
        "Modernización de instituciones",
        "Oportunidades para todos",
      ],
      biografia:
        "Phillip Butters es un conocido comunicador y comentarista político. Postula con Avanza País, promoviendo ideas de libre mercado, mano dura contra la delincuencia y una reestructuración del estado. Es su primera incursión como candidato presidencial.",
    },
    {
      id: 8,
      numero: "08",
      nombre: "Marisol Pérez Tello",
      foto: fotoPerezTello,
      partido: "Primero la Gente",
      logoPartido: logoPrimeroGente,
      vicepresidentes: ["Raúl Molina (1ra VP)", "Manuel Ato (2da VP)"],
      propuestas: [
        "Perú seguro, justo e inclusivo",
        "Justicia efectiva",
        "Conexión territorial",
      ],
      biografia:
        "Marisol Pérez Tello es una abogada y política. Fue Ministra de Justicia y Derechos Humanos y Congresista. Lidera el partido 'Primero la Gente' con un enfoque en la reforma del sistema de justicia, la seguridad ciudadana y la inclusión social.",
    },
  ];

  // Estado local solo para la SELECCIÓN en esta pantalla
  const [votoSeleccionado, setVotoSeleccionado] = useState(null);
  const [candidatoModal, setCandidatoModal] = useState(null);
  const [tabActiva, setTabActiva] = useState("perfil");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const abrirModal = (candidato) => {
    setCandidatoModal(candidato);
    setTabActiva("perfil");
  };

  const cerrarModal = () => {
    setCandidatoModal(null);
  };
  
  // FUNCIÓN CORREGIDA - Asegura estructura consistente
  const handleConfirmar = () => {
    let candidatoObjeto;
    
    if (votoSeleccionado === 'nulo') {
      candidatoObjeto = { 
        id: 'nulo', 
        nombre: 'Voto Nulo / En Blanco',
        esNulo: true,  // ← PROPIEDAD AÑADIDA
        partido: 'Voto Nulo',
        numero: 'N/A'
      };
    } else {
      candidatoObjeto = candidatos.find(c => c.id === votoSeleccionado);
      if (candidatoObjeto) {
        candidatoObjeto.esNulo = false; // ← PROPIEDAD AÑADIDA
      }
    }

    if (candidatoObjeto) {
      onConfirmarVoto(candidatoObjeto);
    }
  };

  return (
    <motion.div
      key="paso3"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
      variants={fadeUp}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-gray-100 min-h-screen"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoriaActual.color} flex items-center justify-center text-xl`}>
            <categoriaActual.icono className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {categoriaActual.titulo}
            </h2>
            <p className="text-gray-700 text-base font-semibold">
              {categoriaActual.subtitulo}
            </p>
          </div>
        </div>
        <p className="text-gray-800 text-lg font-medium mt-4">
          Selecciona un candidato para marcar tu voto.
        </p>
      </div>

      {/* Grid de candidatos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {candidatos.map((candidato, index) => {
          const estaSeleccionado = candidato.id === votoSeleccionado;

          return (
            <motion.div
              key={candidato.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVotoSeleccionado(candidato.id)}
              className={`group bg-gradient-to-br rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl relative
                ${
                  estaSeleccionado
                    ? "border-blue-500 ring-4 ring-blue-200 shadow-blue-200"
                    : "border-2 border-gray-300 hover:border-blue-400"
                }
              `}
            >
              {estaSeleccionado && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-2 right-2 z-10"
                >
                  <CheckCircle
                    size={40}
                    className="text-white bg-green-500 rounded-full"
                    strokeWidth={3}
                  />
                </motion.div>
              )}

              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden h-48">
                <img
                  src={candidato.foto}
                  alt={candidato.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = `https://i.pravatar.cc/150?u=${candidato.id}`;
                  }}
                />
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                <p className="text-white text-lg font-bold text-center leading-tight">
                  {candidato.nombre}
                </p>
              </div>

              <div className="p-5 space-y-4 bg-white">
                <div className="text-center border-b border-gray-200 pb-3">
                  <div className="flex items-center justify-center gap-2 h-6">
                    <img
                      src={candidato.logoPartido}
                      alt={`Logo ${candidato.partido}`}
                      className="h-full object-contain"
                    />
                    <p className="text-base font-bold text-blue-600 uppercase tracking-wider">
                      {candidato.partido}
                    </p>
                  </div>
                </div>
                {candidato.vicepresidentes && (
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-sm font-bold text-gray-700 mb-1 uppercase">
                      VICEPRESIDENTES:
                    </p>
                    <div className="space-y-1">
                      {candidato.vicepresidentes.map((vp, i) => (
                        <p
                          key={i}
                          className="text-base text-gray-800 leading-snug pl-2"
                        >
                          • {vp}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-bold text-gray-700 mb-1 uppercase">
                    PROPUESTAS CLAVE:
                  </p>
                  <div className="space-y-1">
                    {candidato.propuestas
                      .slice(0, 2)
                      .map((propuesta, i) => (
                        <p
                          key={i}
                          className="text-base text-gray-800 leading-snug pl-2"
                        >
                          • {propuesta}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirModal(candidato);
                    }}
                    className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white font-bold py-3 px-5 rounded-lg hover:bg-blue-600 transition-colors text-base"
                  >
                    <Eye className="w-5 h-5" />
                    Ver Detalles
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          );
        })}

        {/* Tarjeta de Voto Nulo */}
        {(() => {
          const nuloSeleccionado = votoSeleccionado === "nulo";
          return (
            <motion.div
              onClick={() => setVotoSeleccionado("nulo")}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              className={`group bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-2xl relative
                ${
                  nuloSeleccionado
                    ? "border-orange-600 ring-4 ring-orange-200 shadow-orange-200"
                    : "border-2 border-dashed border-orange-400 hover:border-orange-600"
                }
              `}
            >
              {nuloSeleccionado && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-2 right-2 z-10"
                >
                  <CheckCircle
                    size={40}
                    className="text-white bg-green-500 rounded-full"
                    strokeWidth={3}
                  />
                </motion.div>
              )}

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 h-48 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  ∅
                </span>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3">
                <p className="text-white text-lg font-bold text-center leading-tight">
                  Voto Nulo / En Blanco
                </p>
              </div>
              <div className="p-5 space-y-4 bg-white">
                <div className="text-center border-b border-orange-200 pb-3">
                  <p className="text-base font-bold text-orange-600 uppercase tracking-wider">
                    No me siento representado
                  </p>
                </div>
                <div className="border-t border-orange-200 pt-3">
                  <p className="text-sm font-bold text-gray-700 mb-1 uppercase">
                    ¿QUÉ SIGNIFICA?
                  </p>
                  <div className="space-y-1">
                    <p className="text-base text-gray-800 leading-snug pl-2">
                      • Expresas tu derecho sin elegir
                    </p>
                    <p className="text-base text-gray-800 leading-snug pl-2">
                      • Manifiestas descontento
                    </p>
                    <p className="text-base text-gray-800 leading-snug pl-2">
                      • Tu voto será contabilizado
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          );
        })()}
      </div>
      
      {/* Botones de navegación */}
      <div className="flex justify-between items-center mt-12">
        <button 
          onClick={onVolverCategorias}
          className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2 mx-auto font-semibold text-base"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a Categorías
        </button>

        <button
          disabled={!votoSeleccionado}
          onClick={handleConfirmar}
          className="bg-green-600 text-white font-bold text-xl py-4 px-12 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-600"
        >
          {votoSeleccionado
            ? "Confirmar Voto y Continuar"
            : "Selecciona un candidato para votar"}
        </button>
      </div>


      {/* MODAL */}
      <AnimatePresence>
        {candidatoModal && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={cerrarModal}
          />
        )}

        {candidatoModal && (
          <motion.div
            key="modal-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={cerrarModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-10"
              >
                <X size={28} />
              </button>

              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={candidatoModal.foto}
                  alt={candidatoModal.nombre}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-2/3 flex flex-col overflow-y-auto">
                <div className="px-8 pt-8 pb-4 border-b border-gray-200 bg-gray-50/50">
                  <h2 className="text-4xl font-bold text-blue-800">
                    {candidatoModal.nombre}
                  </h2>
                  <div className="flex items-center gap-3 mt-2 mb-6">
                    <img
                      src={candidatoModal.logoPartido}
                      alt={`Logo ${candidatoModal.partido}`}
                      className="w-10 h-10 object-contain"
                    />
                    <p className="text-xl font-semibold text-gray-700">
                      {candidatoModal.partido}
                    </p>
                  </div>

                  <nav className="flex gap-2">
                    <button
                      onClick={() => setTabActiva("perfil")}
                      className={`flex items-center gap-2 py-3 px-6 rounded-t-lg text-base font-semibold transition-colors
                        ${
                          tabActiva === "perfil"
                            ? "bg-white text-blue-700 shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      <User className="w-5 h-5" /> Perfil
                    </button>
                    <button
                      onClick={() => setTabActiva("propuestas")}
                      className={`flex items-center gap-2 py-3 px-6 rounded-t-lg text-base font-semibold transition-colors
                        ${
                          tabActiva === "propuestas"
                            ? "bg-white text-blue-700 shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      <List className="w-5 h-5" /> Propuestas
                    </button>
                    <button
                      onClick={() => setTabActiva("equipo")}
                      className={`flex items-center gap-2 py-3 px-6 rounded-t-lg text-base font-semibold transition-colors
                        ${
                          tabActiva === "equipo"
                            ? "bg-white text-blue-700 shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      <Users className="w-5 h-5" /> Equipo
                    </button>
                  </nav>
                </div>

                <div className="p-8">
                  {tabActiva === "perfil" && (
                    <motion.div
                      key="perfil"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Biografía
                      </h3>
                      <p className="text-lg text-gray-800 leading-relaxed">
                        {candidatoModal.biografia ||
                          "Información biográfica no disponible."}
                      </p>
                    </motion.div>
                  )}

                  {tabActiva === "propuestas" && (
                    <motion.div
                      key="propuestas"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Propuestas Clave
                      </h3>
                      <ul className="list-disc list-inside text-lg text-gray-800 space-y-3">
                        {candidatoModal.propuestas.map(
                          (prop, i) => (
                            <li key={i}>{prop}</li>
                          )
                        )}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <a
                          href="#"
                          className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-base"
                        >
                          Ver Plan de Gobierno Completo
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {tabActiva === "equipo" && (
                    <motion.div
                      key="equipo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Plancha Presidencial
                      </h3>
                      <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                        {candidatoModal.vicepresidentes.map(
                          (vp, i) => (
                            <li key={i}>{vp}</li>
                          )
                        )}
                      </ul>
                      <p className="text-base text-gray-600 mt-4">
                        (Aquí se podría agregar más información sobre el
                        equipo técnico...)
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}