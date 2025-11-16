// src/pages/votar/Votar.jsx

import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Vote, Crown, Globe, Building2 } from "lucide-react";
import { 
  getCandidatosParaVotacion, 
  verificarDNI, 
  registrarVoto 
} from "../../services/candidatosService";

// componentes de esta carpeta
import ProgressCard from "./ProgressCard";
import Verificacion from "./Verificacion";
import Categorias from "./Categorias";
import Candidatos from "./Candidatos";
import Congresistas from "./Congresistas";
import ParlamentoAndino from "./ParlamentoAndino";
import Final from "./Final";

// Categorías de votación disponibles en el proceso electoral
const categoriasVotacion = [
  {
    id: "presidente",
    titulo: "Presidente y Vicepresidentes",
    subtitulo: "de la República",
    icono: Crown,
    color: "from-blue-500 to-blue-600",
    descripcion: "Elige a tu fórmula presidencial",
  },
  {
    id: "congresistas",
    titulo: "Congresistas",
    subtitulo: "de la República",
    icono: Building2,
    color: "from-green-500 to-green-600",
    descripcion: "Elige a tus representantes en el Congreso",
  },
  {
    id: "parlamentoAndino",
    titulo: "Parlamento Andino",
    subtitulo: "Representantes Regionales",
    icono: Globe,
    color: "from-purple-500 to-purple-600",
    descripcion: "Elige a tus representantes regionales",
  },
];

