import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Users,
  UserSquare2,
  Building2,
  Settings,
  FileText,
  TrendingUp,
  Shield,
  UserCheck,
  Brain,
  KeyRound,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

const AdminSidebar = ({ isCollapsed = false }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = useState(null);

  const menuSections = [
    {
      id: 'principal',
      label: 'Principal',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/admin' },
      ],
    },
    {
      id: 'gestion-usuarios',
      label: 'Gestión de Usuarios',
      items: [
        { id: 'usuarios', label: 'Usuarios', icon: Users, path: '/admin/usuarios' },
        { id: 'roles', label: 'Roles y Permisos', icon: KeyRound, path: '/admin/roles' },
      ],
    },
    {
      id: 'gestion-electoral',
      label: 'Gestión Electoral',
      items: [
        { id: 'candidatos', label: 'Candidatos', icon: UserSquare2, path: '/admin/candidatos' },
        { id: 'padron-electoral', label: 'Padrón Electoral', icon: UserCheck, path: '/admin/padron-electoral' },
        { id: 'centros', label: 'Centros de Votación', icon: Building2, path: '/admin/centros' },
      ],
    },
    {
      id: 'resultados-analisis',
      label: 'Resultados y Análisis',
      items: [
        { id: 'resultados', label: 'Resultados', icon: TrendingUp, path: '/admin/resultados' },
        { id: 'analisis', label: 'Análisis de Datos', icon: Brain, path: '/admin/analisis' },
        { id: 'reportes', label: 'Reportes', icon: FileText, path: '/admin/reportes' },
      ],
    },
    {
      id: 'sistema',
      label: 'Sistema',
      items: [
        { id: 'configuracion', label: 'Configuración', icon: Settings, path: '/admin/configuracion' },
        { id: 'auditoria', label: 'Auditoría', icon: Shield, path: '/admin/auditoria' },
      ],
    },
  ];

  const isActive = (item) => {
    if (item.id === 'dashboard') {
      return location.pathname === '/admin' || location.pathname === '/admin/dashboard';
    }
    return location.pathname === item.path;
  };

  return (
    <motion.aside
      initial={{ x: isCollapsed ? -200 : 0 }}
      animate={{ x: 0 }}
      className={`${
        isCollapsed ? 'w-20' : 'w-72'
      } bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-screen shadow-2xl border-r border-slate-800 transition-all duration-300 fixed left-0 top-0 z-40 overflow-y-auto`}
    >
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-800 p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white">Panel Voto Perú</h1>
                <p className="text-xs text-blue-300">2026</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="w-full flex justify-center">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuSections.map((section) => (
          <div key={section.id}>
            {!isCollapsed && (
              <button
                onClick={() =>
                  setExpandedSection(expandedSection === section.id ? null : section.id)
                }
                className="w-full px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider hover:text-blue-400 transition flex items-center justify-between"
              >
                {section.label}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )}

            <motion.div
              initial={false}
              animate={{
                height:
                  isCollapsed || expandedSection === section.id ? 'auto' : 0,
                opacity: isCollapsed || expandedSection === section.id ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const itemIsActive = isActive(item);

                  return (
                    <motion.div key={item.id} whileHover={{ x: 4 }}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition group relative ${
                          itemIsActive
                            ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 border-l-2 border-blue-400'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-blue-400'
                        }`}
                        title={isCollapsed ? item.label : ''}
                      >
                        <div
                          className={`p-2 rounded-lg transition ${
                            itemIsActive
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-blue-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        {!isCollapsed && (
                          <>
                            <span className="text-sm font-medium">{item.label}</span>
                            <ChevronRight
                              className={`w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition ${
                                itemIsActive ? 'opacity-100 text-blue-400' : ''
                              }`}
                            />
                          </>
                        )}
                        {itemIsActive && !isCollapsed && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-full"></div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800 bg-gradient-to-t from-slate-950 to-transparent">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-sm font-bold text-white">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin</p>
              <p className="text-xs text-slate-400 truncate">Administrador</p>
            </div>
          </div>
        </div>
      )}
    </motion.aside>
  );
};

export default AdminSidebar;