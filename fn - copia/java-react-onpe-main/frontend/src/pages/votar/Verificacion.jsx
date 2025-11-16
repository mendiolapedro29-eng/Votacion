// src/pages/votar/Verificacion.jsx
import { motion } from "framer-motion";
import { Vote, Shield, AlertCircle, UserCheck } from "lucide-react";

export default function Verificacion({
  fadeUp,
  dni,
  setDni,
  error,
  setError,
  captchaCode,
  setCaptchaCode,
  captchaInput,
  setCaptchaInput,
  generateCaptcha,
  verificarDNI,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20 }}
      variants={fadeUp}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
    >
      {/* Header estilo ONPE */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
            <Vote className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">
              OFICINA NACIONAL DE PROCESOS ELECTORALES
            </h2>
            <p className="text-sm text-blue-100">
              Sistema Electoral Digital Nacional
            </p>
          </div>
        </div>
      </div>

      {/* Contenido del formulario */}
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
            CONSULTE SU IDENTIDAD PARA VOTAR
          </h3>
          <p className="text-gray-600 text-sm">
            Ingrese su Documento Nacional de Identidad (DNI) para verificar su
            identidad y continuar con el proceso de votación
          </p>
        </div>

        {/* Formulario estilo ONPE */}
        <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
          <div className="space-y-6">
            {/* Campo DNI */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-[#1E3A8A]">&gt;</span>
                Ingrese su DNI:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={dni}
                  onChange={(e) => {
                    const newDni = e.target.value.replace(/\D/g, "").slice(0, 8);
                    setDni(newDni);
                    setError("");

                    // Generar captcha automáticamente cuando el DNI tenga 8 dígitos
                    if (newDni.length === 8) {
                      generateCaptcha();
                    } else {
                      // Limpiar captcha si el DNI tiene menos de 8 dígitos
                      setCaptchaCode("");
                      setCaptchaInput("");
                    }
                  }}
                  placeholder="Ejemplo: 12345678"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none text-lg font-medium bg-white"
                  onKeyPress={(e) => e.key === "Enter" && verificarDNI()}
                  maxLength={8}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <UserCheck className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-6">
                Debe contener 8 dígitos numéricos
              </p>
            </div>

            {/* Campo Captcha - Solo se muestra cuando hay código generado */}
            {captchaCode && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-[#1E3A8A]">&gt;</span>
                  Ingrese el código de verificación:
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(
                        e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "")
                      );
                      setError("");
                    }}
                    placeholder="Código de la imagen"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] outline-none text-lg font-bold bg-white uppercase tracking-widest"
                    maxLength={4}
                    onKeyPress={(e) => e.key === "Enter" && verificarDNI()}
                  />
                  {/* Captcha visual */}
                  <div className="relative bg-white border-2 border-gray-300 rounded-lg px-4 py-3 flex items-center justify-center min-w-[120px] h-[52px] overflow-hidden">
                    <span className="text-2xl font-bold text-gray-800 tracking-wider relative z-10">
                      {captchaCode}
                    </span>
                    {/* Líneas diagonales */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 transform rotate-12"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-400 transform -rotate-12"></div>
                    </div>
                    {/* Ruido de fondo */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-gray-600 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-6">
                  Ingrese los caracteres que aparecen en la imagen
                </p>
              </div>
            )}

            {/* Mensaje de error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-700 bg-red-50 border-2 border-red-200 p-4 rounded-lg"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{error}</span>
              </motion.div>
            )}

            {/* Botón de consulta */}
            <div className="pt-4">
              <button
                onClick={verificarDNI}
                disabled={
                  !dni ||
                  dni.length < 8 ||
                  !captchaCode ||
                  !captchaInput ||
                  captchaInput.length < 4
                }
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#2563EB] text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Shield className="w-5 h-5" />
                CONSULTAR
              </button>
            </div>
          </div>
        </div>

        {/* Información de seguridad */}
        <div className="mt-6 bg-blue-50 border-l-4 border-[#2563EB] rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-700">
              <p className="font-semibold text-[#1E3A8A] mb-1">
                Su información está protegida
              </p>
              <p>
                Utilizamos encriptación de extremo a extremo para proteger sus
                datos personales durante todo el proceso electoral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