export default function Votar() {
  // Estados del proceso
  const [paso, setPaso] = useState(1);
  const [dni, setDni] = useState("");
  const [categoriaActual, setCategoriaActual] = useState(null);
  const [votosRealizados, setVotosRealizados] = useState({});
  const [error, setError] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [candidatosData, setCandidatosData] = useState({
    presidente: [],
    congresistas: [],
    parlamentoAndino: [],
  });
  const [cargando, setCargando] = useState(false);
  const [usuarioVerificado, setUsuarioVerificado] = useState(null);

  // Animación común
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Cargar candidatos del servicio REAL - MODIFICADO
  useEffect(() => {
    const cargarCandidatos = async () => {
      setCargando(true);
      try {
        const datos = await getCandidatosParaVotacion(); // ← Ahora es async
        setCandidatosData(datos);
      } catch (error) {
        console.error('Error cargando candidatos:', error);
        setError("Error cargando los candidatos. Intente nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    cargarCandidatos();

    // Opcional: si quieres mantener la actualización en tiempo real
    const interval = setInterval(cargarCandidatos, 30000); // Cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  /** Genera código captcha */
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput("");
  };

  // VERIFICACIÓN DE DNI MODIFICADA - CONEXIÓN CON BACKEND
  const verificarDNIHandler = async () => {
    setError("");
    if (!dni || dni.length < 8) {
      setError("Por favor, ingrese un DNI válido (8 dígitos)");
      return;
    }

    if (!captchaInput || captchaInput.toUpperCase() !== captchaCode) {
      setError("El código de verificación no coincide. Por favor, intente nuevamente.");
      generateCaptcha();
      return;
    }

    setCargando(true);
    
    try {
      // Verificación REAL con el backend Java
      const resultado = await verificarDNI(dni);
      
      if (resultado.valido && !resultado.haVotado) {
        setUsuarioVerificado(resultado);
        setPaso(2);
      } else if (resultado.haVotado) {
        setError("Este DNI ya ha ejercido su derecho al voto.");
      } else {
        setError("DNI no encontrado en el padrón electoral.");
      }
    } catch (error) {
      console.error('Error verificando DNI:', error);
      setError("Error verificando DNI. Intente nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  const seleccionarCategoria = (categoria) => {
    setCategoriaActual(categoria);
    setPaso(3);
  };

  // CONFIRMAR VOTO MODIFICADO - REGISTRO EN BACKEND
  const confirmarVotoDirecto = async (candidatoVotado) => {
    setCargando(true);
    
    try {
      // Preparar datos del voto para el backend
      const votoData = {
        dniUsuario: dni,
        idCandidato: candidatoVotado.id,
        categoria: categoriaActual.id,
        fechaVoto: new Date().toISOString(),
        partido: candidatoVotado.partido,
        candidatoNombre: candidatoVotado.nombre
      };

      // Registrar voto en el backend Java
      const resultado = await registrarVoto(votoData);

      if (resultado.success) {
        // Si el registro fue exitoso, actualizar estado local
        const nuevosVotos = {
          ...votosRealizados,
          [categoriaActual.id]: candidatoVotado,
        };
        setVotosRealizados(nuevosVotos);

        const categoriasVotadas = Object.keys(nuevosVotos);
        
        // Verificar si se completaron TODAS las categorías
        if (categoriasVotadas.length === categoriasVotacion.length) {
          setPaso(5); // Redirigir a la página final
        } else {
          // Si aún quedan categorías por votar, volver al menú de categorías
          setCategoriaActual(null);
          setPaso(2);
        }
      } else {
        setError("Error registrando el voto. Intente nuevamente.");
      }
    } catch (error) {
      console.error('Error registrando voto:', error);
      setError("Error registrando el voto. Intente nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  // Función para volver a categorías
  const volverACategorias = () => {
    setCategoriaActual(null);
    setPaso(2);
  };

  const reiniciar = () => {
    setPaso(1);
    setDni("");
    setCategoriaActual(null);
    setVotosRealizados({});
    setError("");
    setCaptchaCode("");
    setCaptchaInput("");
    setUsuarioVerificado(null);
    setCargando(false);
  };

  const obtenerCandidatos = () => {
    if (!categoriaActual) return [];
    const categoriaKey =
      categoriaActual.id === "parlamentoAndino"
        ? "parlamentoAndino"
        : categoriaActual.id;
    return candidatosData[categoriaKey] || [];
  };

  const categoriasPendientes = categoriasVotacion.filter(
    (cat) => !votosRealizados[cat.id]
  );

  const progreso =
    (Object.keys(votosRealizados).length / categoriasVotacion.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Vote className="w-8 h-8 text-[#2563EB]" />
            <h1 className="text-4xl font-bold text-[#1E3A8A]">Realiza tu voto</h1>
          </div>
          
          {/* Indicador de carga global */}
          {cargando && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 text-blue-600 font-medium"
            >
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              Conectando con el sistema electoral...
            </motion.div>
          )}

          {/* Información del usuario verificado */}
          {usuarioVerificado && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <span>✓</span>
              Verificado: {usuarioVerificado.nombres}
            </motion.div>
          )}
        </motion.div>

        {/* Progreso */}
        {paso > 1 && paso < 5 && (
          <ProgressCard
            fadeUp={fadeUp}
            votosRealizados={votosRealizados}
            categorias={categoriasVotacion}
            progreso={progreso}
          />
        )}

        {/* Contenido principal por paso */}
        <AnimatePresence mode="wait">
          {paso === 1 && (
            <Verificacion
              key="paso1"
              fadeUp={fadeUp}
              dni={dni}
              setDni={setDni}
              error={error}
              setError={setError}
              captchaCode={captchaCode}
              setCaptchaCode={setCaptchaCode}
              captchaInput={captchaInput}
              setCaptchaInput={setCaptchaInput}
              generateCaptcha={generateCaptcha}
              verificarDNI={verificarDNIHandler}
              cargando={cargando}
            />
          )}

          {paso === 2 && (
            <Categorias
              key="paso2"
              fadeUp={fadeUp}
              categorias={categoriasVotacion}
              votosRealizados={votosRealizados}
              categoriasPendientes={categoriasPendientes}
              onSeleccionarCategoria={seleccionarCategoria}
              onVolverPaso1={() => setPaso(1)}
              onIrFinal={() => {
                setPaso(5);
              }}
            />
          )}

          {paso === 3 && categoriaActual && categoriaActual.id === "presidente" && (
            <Candidatos
              key="paso3-presidente"
              categoriaActual={categoriaActual}
              candidatos={obtenerCandidatos()}
              onConfirmarVoto={confirmarVotoDirecto} 
              onVolverCategorias={volverACategorias}
              cargando={cargando}
            />
          )}

          {paso === 3 && categoriaActual && categoriaActual.id === "congresistas" && (
            <Congresistas
              key="paso3-congreso"
              categoriaActual={categoriaActual}
              candidatos={obtenerCandidatos()}
              onConfirmarVoto={confirmarVotoDirecto}
              onVolverCategorias={volverACategorias}
              cargando={cargando}
            />
          )}

          {paso === 3 && categoriaActual && categoriaActual.id === "parlamentoAndino" && (
            <ParlamentoAndino
              key="paso3-parlamento"
              categoriaActual={categoriaActual}
              candidatos={obtenerCandidatos()}
              onConfirmarVoto={confirmarVotoDirecto}
              onVolverCategorias={volverACategorias}
              cargando={cargando}
            />
          )}

          {paso === 5 && (
            <Final
              key="paso5"
              fadeUp={fadeUp}
              votosRealizados={votosRealizados}
              categoriasVotacion={categoriasVotacion}
              onReiniciar={reiniciar}
              usuario={usuarioVerificado}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}