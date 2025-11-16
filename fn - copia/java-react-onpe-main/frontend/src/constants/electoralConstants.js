/**
 * Constantes compartidas para toda la aplicación electoral
 * 
 * Este archivo centraliza todas las constantes utilizadas en diferentes partes
 * de la aplicación para mantener consistencia y facilitar el mantenimiento.
 * 
 * Incluye:
 * - Partidos políticos
 * - Cargos electorales
 * - Departamentos del Perú
 * - Roles de usuario
 * - Tipos y ámbitos de reportes
 */

// Lista de partidos políticos registrados en el sistema - Elecciones 2026
export const PARTIDOS_POLITICOS = [
  // Partidos principales
  "Acción Popular",
  "Ahora Nación",
  "Alianza para el Progreso",
  "País para Todos",
  "Avanza País",
  "Integridad Democrática",
  "Partido Regionalista de Integración Nacional",
  "Fe en el Perú",
  "Fuerza Popular",
  "Partido Patriótico del Perú",
  "Partido Democrático Federal",
  "Partido Morado",
  "Juntos por el Perú",
  "Libertad Popular",
  "Partido Cívico Obras",
  "Partido Demócrata Verde",
  "Somos Perú",
  "Partido Aprista Peruano",
  "Renovación Popular",
  "Progresemos",
  "Perú Moderno",
  "Perú Primero",
  "Un Camino Diferente",
  "Partido Primero La Gente",
  "Partido Ciudadanos por el Perú",
  "Salvemos al Perú",
  "Frente de la Esperanza",
  "Perú Libre",
  "Podemos Perú",
  "Cooperación Popular",
  "Sí creo",
  "Partido del Buen Gobierno",
  "Partido Demócrata Unido Perú",
  // Alianzas
  "Fuerza y Libertad",
  "Unidad Nacional",
  "Venceremos",
];

// Cargos electorales disponibles en el sistema
export const CARGOS_ELECTORALES = [
  "Presidente",
  "Primer Vicepresidente",
  "Segundo Vicepresidente",
  "Senador",
  "Congresista",
  "Parlamentario Andino",
];

// Departamentos del Perú para selección en formularios
export const DEPARTAMENTOS_PERU = [
  "Amazonas",
  "Ancash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
];

// Roles de usuario disponibles en el sistema de administración
export const ROLES_USUARIO = [
  "Super Admin",
  "Admin Regional",
  "Presidente de Mesa",
  "Soporte Técnico",
];

// Tipos de reportes que se pueden generar en el sistema
export const TIPOS_REPORTE = [
  "Resultados",
  "Participación",
  "Auditoría",
  "Padrón Electoral",
];

// Ámbitos geográficos o administrativos para los reportes
export const AMBITOS_REPORTE = [
  "Nacional",
  "Departamento: Lima",
  "Departamento: Cusco",
  "Sistema",
];

// Logos/Símbolos de los partidos políticos
// Si un partido no tiene logo, se usará un símbolo con iniciales
export const LOGOS_PARTIDOS = {
  "Acción Popular": "https://accionpopular.com.pe/wp-content/uploads/2025/02/logo-AP@4x.png",
  "Ahora Nación": "https://th.bing.com/th/id/OIP.JAKQK3PgGwePX75XxVqYXwAAAA?w=167&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Alianza para el Progreso": "https://th.bing.com/th/id/OIP.yXGOXjPdw1-xTwsw_PxiEgHaCU?w=332&h=109&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "País para Todos": "https://th.bing.com/th/id/OIP.HBHaXsSQjVLNaSs0kGtCrgHaHa?w=180&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Avanza País": "https://th.bing.com/th/id/OIP.TSrNFrNhAyZtAeAFJ7-KxAHaGp?w=173&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Integridad Democrática": "https://latestlogo.com/wp-content/uploads/2024/07/integridad-democratica.png",
  "Partido Regionalista de Integración Nacional": "https://th.bing.com/th/id/OIP.hI3yW4dhlgdKonmOxZi2HQHaFj?w=190&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Fe en el Perú": "https://th.bing.com/th/id/OIP.QL_-0dZCLzbmfT5-L3SfFwHaHa?w=170&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Fuerza Popular": "https://th.bing.com/th/id/OIP.Lt9z5sqjJ_L__0FPH8Gp1wHaEm?w=303&h=188&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Partido Patriótico del Perú": "https://th.bing.com/th/id/OIP.HbaMu-UbsWnO3llEXS7ZBwHaHc?w=164&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Partido Morado": "https://th.bing.com/th/id/OIP.LQR2jJgaeTfidAFI3wqljQHaHa?w=161&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Juntos por el Perú": "https://th.bing.com/th/id/OIP.jVyA6sP3nL68LuBNxPwzQQHaHa?w=223&h=220&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Libertad Popular": "https://th.bing.com/th/id/OIP.3ttDKCvRLjrEsyPNOG2EEQHaFs?w=223&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Somos Perú": "https://th.bing.com/th/id/OIP.Go-Qoafxbkk4OekeCC5LRwHaHa?w=165&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  "Renovación Popular": "https://vectorseek.com/wp-content/uploads/2023/09/Renovacion-Popular-Logo-Vector.svg-.png",
  // Agregar más logos aquí cuando estén disponibles
};

