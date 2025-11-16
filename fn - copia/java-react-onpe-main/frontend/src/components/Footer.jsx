import { motion } from "framer-motion";
import { Vote, Shield, Sparkles, MapPin, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden mt-auto">
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Branding */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                  <Vote className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-black">Voto Perú</h3>
                  <p className="text-xs text-gray-400">Sistema Electoral Digital</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plataforma tecnológica orientada a garantizar procesos electorales transparentes, seguros y accesibles para todos los ciudadanos del Perú.
              </p>
            </motion.div>
          </div>

          {/* Columna 2: Enlaces Útiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
              Enlaces Útiles
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", to: "/" },
                { name: "Partidos", to: "/Partidos" },
                { name: "Voto Digital", to: "/informacion#voto-digital" },
                { name: "Proceso de Votación", to: "/votar" },
                { name: "Resultados", to: "/resultados" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full" />
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lima, Perú</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">contacto@sedn.pe</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                  <Globe className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">www.votoperu.pe</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full" />
              Mantente Informado
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Recibe actualizaciones sobre el proceso electoral
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
              <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all text-sm">
                Suscribirme
              </button>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} Sistema Electoral Digital Nacional. Todos los derechos reservados.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {[
              { icon: Vote, color: "from-blue-500 to-blue-600" },
              { icon: Shield, color: "from-purple-500 to-purple-600" },
              { icon: Sparkles, color: "from-pink-500 to-pink-600" },
            ].map((item, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-gradient-to-br ${item.color} rounded-xl hover:shadow-lg transition-all cursor-pointer`}
              >
                <item.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
    </footer>
  );
}