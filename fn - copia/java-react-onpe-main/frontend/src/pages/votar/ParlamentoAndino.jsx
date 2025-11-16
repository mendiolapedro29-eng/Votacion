// src/pages/votar/ParlamentoAndino.jsx
// --- COMPONENTE PARA PARLAMENTO ANDINO ---

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  Eye,
  User,
  List,
  Users,
  CheckCircle,
  Globe,
} from "lucide-react";
import { useState } from "react";

// --- Importamos los MISMOS logos para consistencia ---
import logoRenovacion from "../../assets/logos/renovacion_popular.png";
import logoFuerza from "../../assets/logos/fuerza_popular.png";
import logoAPP from "../../assets/logos/app.png";
import logoPaisTodos from "../../assets/logos/pais_para_todos.png";
import logoAhoraNacion from "../../assets/logos/ahora_nacion.png";
import logoAvanza from "../../assets/logos/avanza_pais.png";
import logoPrimeroGente from "../../assets/logos/primero_la_gente.png";

// --- LISTA FICTICIA DE CANDIDATOS AL PARLAMENTO ANDINO ---
const mockParlamentoAndino = [
  {
    id: 201,
    nombre: "Roberto Silva Méndez",
    foto: "",
    partido: "Renovación Popular",
    logoPartido: logoRenovacion,
    numero: "1",
    propuestas: [
      "Fortalecimiento de la integración comercial andina",
      "Armonización de políticas migratorias en la región",
      "Defensa de la soberanía nacional en organismos internacionales",
    ],
    biografia:
      "Experto en relaciones internacionales con maestría en integración regional. Ha representado al Perú en foros multilaterales y conoce profundamente la dinámica del Parlamento Andino.",
  },
  {
    id: 202,
    nombre: "María Elena Castillo",
    foto: "",
    partido: "Fuerza Popular",
    logoPartido: logoFuerza,
    numero: "1",
    propuestas: [
      "Promoción de inversiones intra-comunitarias",
      "Simplificación de trámites aduaneros",
      "Protección de productos peruanos en mercados andinos",
    ],
    biografia:
      "Economista especializada en comercio exterior. Fue directora de PROMPERÚ y tiene amplia experiencia en negociaciones comerciales internacionales.",
  },
  {
    id: 203,
    nombre: "Jorge Andrade Ríos",
    foto: "",
    partido: "Alianza Para el Progreso (APP)",
    logoPartido: logoAPP,
    numero: "1",
    propuestas: [
      "Desarrollo de infraestructura fronteriza",
      "Programas de intercambio educativo andino",
      "Fomento al turismo intra-comunitario",
    ],
    biografia:
      "Ex-ministro de Transportes y Comunicaciones. Su experiencia en proyectos binacionales lo convierte en candidato ideal para representar los intereses peruanos en la comunidad andina.",
  },
  {
    id: 204,
    nombre: "Lucía Fernández Ortega",
    foto: "",
    partido: "Avanza País",
    logoPartido: logoAvanza,
    numero: "1",
    propuestas: [
      "Digitalización de procesos comunitarios",
      "Promoción de startups tecnológicas andinas",
      "Ciberseguridad regional coordinada",
    ],
    biografia:
      "Ingeniera de sistemas con especialización en políticas tecnológicas. Fundadora de varias empresas tech y consultora en digitalización gubernamental.",
  },
  {
    id: 205,
    nombre: "Diego Armando Mendoza",
    foto: "",
    partido: "Renovación Popular",
    logoPartido: logoRenovacion,
    numero: "2",
    propuestas: [
      "Combate al narcotráfico transfronterizo",
      "Cooperación policial andina",
      "Protección de fronteras contra amenazas externas",
    ],
    biografia:
      "Ex-general de la Policía Nacional con experiencia en inteligencia y seguridad internacional. Ha trabajado en operativos binacionales contra el crimen organizado.",
  },
  {
    id: 206,
    nombre: "Sandra Milagros Torres",
    foto: "",
    partido: "Fuerza Popular",
    logoPartido: logoFuerza,
    numero: "2",
    propuestas: [
      "Defensa de la propiedad intelectual peruana",
      "Protección de denominaciones de origen",
      "Promoción del pisco y otros productos bandera",
    ],
    biografia:
      "Abogada especialista en propiedad intelectual y derecho comercial internacional. Ha representado a empresas peruanas en disputas comerciales.",
  },
  {
    id: 207,
    nombre: "Pablo Escobar Durán",
    foto: "",
    partido: "Ahora Nación",
    logoPartido: logoAhoraNacion,
    numero: "1",
    propuestas: [
      "Protección ambiental regional",
      "Desarrollo sostenible andino",
      "Cooperación en gestión de recursos hídricos",
    ],
    biografia:
      "Ambientalista y doctor en ciencias políticas. Director de ONG dedicada a la conservación de ecosistemas andinos y autor de varios libros sobre desarrollo sostenible.",
  },
  {
    id: 208,
    nombre: "Carmen Rosa Velarde",
    foto: "",
    partido: "País para Todos",
    logoPartido: logoPaisTodos,
    numero: "1",
    propuestas: [
      "Derechos humanos en la comunidad andina",
      "Protección de migrantes intra-regionales",
      "Igualdad de género en políticas comunitarias",
    ],
    biografia:
      "Defensora de derechos humanos con experiencia en organismos internacionales. Ha trabajado con ACNUR y otras agencias de la ONU en protección de poblaciones vulnerables.",
  },
  {
    id: 209,
    nombre: "Alonso Gutiérrez Paredes",
    foto: "",
    partido: "Primero la Gente",
    logoPartido: logoPrimeroGente,
    numero: "1",
    propuestas: [
      "Salud pública regional integrada",
      "Acceso a medicamentos a precios justos",
      "Cooperación en emergencias sanitarias",
    ],
    biografia:
      "Médico epidemiólogo con experiencia en salud pública internacional. Participó en la coordinación regional durante la pandemia del COVID-19.",
  },
];

