import { motion } from "framer-motion";
import { Shield, BookOpen, CheckCircle2, FileText } from "lucide-react";

export default function Informacion() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const informacionElectoral = [
    {
      titulo: "Sistema Electoral Peruano",
      descripcion:
        "El Perú cuenta con tres organismos electorales autónomos: el Jurado Nacional de Elecciones (JNE), la Oficina Nacional de Procesos Electorales (ONPE) y el Registro Nacional de Identificación y Estado Civil (RENIEC).",
    },
    {
      titulo: "Tipos de Elecciones",
      descripcion:
        "En el Perú se realizan elecciones presidenciales cada 5 años, elecciones congresales, elecciones regionales y municipales. El voto es obligatorio para mayores de 18 años hasta los 70 años.",
    },
    {
      titulo: "Derecho al Voto",
      descripcion:
        "Todos los ciudadanos peruanos mayores de 18 años tienen derecho al voto. Es obligatorio para menores de 70 años y facultativo para mayores de 70 años y peruanos residentes en el extranjero.",
    },
    {
      titulo: "Proceso Electoral",
      descripcion:
        "El proceso incluye inscripción de candidatos, campaña electoral, jornada de votación, escrutinio de votos y proclamación de resultados. Todo bajo la supervisión de los organismos electorales.",
    },
  ];

  const enlacesUtiles = [
    {
      titulo: "Trámite de DNI",
      descripcion: "Solicita, renueva o actualiza tu Documento Nacional de Identidad",
      enlace: "https://apps.reniec.gob.pe/renovacionDni/",
      icono: "🆔",
    },
    {
      titulo: "ONPE - Elecciones",
      descripcion: "Consulta información sobre procesos electorales y resultados",
      enlace: "https://www.onpe.gob.pe/",
      icono: "🗳️",
    },
    {
      titulo: "JNE - Jurado Nacional",
      descripcion: "Información sobre resoluciones y fiscalización electoral",
      enlace: "https://portal.jne.gob.pe/portal/",
      icono: "⚖️",
    },
    {
      titulo: "Noticias Perú",
      descripcion: "Mantente informado sobre las últimas noticias del país",
      enlace: "https://elperuano.pe/",
      icono: "📰",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
            Información Electoral del Perú
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conoce el sistema electoral peruano, tus derechos como ciudadano y accede a trámites importantes.
          </p>
        </motion.div>

        {/* Información Electoral */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-12"
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mr-4">
              <CheckCircle2 className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold">Sistema Electoral Peruano</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {informacionElectoral.map((info, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-[#1E3A8A] mb-2">{info.titulo}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{info.descripcion}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enlaces Útiles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-12"
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-10 h-10 rounded-md bg-green-50 flex items-center justify-center mr-4">
              <BookOpen className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-lg font-semibold">Enlaces Útiles</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enlacesUtiles.map((enlace, index) => (
              <a
                key={index}
                href={enlace.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer group"
              >
                <div className="flex items-start">
                  <span className="text-3xl mr-4">{enlace.icono}</span>
                  <div>
                    <h4 className="font-semibold text-[#1E3A8A] mb-2 group-hover:text-blue-600">
                      {enlace.titulo}
                    </h4>
                    <p className="text-gray-600 text-sm">{enlace.descripcion}</p>
                    <span className="text-blue-500 text-xs mt-2 inline-block group-hover:underline">
                      Visitar sitio →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Organismos Electorales */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-xl border border-gray-100 shadow-sm p-8"
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center mr-4">
              <Shield className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold">Organismos Electorales del Perú</h3>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-[#1E3A8A] mb-2">JNE - Jurado Nacional de Elecciones</h4>
              <p className="text-gray-700 text-sm">
                Máximo órgano de administración de justicia electoral. Fiscaliza la legalidad del ejercicio
                del sufragio, proclama a los candidatos elegidos y resuelve controversias electorales.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-[#1E3A8A] mb-2">ONPE - Oficina Nacional de Procesos Electorales</h4>
              <p className="text-gray-700 text-sm">
                Organiza y ejecuta los procesos electorales, de referéndum y otras consultas populares.
                Responsable del diseño de cédulas, entrega de material electoral y difusión de resultados.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-[#1E3A8A] mb-2">RENIEC - Registro Nacional de Identificación</h4>
              <p className="text-gray-700 text-sm">
                Mantiene el registro de identificación de los peruanos, elabora el padrón electoral y
                emite los documentos de identidad. Garantiza la confiabilidad del registro electoral.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}