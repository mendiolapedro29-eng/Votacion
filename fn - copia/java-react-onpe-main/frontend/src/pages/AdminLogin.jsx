import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  User,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function AdminLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Credenciales de ejemplo - en producción esto vendría de una API segura
  const adminCredentials = {  
    usuario: "admin",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulación de autenticación
    setTimeout(() => {
      if (
        usuario === adminCredentials.usuario &&
        password === adminCredentials.password
      ) {
        // Guardar sesión en localStorage
        localStorage.setItem("adminAuth", "true");
        localStorage.setItem("adminUser", usuario);
        navigate("/admin"); // Navega al panel del admin
      } else {
        setError("Usuario o contraseña incorrectos");
        setLoading(false);
      }
    }, 1000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E40AF] flex items-center justify-center px-6 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="w-full max-w-lg"
      >
        {/* Tarjeta principal con diseño moderno */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Voto Perú</h1>
            <p className="text-blue-100 text-lg font-medium">Tu voto, tu voz</p>
          </div>

          {/* Separador */}
          <div className="h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Contenido del formulario */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Acceso Administrativo
              </h2>
              <p className="text-blue-100">
                Ingresa tus credenciales para acceder al panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/20 border border-red-400/30 text-red-100 p-4 rounded-xl backdrop-blur-sm"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              {/* Campo Usuario */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Usuario
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type="text"
                    value={usuario}
                    onChange={(e) => {
                      setUsuario(e.target.value);
                      setError("");
                    }}
                    placeholder="Ingresa tu usuario"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/30 outline-none text-white placeholder-blue-200 backdrop-blur-sm transition-all"
                    required
                  />
                </div>
              </div>

              {/* Campo Contraseña */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Ingresa tu contraseña"
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-white/50 focus:border-white/30 outline-none text-white placeholder-blue-200 backdrop-blur-sm transition-all"
                    required
                  />
                </div>
              </div>

              {/* Botón de Login */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#1E3A8A] hover:bg-blue-50 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-[#1E3A8A] border-t-transparent rounded-full animate-spin"></div>
                    Verificando...
                  </>
                ) : (
                  <>
                    Iniciar Sesión
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Botón Volver al Inicio */}
            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              Volver al Inicio
            </button>

            {/* Información de seguridad */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <Shield className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-100">
                  <p className="font-semibold text-white mb-1">
                    Acceso restringido
                  </p>
                  <p>
                    Solo personal autorizado puede acceder a esta sección. Todas las
                    acciones son monitoreadas y registradas.
                  </p>
                </div>
              </div>
            </div>

            {/* Nota de credenciales (solo para desarrollo) */}
            <div className="mt-6 text-center">
              <p className="text-xs text-blue-300 bg-white/10 py-2 px-4 rounded-lg backdrop-blur-sm border border-white/10">
                <strong>Credenciales de prueba:</strong><br />
                Usuario: admin | Contraseña: admin123
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}