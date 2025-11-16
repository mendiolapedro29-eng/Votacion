// src/pages/votar/Final.jsx - VERSIÓN CORREGIDA Y SEGURA
import { motion } from "framer-motion";
import { CheckCircle2, Shield } from "lucide-react";

export default function Final({
  fadeUp,
  votosRealizados = {},     // Valor por defecto
  categoriasVotacion = [],  // Valor por defecto
  onReiniciar,
}) {
  
  // Verificación de seguridad
  if (!categoriasVotacion || categoriasVotacion.length === 0) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center"
      >
        <div className="text-red-600">
          <h2 className="text-2xl font-bold mb-4">Error en los datos</h2>
          <p>No se pudieron cargar las categorías de votación.</p>
          <button
            onClick={onReiniciar}
            className="mt-4 bg-[#2563EB] text-white px-6 py-2 rounded-lg"
          >
            Reiniciar
          </button>
        </div>
      </motion.div>
    );
  }

  // Función para determinar si es voto nulo
  const esVotoNulo = (candidato) => {
    if (!candidato) return false;
    return candidato.esNulo === true || 
           candidato.id === 'nulo' || 
           candidato.nombre === 'Voto Nulo / En Blanco';
  };

  // Función para obtener el texto a mostrar para cada voto
  const obtenerTextoVoto = (candidato) => {
    if (!candidato) return { texto: "No seleccionado", esNulo: false };
    
    if (esVotoNulo(candidato)) {
      return { texto: "Voto nulo", esNulo: true };
    }
    
    // Para presidentes - mostrar partido
    if (candidato.vicepresidentes) {
      return { texto: candidato.partido || "Sin partido", esNulo: false };
    }
    
    // Para otros - mostrar número de lista si existe
    return { 
      texto: candidato.numero ? `Lista ${candidato.numero}` : (candidato.partido || "Candidato"), 
      esNulo: false 
    };
  };

  return (
    <motion.div
      key="paso5"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={fadeUp}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center"
    >
      {/* Icono grande de éxito */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 className="w-16 h-16 text-green-600" />
      </motion.div>

      {/* Mensaje principal */}
      <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">
        ¡Votación completada exitosamente!
      </h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Has completado {Object.keys(votosRealizados).length} de {categoriasVotacion.length} categorías de forma segura.
      </p>

      {/* Resumen de votos */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6 max-w-md mx-auto">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          Resumen de tus votos:
        </p>
        <div className="space-y-2 text-left">
          {Object.entries(votosRealizados).map(([categoriaId, candidato]) => {
            const categoria = categoriasVotacion.find(
              (c) => c.id === categoriaId
            );
            const infoVoto = obtenerTextoVoto(candidato);
            
            return (
              <div
                key={categoriaId}
                className={`flex items-center justify-between p-3 rounded ${
                  infoVoto.esNulo
                    ? "bg-orange-50 border border-orange-200"
                    : "bg-white border border-gray-200"
                }`}
              >
                <span className="text-sm font-medium text-gray-700">
                  {categoria?.titulo || "Categoría desconocida"}
                </span>

                {infoVoto.esNulo ? (
                  <span className="text-sm font-semibold text-orange-600 flex items-center gap-1">
                    <span className="text-lg">∅</span>
                    Voto nulo
                  </span>
                ) : (
                  <span className="text-sm font-semibold text-[#2563EB]">
                    {infoVoto.texto}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Info de seguridad */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 max-w-md mx-auto">
        <div className="flex items-center gap-3 justify-center mb-2">
          <Shield className="w-6 h-6 text-[#2563EB]" />
          <p className="font-semibold text-[#1E3A8A]">
            Tu voto está protegido
          </p>
        </div>
        <p className="text-sm text-gray-700">
          Recibirás un comprobante digital por correo electrónico en los
          próximos minutos.
        </p>
      </div>

      {/* Botón Finalizar / Reiniciar */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={onReiniciar}
          className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
        >
          Finalizar Proceso
        </button>
      </div>
    </motion.div>
  );
}