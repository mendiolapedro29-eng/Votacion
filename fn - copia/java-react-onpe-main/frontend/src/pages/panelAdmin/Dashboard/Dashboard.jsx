import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  MapPin,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  Cell,
} from "recharts";

// ===== Datos simulados =====
const estadisticas = {
  mesasProcesadas: 52.14,
  votantesRegistrados: 12763599,
  participacion: 73.84,
  incidencias: 126,
};

// Resultados por partido (barras) - Elecciones 2026
const resultadosPartidos = [
  { partido: "FP", nombre: "Fuerza Popular", porcentaje: 18.5, color: "#DC2626" },
  { partido: "RP", nombre: "Renovación Popular", porcentaje: 15.2, color: "#2563EB" },
  { partido: "AP", nombre: "Acción Popular", porcentaje: 12.8, color: "#EA580C" },
  { partido: "APP", nombre: "Alianza para el Progreso", porcentaje: 11.3, color: "#16A34A" },
  { partido: "JPP", nombre: "Juntos por el Perú", porcentaje: 9.7, color: "#9333EA" },
  { partido: "PM", nombre: "Partido Morado", porcentaje: 8.4, color: "#7C3AED" },
  { partido: "UN", nombre: "Unidad Nacional", porcentaje: 7.2, color: "#F59E0B" },
  { partido: "SP", nombre: "Somos Perú", porcentaje: 6.1, color: "#64748B" },
];

// Participación regional (línea)
const participacionRegional = [
  { region: "Lima", participacion: 78 },
  { region: "Cusco", participacion: 69 },
  { region: "Arequipa", participacion: 73 },
  { region: "Piura", participacion: 71 },
  { region: "Junín", participacion: 68 },
  { region: "Loreto", participacion: 65 },
];

// Animación framer
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Dashboard() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="space-y-8"
    >
      {/* ======= TARJETAS SUPERIORES REDISEÑADAS ======= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Tarjeta 1: Mesas Procesadas */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0 * 0.1 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Procesamiento</span>
            </div>
            <p className="text-sm font-medium opacity-90 mb-2">Mesas Procesadas</p>
            <h3 className="text-4xl font-black drop-shadow-lg">{estadisticas.mesasProcesadas.toFixed(2)}%</h3>
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-white/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tarjeta 2: Votantes Registrados */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 * 0.1 }}
          className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Registro</span>
            </div>
            <p className="text-sm font-medium opacity-90 mb-2">Votantes Registrados</p>
            <h3 className="text-4xl font-black drop-shadow-lg">{(estadisticas.votantesRegistrados / 1000000).toFixed(1)}M</h3>
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-white/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tarjeta 3: Participación Actual */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 * 0.1 }}
          className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Participación</span>
            </div>
            <p className="text-sm font-medium opacity-90 mb-2">Participación Actual</p>
            <h3 className="text-4xl font-black drop-shadow-lg">{estadisticas.participacion.toFixed(2)}%</h3>
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-white/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tarjeta 4: Incidencias Reportadas */}
        <motion.div
          custom={3}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 * 0.1 }}
          className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Alertas</span>
            </div>
            <p className="text-sm font-medium opacity-90 mb-2">Incidencias Reportadas</p>
            <h3 className="text-4xl font-black drop-shadow-lg">{estadisticas.incidencias}</h3>
            <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full bg-white/50 rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ======= GRÁFICOS REDISEÑADOS ======= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Resultados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Resultados por Partido</h2>
              <p className="text-sm text-gray-500 mt-1">Distribución de votos - Elecciones 2026</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <BarChart data={resultadosPartidos} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <XAxis dataKey="partido" tick={{ fill: "#4B5563", fontSize: 12 }} />
                <YAxis hide />
                <Tooltip 
                  formatter={(v) => `${v}%`} 
                  labelFormatter={(n) => `Partido: ${n}`}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="porcentaje" radius={[8, 8, 0, 0]}>
                  {resultadosPartidos.map((p, i) => (
                    <Cell key={i} fill={p.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Gráfico de Participación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Participación por Región</h2>
              <p className="text-sm text-gray-500 mt-1">Análisis regional de participación</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="w-full h-80">
            <ResponsiveContainer>
              <LineChart data={participacionRegional}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="region" tick={{ fill: "#4B5563", fontSize: 12 }} />
                <YAxis hide />
                <Tooltip 
                  formatter={(v) => `${v}%`}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="participacion" 
                  stroke="#2563EB" 
                  strokeWidth={3} 
                  dot={{ r: 6, fill: '#2563EB' }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* ======= TABLA DE RESULTADOS ======= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Detalle de Partidos</h2>
            <p className="text-sm text-gray-500 mt-1">Información completa de resultados</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Partido</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Sigla</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Porcentaje</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody>
              {resultadosPartidos.map((partido, idx) => (
                <motion.tr
                  key={idx}
                  whileHover={{ backgroundColor: "#f3f4f6" }}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: partido.color }}></div>
                      <span className="font-medium text-gray-900">{partido.nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{partido.partido}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{ width: `${partido.porcentaje}%`, backgroundColor: partido.color }}
                        ></div>
                      </div>
                      <span className="font-semibold text-gray-900">{partido.porcentaje}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Activo</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}