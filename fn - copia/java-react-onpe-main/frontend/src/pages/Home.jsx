import { motion } from "framer-motion";
import { Calendar, Users, Building2, Vote, FileSearch, CheckCircle2, Shield, Laptop, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  // Cálculo de días y meses restantes hasta las elecciones
  const fechaElecciones = new Date("2026-04-12T00:00:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaElecciones - ahora;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const meses = Math.floor(dias / 30);
  const diasRestantes = dias % 30;

  // Configuración de animaciones
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* ===== HERO PRINCIPAL CON DISEÑO ONPE ===== */}
      <section className="relative overflow-hidden">
        {/* Background con gradiente (simulando imagen) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/95 via-[#C41E3A]/90 to-[#8B0000]/95" />
          {/* Patrón de puntos para simular textura */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear" 
            }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center text-white"
          >
            {/* Badge superior */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/30">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Elecciones Generales 2026</span>
              </div>
            </motion.div>

            {/* Título principal */}
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              Tu Voto,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200">
                Tu Futuro
              </span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="text-xl md:text-2xl text-red-50 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Participa en las Elecciones Generales del Perú de forma <strong>segura</strong>, 
              <strong> transparente</strong> y <strong>accesible</strong>. Elige tu modalidad y ejerce tu derecho democrático.
            </motion.p>

            {/* Botones de acción */}
            <motion.div 
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => window.location.href = '/votar'}
                className="group relative bg-white text-[#E31E24] px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-105 flex items-center gap-3 overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-50 to-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Vote className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Votar Ahora</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => window.location.href = '/informacion'}
                className="group bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-105 flex items-center gap-3 cursor-pointer"
              >
                <FileSearch className="w-6 h-6" />
                <span>Más Información</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Onda decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,64 C360,96 720,96 1080,64 C1440,32 1440,120 1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ===== CONTADOR DE TIEMPO MEJORADO ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
        className="relative -mt-16 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 overflow-hidden relative">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100 to-red-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-30" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-[#E31E24]/10 px-5 py-2 rounded-full mb-4"
                >
                  <Clock className="w-5 h-5 text-[#E31E24]" />
                  <span className="text-[#E31E24] font-bold">Cuenta Regresiva</span>
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Faltan para las elecciones
                </h2>
                <p className="text-gray-600 text-lg">12 de Abril, 2026</p>
              </div>

              {/* Contenedor principal: Reloj + Calendario */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* RELOJ ANIMADO */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64">
                    {/* Círculo exterior con animación de pulso */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E31E24] to-[#C41E3A] opacity-20"
                    />
                    
                    {/* Círculo del reloj */}
                    <div className="absolute inset-4 rounded-full bg-white shadow-2xl border-8 border-gray-100 flex items-center justify-center">
                      {/* Centro del reloj */}
                      <div className="absolute w-4 h-4 bg-[#E31E24] rounded-full z-20 shadow-lg" />
                      
                      {/* Marcadores de horas */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        const x = Math.cos(angle) * 85;
                        const y = Math.sin(angle) * 85;
                        return (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-gray-300 rounded-full"
                            style={{
                              left: `calc(50% + ${x}px - 4px)`,
                              top: `calc(50% + ${y}px - 4px)`,
                            }}
                          />
                        );
                      })}
                      
                      {/* Manecilla de horas (animada) */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        className="absolute w-1.5 h-16 bg-gradient-to-t from-[#E31E24] to-[#C41E3A] rounded-full origin-bottom"
                        style={{ bottom: '50%', left: 'calc(50% - 3px)' }}
                      />
                      
                      {/* Manecilla de minutos (animada más rápido) */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-1 h-20 bg-gradient-to-t from-gray-700 to-gray-500 rounded-full origin-bottom"
                        style={{ bottom: '50%', left: 'calc(50% - 2px)' }}
                      />
                      
                      {/* Manecilla de segundos (animada) */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute w-0.5 h-24 bg-[#E31E24] rounded-full origin-bottom"
                        style={{ bottom: '50%', left: 'calc(50% - 1px)' }}
                      />
                    </div>

                    {/* Texto en el centro */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center mt-16">
                        <div className="text-4xl font-black text-[#E31E24]">{dias}</div>
                        <div className="text-xs text-gray-600 font-semibold">DÍAS</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CALENDARIO ESTILO FLIP */}
                <div className="space-y-4">
                  {/* Meses */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">Meses</div>
                          <div className="text-3xl font-black text-gray-900">{meses}</div>
                        </div>
                      </div>
                      <div className="text-5xl font-black text-red-100">M</div>
                    </div>
                  </motion.div>

                  {/* Días restantes */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 font-medium">Días Restantes</div>
                          <div className="text-3xl font-black text-gray-900">{diasRestantes}</div>
                        </div>
                      </div>
                      <div className="text-5xl font-black text-blue-100">D</div>
                    </div>
                  </motion.div>

                  {/* Total de días */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E31E24] to-[#C41E3A] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-white"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          <FileSearch className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-red-100 font-medium">Total de Días</div>
                          <div className="text-3xl font-black">{dias}</div>
                        </div>
                      </div>
                      <div className="text-5xl font-black text-white/20">T</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== MODALIDADES DE VOTO REDISEÑADAS CON MÁS VIDA ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Elementos decorativos de fondo animados */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-200 to-pink-200 rounded-full blur-3xl opacity-20"
          />
          <motion.div
            animate={{ 
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-blue-100 px-6 py-3 rounded-full mb-6 border-2 border-gray-200"
            >
              <Vote className="w-5 h-5 text-[#E31E24]" />
              <span className="font-bold text-gray-700">Modalidades de Votación</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ¿Cómo Quieres{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-blue-600">
                Votar?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elige la modalidad que mejor se adapte a ti. Ambas garantizan seguridad y transparencia.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Voto Presencial - Diseño Ultra Moderno */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect animado */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
              />
              
              <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-red-200 transition-all transform group-hover:-translate-y-2 group-hover:shadow-2xl shadow-lg">
                {/* Header con animación de onda */}
                <div className="relative bg-gradient-to-br from-[#E31E24] via-[#C41E3A] to-[#8B0000] p-8 pb-24 overflow-hidden">
                  {/* Ondas animadas de fondo */}
                  <motion.div
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl"
                      >
                        <Building2 className="w-14 h-14 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-black rounded-full border border-white/40"
                      >
                        TRADICIONAL
                      </motion.div>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-3 tracking-tight">
                      Voto Presencial
                    </h3>
                    <p className="text-red-100 text-lg font-medium">
                      La experiencia clásica y confiable
                    </p>
                  </div>

                  {/* Formas decorativas */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                </div>

                {/* Contenido con efecto de elevación */}
                <div className="p-8 pt-0 -mt-16 relative z-10">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-7 shadow-2xl border border-gray-100 mb-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      Acude a tu local de votación asignado y ejerce tu derecho de manera presencial con todas las garantías de seguridad.
                    </p>

                    <div className="space-y-4">
                      {[
                        { icon: MapPin, text: "Local de votación asignado", gradient: "from-red-500 to-pink-500" },
                        { icon: CheckCircle2, text: "DNI vigente requerido", gradient: "from-red-600 to-orange-500" },
                        { icon: Shield, text: "Proceso supervisado", gradient: "from-red-700 to-red-500" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-gray-800 font-semibold text-base">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.a
                    href="https://eg2026.onpe.gob.pe/para-electores/elige-tu-local-de-votacion/#"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#E31E24] via-[#C41E3A] to-[#E31E24] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-5 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all cursor-pointer overflow-hidden relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Consultar Local</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Voto Digital - Diseño Ultra Moderno */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect animado */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity"
              />
              
              <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all transform group-hover:-translate-y-2 group-hover:shadow-2xl shadow-lg">
                {/* Header con animación de partículas */}
                <div className="relative bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 p-8 pb-24 overflow-hidden">
                  {/* Partículas animadas */}
                  <motion.div
                    animate={{ 
                      y: ["-100%", "100%"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
                      backgroundSize: '40px 40px'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: -360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl"
                      >
                        <Laptop className="w-14 h-14 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-black rounded-full border border-white/40 flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4" />
                        INNOVADOR
                      </motion.div>
                    </div>
                    
                    <h3 className="text-4xl font-black text-white mb-3 tracking-tight">
                      Voto Digital
                    </h3>
                    <p className="text-blue-100 text-lg font-medium">
                      El futuro de la democracia hoy
                    </p>
                  </div>

                  {/* Formas decorativas */}
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                </div>

                {/* Contenido con efecto de elevación */}
                <div className="p-8 pt-0 -mt-16 relative z-10">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-7 shadow-2xl border border-gray-100 mb-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-6 text-base">
                      Vota desde cualquier lugar con conexión a Internet. Seguro, rápido y accesible las 24 horas del día.
                    </p>

                    <div className="space-y-4">
                      {[
                        { icon: Laptop, text: "Desde cualquier dispositivo", gradient: "from-blue-500 to-cyan-500" },
                        { icon: Shield, text: "Encriptación de datos", gradient: "from-indigo-600 to-blue-500" },
                        { icon: Clock, text: "Disponible 24/7", gradient: "from-purple-600 to-indigo-500" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-gray-800 font-semibold text-base">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => window.location.href = '/voto-digital'}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-5 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all cursor-pointer overflow-hidden relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-200%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative z-10">Conocer Más</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



    </div>
  );
}