import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, User, AlertCircle, ArrowRight } from "lucide-react";

// Servicio de autenticación
const authService = {
  async login(usuario, password) {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
        credentials: 'include' // Importante para cookies/sesión
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        return { success: true, user: data.usuario };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error('Error en login:', error);
      return { 
        success: false, 
        error: 'Error de conexión con el servidor' 
      };
    }
  }
};

export default function AdminLogin() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authService.login(usuario, password);
      
      if (result.success) {
        // Guardar sesión en localStorage
        localStorage.setItem("adminAuth", "true");
        localStorage.setItem("adminUser", result.user);
        navigate("/admin");
      } else {
        setError(result.error || "Error en la autenticación");
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
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
        {/* ... (tu código existente del UI permanece igual) ... */}
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Voto Perú</h1>
            <p className="text-blue-100 text-lg font-medium">Panel Administrativo</p>
          </div>

          {/* Formulario */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Acceso Administrativo
              </h2>
              <p className="text-blue-100">
                Sistema conectado con backend seguro
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

              {/* Campos de usuario y contraseña */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">Usuario</label>
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

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-white">Contraseña</label>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#1E3A8A] hover:bg-blue-50 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 shadow-lg"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-[#1E3A8A] border-t-transparent rounded-full animate-spin"></div>
                    Conectando...
                  </>
                ) : (
                  <>
                    Iniciar Sesión
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <button
              onClick={() => navigate("/")}
              className="w-full mt-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              Volver al Inicio
            </button>

            {/* Información actualizada */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <Shield className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-100">
                  <p className="font-semibold text-white mb-1">Autenticación segura</p>
                  <p>Sistema conectado con backend Java. Todas las credenciales son validadas en la base de datos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}