export default function ParlamentoAndino({
  categoriaActual,
  onConfirmarVoto,
  onVolverCategorias,
}) {
  // --- Usamos nuestra lista mock ---
  const candidatos = mockParlamentoAndino;
  
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
      key="paso3-parlamento-andino"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
      variants={fadeUp}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 border border-gray-100 min-h-screen"
    >
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${categoriaActual.color} flex items-center justify-center text-xl`}>
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              {categoriaActual.titulo}
            </h2>
            <p className="text-gray-700 text-base font-semibold">
              Representación Peruana en la Comunidad Andina
            </p>
          </div>
        </div>
        <p className="text-gray-800 text-lg font-medium mt-4">
          Elige a tus representantes ante el Parlamento Andino
        </p>
        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-sm text-yellow-800 font-medium">
            <strong>Nota:</strong> El Parlamento Andino representa al Perú en la Comunidad Andina de Naciones (Bolivia, Colombia, Ecuador, Perú). Sus funciones incluyen armonización legislativa, integración regional y defensa de los intereses peruanos.
          </p>
        </div>
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
                    ? "border-purple-500 ring-4 ring-purple-200 shadow-purple-200"
                    : "border-2 border-gray-300 hover:border-purple-400"
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
              
              {/* --- NÚMERO DEL CANDIDATO --- */}
              <div className="absolute top-2 left-2 z-10 bg-black/50 text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
                {candidato.numero}
              </div>

              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden h-48">
                <img
                  src={candidato.foto}
                  alt={candidato.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = `https://i.pravatar.cc/300?u=${candidato.id + 100}`;
                  }}
                />
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-3">
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
                    <p className="text-base font-bold text-purple-600 uppercase tracking-wider">
                      {candidato.partido}
                    </p>
                  </div>
                </div>
               
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
                    className="flex items-center justify-center gap-2 w-full bg-purple-500 text-white font-bold py-3 px-5 rounded-lg hover:bg-purple-600 transition-colors text-base"
                  >
                    <Eye className="w-5 h-5" />
                    Ver Detalles
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
          className="text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-2 mx-auto font-semibold text-base"
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
                  onError={(e) => {
                    e.target.src = `https://i.pravatar.cc/300?u=${candidatoModal.id + 100}`;
                  }}
                />
              </div>

              <div className="w-full md:w-2/3 flex flex-col overflow-y-auto">
                <div className="px-8 pt-8 pb-4 border-b border-gray-200 bg-gray-50/50">
                  <h2 className="text-4xl font-bold text-purple-800">
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
                            ? "bg-white text-purple-700 shadow-sm"
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
                            ? "bg-white text-purple-700 shadow-sm"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      <List className="w-5 h-5" /> Propuestas
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
                        {candidatoModal.biografia}
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