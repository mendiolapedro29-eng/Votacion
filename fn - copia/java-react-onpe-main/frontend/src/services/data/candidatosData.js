/**
 * Datos iniciales de candidatos electorales - Elecciones 2026
 * 
 * Este archivo contiene todos los datos de candidatos organizados por partido político.
 * Cada partido tiene su estructura completa: presidente, vicepresidentes, congresistas y parlamentarios andinos.
 * 
 * ESTRUCTURA ESTANDARIZADA:
 * - id: Único y no duplicado
 * - nombre: Nombre completo del candidato
 * - partidoPolitico: Nombre del partido
 * - numeroLista: Número de lista electoral
 * - cargo: Presidente, Primer Vicepresidente, Segundo Vicepresidente, Congresista, Parlamentario Andino
 * - foto: URL de la foto
 * - distrito: Solo para congresistas
 * - estado: "Activo" o "Inactivo"
 * - propuestas: Array de propuestas específicas (de propuestasData.js)
 * - lema: Lema de campaña
 * - colorPartido: Color hexadecimal del partido
 */

import { propuestasPorPartido } from './propuestasData';

// Colores oficiales de partidos (basados en colores reales o representativos)
const COLORES_PARTIDOS = {
  "Acción Popular": "#004B87",
  "Ahora Nación": "#FF6B35",
  "Alianza para el Progreso": "#00CED1",
  "País para Todos": "#DC143C",
  "Avanza País": "#32CD32",
  "Integridad Democrática": "#8A2BE2",
  "Partido Regionalista de Integración Nacional": "#FFD700",
  "Fe en el Perú": "#FF69B4",
  "Fuerza Popular": "#FF4500",
  "Partido Patriótico del Perú": "#800000",
  "Partido Democrático Federal": "#4682B4",
  "Partido Morado": "#800080",
  "Juntos por el Perú": "#006400",
  "Libertad Popular": "#000080",
  "Somos Perú": "#FF8C00",
  "Renovación Popular": "#1E90FF",
  "Perú Primero": "#00BFFF",
  "Un Camino Diferente": "#2E8B57",
  "Partido Primero La Gente": "#DA70D6",
  "Partido Ciudadanos por el Perú": "#FF6347",
  "Salvemos al Perú": "#8B4513",
  "Frente de la Esperanza": "#00FA9A",
  "Perú Libre": "#DC143C",
  "Podemos Perú": "#FFD700",
  "Cooperación Popular": "#4B0082",
  "Sí creo": "#87CEEB",
  "Partido del Buen Gobierno": "#FFA500",
  "Partido Demócrata Unido Perú": "#9932CC",
  "Fuerza y Libertad": "#B22222",
  "Unidad Nacional": "#0000CD",
  "Venceremos": "#FF0000"
};

// Lemas por partido (basados en identidad de cada partido)
const LEMAS_PARTIDOS = {
  "Acción Popular": "La fuerza de la experiencia y la tradición",
  "Ahora Nación": "El cambio que el Perú necesita",
  "Alianza para el Progreso": "Trabajo, desarrollo y obras para todos",
  "País para Todos": "Entretenimiento, cultura y desarrollo social",
  "Avanza País": "Seguridad, crecimiento y modernización",
  "Integridad Democrática": "Transparencia, ética y honestidad",
  "Partido Regionalista de Integración Nacional": "Unidos por un Perú federal",
  "Fe en el Perú": "Fe, valores y desarrollo nacional",
  "Fuerza Popular": "Firmeza, seguridad y crecimiento económico",
  "Partido Patriótico del Perú": "Patria, soberanía y valores nacionales",
  "Partido Democrático Federal": "Unidad en la diversidad federal",
  "Partido Morado": "Innovación, transparencia y derechos humanos",
  "Juntos por el Perú": "La fuerza del pueblo organizado",
  "Libertad Popular": "Libertad, democracia y desarrollo",
  "Somos Perú": "Tradición, obras y desarrollo local",
  "Renovación Popular": "Renovación, valores cristianos y lucha anticorrupción",
  "Perú Primero": "El Perú siempre primero",
  "Un Camino Diferente": "Una nueva forma de hacer política",
  "Partido Primero La Gente": "Las personas primero, siempre",
  "Partido Ciudadanos por el Perú": "Ciudadanía activa y participativa",
  "Salvemos al Perú": "Rescatemos nuestro país unidos",
  "Frente de la Esperanza": "Esperanza, cambio y futuro",
  "Perú Libre": "Socialismo, justicia social y soberanía",
  "Podemos Perú": "Sí se puede, unidos logramos más",
  "Cooperación Popular": "Cooperación, solidaridad y desarrollo social",
  "Sí creo": "Creemos en el Perú y su gente",
  "Partido del Buen Gobierno": "Gobierno honesto, eficiente y transparente",
  "Partido Demócrata Unido Perú": "Unidad democrática para el desarrollo",
  "Fuerza y Libertad": "Fuerza para defender nuestra libertad",
  "Unidad Nacional": "Unidos por la reconciliación nacional",
  "Venceremos": "Hacia la victoria del Perú"
};

// Función para obtener propuestas reales de propuestasData.js
const obtenerPropuestasReales = (partido, cargo) => {
  const propuestasBase = propuestasPorPartido[partido] || [
    "Desarrollo económico sostenible",
    "Fortalecimiento institucional",
    "Bienestar social"
  ];
  
  // Agregar propuestas específicas por cargo
  const propuestasEspecificas = {
    "Presidente": [
      "Plan de gobierno integral",
      "Relaciones internacionales",
      "Política económica nacional",
      "Seguridad y defensa nacional"
    ],
    "Primer Vicepresidente": [
      "Apoyo al presidente",
      "Coordinación ministerial",
      "Proyectos especiales nacionales"
    ],
    "Segundo Vicepresidente": [
      "Relación con el congreso",
      "Desarrollo regional integral",
      "Proyectos sociales nacionales"
    ],
    "Congresista": [
      "Fiscalización eficiente",
      "Leyes para el desarrollo",
      "Representación distrital activa",
      "Control político"
    ],
    "Parlamentario Andino": [
      "Integración regional andina",
      "Políticas comunitarias",
      "Cooperación internacional",
      "Representación en organismos andinos"
    ]
  };
  
  return [...propuestasBase, ...(propuestasEspecificas[cargo] || [])];
};

// Datos iniciales de candidatos - Elecciones 2026
// ESTRUCTURA COMPLETA Y ESTANDARIZADA
export const initialCandidatos = [
  // ========== ACCIÓN POPULAR ==========
  // Lista 1: Julio Chávez
  {
    id: 1, nombre: "Julio Chávez", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 101, nombre: "María del Carmen Alva", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=27", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 102, nombre: "Luis Neyra", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=28", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 103, nombre: "Edgard Reymundo", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=29", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 104, nombre: "Flor Pablo", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=30", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 105, nombre: "Carlos Anderson", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=31", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 106, nombre: "Ana María Choquehuanca", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 107, nombre: "Jorge Montoya", partidoPolitico: "Acción Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  // Lista 2: Alfredo Barnechea
  {
    id: 2, nombre: "Alfredo Barnechea", partidoPolitico: "Acción Popular", numeroLista: "2", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 108, nombre: "Gustavo Rondón", partidoPolitico: "Acción Popular", numeroLista: "2", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=34", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  {
    id: 109, nombre: "Carmen Omonte", partidoPolitico: "Acción Popular", numeroLista: "2", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=35", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },
  // Lista 3: Víctor Andrés García Belaúnde
  {
    id: 3, nombre: "Víctor Andrés García Belaúnde", partidoPolitico: "Acción Popular", numeroLista: "3", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Acción Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Acción Popular"], colorPartido: COLORES_PARTIDOS["Acción Popular"]
  },

  // ========== AHORA NACIÓN ==========
  {
    id: 4, nombre: "Alfonso López Chau", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Presidente"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 5, nombre: "Luis Villanueva", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 6, nombre: "Ruth Buendía", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Congresista", distrito: "Junín", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Congresista"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 110, nombre: "Carlos Bruce", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=36", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Congresista"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 111, nombre: "María Elena Foronda", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=37", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Congresista"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 112, nombre: "Jorge del Castillo", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=38", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Congresista"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },
  {
    id: 113, nombre: "Luis Alberto Sánchez", partidoPolitico: "Ahora Nación", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=39", estado: "Activo",
    propuestas: obtenerPropuestasReales("Ahora Nación", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Ahora Nación"], colorPartido: COLORES_PARTIDOS["Ahora Nación"]
  },

  // ========== ALIANZA PARA EL PROGRESO ==========
  {
    id: 8, nombre: "César Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Presidente"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 9, nombre: "Jessica Tummi", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 10, nombre: "Alejandro Soto", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Congresista", distrito: "Piura", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Congresista"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 114, nombre: "José Elías Ávalos", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Congresista", distrito: "La Libertad", foto: "https://i.pravatar.cc/150?img=40", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Congresista"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 115, nombre: "Yessica Paniagua", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Congresista", distrito: "La Libertad", foto: "https://i.pravatar.cc/150?img=41", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Congresista"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 116, nombre: "Luis Yika", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lambayeque", foto: "https://i.pravatar.cc/150?img=42", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Congresista"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 117, nombre: "María Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=43", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },
  {
    id: 118, nombre: "Richard Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Alianza para el Progreso", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Alianza para el Progreso"], colorPartido: COLORES_PARTIDOS["Alianza para el Progreso"]
  },

  // ========== PAÍS PARA TODOS ==========
  {
    id: 11, nombre: "Carlos Álvarez", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Presidente"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },
  {
    id: 12, nombre: "María Chambizea", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },
  {
    id: 13, nombre: "Diego Guevara", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Congresista"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },
  {
    id: 119, nombre: "Giancarlo Vaccari", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=45", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Congresista"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },
  {
    id: 120, nombre: "María del Carmen Omonte", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=46", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Congresista"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },
  {
    id: 121, nombre: "Jorge Montoya", partidoPolitico: "País para Todos", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("País para Todos", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["País para Todos"], colorPartido: COLORES_PARTIDOS["País para Todos"]
  },

  // ========== AVANZA PAÍS ==========
  {
    id: 14, nombre: "Phillip Butters", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Presidente"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },
  {
    id: 15, nombre: "Fernán Altuve", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },
  {
    id: 16, nombre: "Karol Paredes", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Congresista"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },
  {
    id: 122, nombre: "Hernando Guerra García", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=48", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Congresista"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },
  {
    id: 123, nombre: "María Teresa Cabrera", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=49", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Congresista"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },
  {
    id: 124, nombre: "José Cueto", partidoPolitico: "Avanza País", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=50", estado: "Activo",
    propuestas: obtenerPropuestasReales("Avanza País", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Avanza País"], colorPartido: COLORES_PARTIDOS["Avanza País"]
  },

  // ========== INTEGRIDAD DEMOCRÁTICA ==========
  {
    id: 17, nombre: "Wolfgang Grozo", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Presidente"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },
  {
    id: 18, nombre: "Cecilia Azabache", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },
  {
    id: 19, nombre: "Wellington Prada", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Congresista"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },
  {
    id: 125, nombre: "Marco Arana", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Congresista"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },
  {
    id: 126, nombre: "Verónika Mendoza", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=52", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Congresista"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },
  {
    id: 127, nombre: "Alberto Quintanilla", partidoPolitico: "Integridad Democrática", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=53", estado: "Activo",
    propuestas: obtenerPropuestasReales("Integridad Democrática", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Integridad Democrática"], colorPartido: COLORES_PARTIDOS["Integridad Democrática"]
  },

  // ========== PARTIDO REGIONALISTA DE INTEGRACIÓN NACIONAL ==========
  {
    id: 20, nombre: "Walter Chirinos", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 128, nombre: "Antolin Huáscar", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=54", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 129, nombre: "Nadine Heredia", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=55", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 130, nombre: "Ollanta Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=56", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 131, nombre: "Liliana Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 132, nombre: "Yehude Simon", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=57", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },
  {
    id: 21, nombre: "Liliana Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "2", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Regionalista de Integración Nacional", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Regionalista de Integración Nacional"], colorPartido: COLORES_PARTIDOS["Partido Regionalista de Integración Nacional"]
  },

  // ========== FE EN EL PERÚ ==========
  {
    id: 22, nombre: "Álvaro Paz de la Barra", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },
  {
    id: 23, nombre: "Yessika Arteaga", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },
  {
    id: 24, nombre: "Shella Palacios", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },
  {
    id: 133, nombre: "José Luna", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=58", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },
  {
    id: 134, nombre: "María del Carmen Alva", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=59", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },
  {
    id: 135, nombre: "Carlos Bruce", partidoPolitico: "Fe en el Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=60", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fe en el Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Fe en el Perú"], colorPartido: COLORES_PARTIDOS["Fe en el Perú"]
  },

  // ========== FUERZA POPULAR ==========
  {
    id: 25, nombre: "Keiko Fujimori", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Presidente", foto: "https://th.bing.com/th/id/OIP.ddPYxi-__M7x8dLIYqcTxQHaJS?w=130&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 26, nombre: "Miki Torres", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 27, nombre: "Luis Galarreta", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 136, nombre: "Kenji Fujimori", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=61", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 137, nombre: "Martha Chávez", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=62", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 138, nombre: "Lourdes Alcorta", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=63", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 139, nombre: "Carlos Tubino", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=64", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 140, nombre: "Rosa Bartra", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=65", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },
  {
    id: 141, nombre: "Luis Yika", partidoPolitico: "Fuerza Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=66", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Fuerza Popular"], colorPartido: COLORES_PARTIDOS["Fuerza Popular"]
  },

  // ========== PARTIDO PATRIÓTICO DEL PERÚ ==========
  {
    id: 28, nombre: "Herbert Caller", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },
  {
    id: 29, nombre: "Rossana Montes", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },
  {
    id: 30, nombre: "Jorge Carcovich", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },
  {
    id: 142, nombre: "Daniel Salaverry", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=67", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },
  {
    id: 143, nombre: "María del Carmen Alva", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },
  {
    id: 144, nombre: "José Luna", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=69", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Patriótico del Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Patriótico del Perú"], colorPartido: COLORES_PARTIDOS["Partido Patriótico del Perú"]
  },

  // ========== PARTIDO DEMOCRÁTICO FEDERAL ==========
  {
    id: 31, nombre: "Armando Massé", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },
  {
    id: 32, nombre: "Virgilio Acuña", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },
  {
    id: 33, nombre: "Lidia Lourdes", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },
  {
    id: 145, nombre: "Marco Arana", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=70", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },
  {
    id: 146, nombre: "Verónika Mendoza", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=71", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },
  {
    id: 147, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=72", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Democrático Federal", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Democrático Federal"], colorPartido: COLORES_PARTIDOS["Partido Democrático Federal"]
  },

  // ========== PARTIDO MORADO ==========
  // Lista 1
  {
    id: 34, nombre: "Messias Guevara", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 35, nombre: "Herber Cueva", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 36, nombre: "Marisol Liñán", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 148, nombre: "Gino Costa", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=73", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 149, nombre: "Alberto de Belaunde", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=74", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 150, nombre: "Maricarmen Alva", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=75", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 151, nombre: "Gino Costa", partidoPolitico: "Partido Morado", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=76", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  // Lista 2
  {
    id: 37, nombre: "Richard Arce", partidoPolitico: "Partido Morado", numeroLista: "2", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 38, nombre: "Ronnie Jurado", partidoPolitico: "Partido Morado", numeroLista: "2", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },
  {
    id: 39, nombre: "Frida Ríos", partidoPolitico: "Partido Morado", numeroLista: "2", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Morado", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Morado"], colorPartido: COLORES_PARTIDOS["Partido Morado"]
  },

  // ========== JUNTOS POR EL PERÚ ==========
  {
    id: 40, nombre: "Roberto Sánchez", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 41, nombre: "Analí Marquez", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 42, nombre: "Brígida Curo", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 152, nombre: "Marco Arana", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=77", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 153, nombre: "Verónika Mendoza", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=78", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 154, nombre: "Alberto Quintanilla", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Puno", foto: "https://i.pravatar.cc/150?img=79", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 155, nombre: "Marco Arana", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=80", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },
  {
    id: 156, nombre: "Verónika Mendoza", partidoPolitico: "Juntos por el Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=81", estado: "Activo",
    propuestas: obtenerPropuestasReales("Juntos por el Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Juntos por el Perú"], colorPartido: COLORES_PARTIDOS["Juntos por el Perú"]
  },

  // ========== LIBERTAD POPULAR ==========
  {
    id: 43, nombre: "Rafael Belaúnde Llosa", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },
  {
    id: 44, nombre: "Pedro Cateriano", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },
  {
    id: 45, nombre: "Tania Porles", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },
  {
    id: 157, nombre: "Mario Vargas Llosa", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=82", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },
  {
    id: 158, nombre: "Alberto de Belaunde", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=83", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },
  {
    id: 159, nombre: "Gino Costa", partidoPolitico: "Libertad Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=84", estado: "Activo",
    propuestas: obtenerPropuestasReales("Libertad Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Libertad Popular"], colorPartido: COLORES_PARTIDOS["Libertad Popular"]
  },

  // ========== SOMOS PERÚ ==========
  {
    id: 50, nombre: "George Forsyth", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },
  {
    id: 168, nombre: "Luis Castañeda", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=93", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },
  {
    id: 169, nombre: "Patricia Juárez", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=94", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },
  {
    id: 170, nombre: "Yehude Simon", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lambayeque", foto: "https://i.pravatar.cc/150?img=95", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },
  {
    id: 171, nombre: "Patricia Juárez", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=96", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },
  {
    id: 172, nombre: "Luis Castañeda Lossio", partidoPolitico: "Somos Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=97", estado: "Activo",
    propuestas: obtenerPropuestasReales("Somos Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Somos Perú"], colorPartido: COLORES_PARTIDOS["Somos Perú"]
  },

  // ========== RENOVACIÓN POPULAR ==========
  {
    id: 51, nombre: "Rafael López Aliaga", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 52, nombre: "Norma Yarrow", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 53, nombre: "Jhon Ramos Malpica", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 173, nombre: "Alejandro Cavero", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=98", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 174, nombre: "José Cueto", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=99", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 175, nombre: "Hernando Guerra García", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=100", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 176, nombre: "Alejandro Cavero", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=1", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },
  {
    id: 177, nombre: "José Cueto", partidoPolitico: "Renovación Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=2", estado: "Activo",
    propuestas: obtenerPropuestasReales("Renovación Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Renovación Popular"], colorPartido: COLORES_PARTIDOS["Renovación Popular"]
  },

  // ========== PERÚ PRIMERO ==========
  {
    id: 54, nombre: "Mario Vizcarra", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Presidente"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },
  {
    id: 55, nombre: "Martín Vizcarra", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },
  {
    id: 56, nombre: "Judith Mendoza", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },
  {
    id: 178, nombre: "Mercedes Aráoz", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=3", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },
  {
    id: 179, nombre: "Pedro Olaechea", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=4", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },
  {
    id: 180, nombre: "Mercedes Aráoz", partidoPolitico: "Perú Primero", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=5", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Primero", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Perú Primero"], colorPartido: COLORES_PARTIDOS["Perú Primero"]
  },

  // ========== UN CAMINO DIFERENTE ==========
  {
    id: 57, nombre: "Rosario Fernández", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Presidente"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },
  {
    id: 58, nombre: "Arturo Fernández", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },
  {
    id: 59, nombre: "Anita Carnero", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Congresista"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },
  {
    id: 181, nombre: "Marco Arana", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=6", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Congresista"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },
  {
    id: 182, nombre: "Verónika Mendoza", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=7", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Congresista"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },
  {
    id: 183, nombre: "Alberto Quintanilla", partidoPolitico: "Un Camino Diferente", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=8", estado: "Activo",
    propuestas: obtenerPropuestasReales("Un Camino Diferente", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Un Camino Diferente"], colorPartido: COLORES_PARTIDOS["Un Camino Diferente"]
  },

  // ========== PARTIDO PRIMERO LA GENTE ==========
  // Lista 1
  {
    id: 60, nombre: "Miguel del Castillo", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 61, nombre: "Luis Machicao", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 62, nombre: "Rocío Pizarro", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 184, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=9", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 185, nombre: "Raúl Molina", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=10", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 186, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=11", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  // Lista 2
  {
    id: 63, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 64, nombre: "Raúl Molina", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },
  {
    id: 65, nombre: "Manuel Ato", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Primero La Gente", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Primero La Gente"], colorPartido: COLORES_PARTIDOS["Partido Primero La Gente"]
  },

  // ========== PARTIDO CIUDADANOS POR EL PERÚ ==========
  {
    id: 66, nombre: "Morgan Quero", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },
  {
    id: 67, nombre: "Alberto Moreno", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },
  {
    id: 68, nombre: "Melanie Herrera", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },
  {
    id: 187, nombre: "Marco Arana", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=13", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },
  {
    id: 188, nombre: "Verónika Mendoza", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=14", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },
  {
    id: 189, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=15", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Ciudadanos por el Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Ciudadanos por el Perú"], colorPartido: COLORES_PARTIDOS["Partido Ciudadanos por el Perú"]
  },

  // ========== SALVEMOS AL PERÚ ==========
  {
    id: 69, nombre: "Mariano González", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },
  {
    id: 70, nombre: "Gilbert Portugal", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },
  {
    id: 71, nombre: "Katherine Ramírez", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },
  {
    id: 190, nombre: "Marco Arana", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=16", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },
  {
    id: 191, nombre: "Verónika Mendoza", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=17", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },
  {
    id: 192, nombre: "Alberto Quintanilla", partidoPolitico: "Salvemos al Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=18", estado: "Activo",
    propuestas: obtenerPropuestasReales("Salvemos al Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Salvemos al Perú"], colorPartido: COLORES_PARTIDOS["Salvemos al Perú"]
  },

  // ========== FRENTE DE LA ESPERANZA ==========
  {
    id: 72, nombre: "Fernando Olivera", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Presidente"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },
  {
    id: 73, nombre: "Elizabeth León", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },
  {
    id: 74, nombre: "Carlos Cuaresma", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Congresista"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },
  {
    id: 193, nombre: "Marco Arana", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=19", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Congresista"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },
  {
    id: 194, nombre: "Verónika Mendoza", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Congresista"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },
  {
    id: 195, nombre: "Alberto Quintanilla", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=21", estado: "Activo",
    propuestas: obtenerPropuestasReales("Frente de la Esperanza", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Frente de la Esperanza"], colorPartido: COLORES_PARTIDOS["Frente de la Esperanza"]
  },

  // ========== PERÚ LIBRE ==========
  {
    id: 75, nombre: "Vladimir Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Presidente"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 76, nombre: "Flavio Cruz", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 77, nombre: "Bertha Rojas", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 196, nombre: "Guido Bellido", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=22", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 197, nombre: "Waldemar Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Congresista", distrito: "Junín", foto: "https://i.pravatar.cc/150?img=23", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 198, nombre: "Héctor Valer", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=24", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Congresista"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 199, nombre: "Guido Bellido", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=25", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },
  {
    id: 200, nombre: "Waldemar Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Perú Libre", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Perú Libre"], colorPartido: COLORES_PARTIDOS["Perú Libre"]
  },

  // ========== PODEMOS PERÚ ==========
  {
    id: 78, nombre: "José Luna Gálvez", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 79, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 80, nombre: "Raúl Noblecilla", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 201, nombre: "José Luna", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=27", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 202, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=28", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 203, nombre: "Raúl Noblecilla", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=29", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 204, nombre: "José Luna", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=30", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },
  {
    id: 205, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=31", estado: "Activo",
    propuestas: obtenerPropuestasReales("Podemos Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Podemos Perú"], colorPartido: COLORES_PARTIDOS["Podemos Perú"]
  },

  // ========== COOPERACIÓN POPULAR ==========
  {
    id: 81, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Presidente"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },
  {
    id: 82, nombre: "Vanessa Lazo", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },
  {
    id: 83, nombre: "Carmela Salazar", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },
  {
    id: 206, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },
  {
    id: 207, nombre: "Vanessa Lazo", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Congresista"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },
  {
    id: 208, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=34", estado: "Activo",
    propuestas: obtenerPropuestasReales("Cooperación Popular", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Cooperación Popular"], colorPartido: COLORES_PARTIDOS["Cooperación Popular"]
  },

  // ========== SÍ CREO ==========
  {
    id: 84, nombre: "Carlos Espá", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Presidente"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },
  {
    id: 85, nombre: "Alejandro Santa María", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },
  {
    id: 86, nombre: "Melitza Yanzich", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Congresista"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },
  {
    id: 209, nombre: "Marco Arana", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=35", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Congresista"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },
  {
    id: 210, nombre: "Verónika Mendoza", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=36", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Congresista"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },
  {
    id: 211, nombre: "Alberto Quintanilla", partidoPolitico: "Sí creo", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=37", estado: "Activo",
    propuestas: obtenerPropuestasReales("Sí creo", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Sí creo"], colorPartido: COLORES_PARTIDOS["Sí creo"]
  },

  // ========== PARTIDO DEL BUEN GOBIERNO ==========
  {
    id: 87, nombre: "Jorge Nieto", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },
  {
    id: 88, nombre: "Susana Matute", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },
  {
    id: 89, nombre: "Carlos Caballero", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },
  {
    id: 212, nombre: "Marco Arana", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=38", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },
  {
    id: 213, nombre: "Verónika Mendoza", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=39", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },
  {
    id: 214, nombre: "Alberto Quintanilla", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=40", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido del Buen Gobierno", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido del Buen Gobierno"], colorPartido: COLORES_PARTIDOS["Partido del Buen Gobierno"]
  },

  // ========== PARTIDO DEMÓCRATA UNIDO PERÚ ==========
  {
    id: 90, nombre: "Charlie Carrasco", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Presidente"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },
  {
    id: 91, nombre: "María Paredes Verdi", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },
  {
    id: 92, nombre: "Wilbert Segovia", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },
  {
    id: 215, nombre: "Marco Arana", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=41", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },
  {
    id: 216, nombre: "Verónika Mendoza", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=42", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Congresista"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },
  {
    id: 217, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=43", estado: "Activo",
    propuestas: obtenerPropuestasReales("Partido Demócrata Unido Perú", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Partido Demócrata Unido Perú"], colorPartido: COLORES_PARTIDOS["Partido Demócrata Unido Perú"]
  },

  // ========== FUERZA Y LIBERTAD ==========
  {
    id: 93, nombre: "Fiorella Molinelli", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Presidente"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },
  {
    id: 94, nombre: "Gilbert Violeta", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },
  {
    id: 95, nombre: "Mariona Pariona", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },
  {
    id: 218, nombre: "Marco Arana", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },
  {
    id: 219, nombre: "Verónika Mendoza", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=45", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Congresista"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },
  {
    id: 220, nombre: "Alberto Quintanilla", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=46", estado: "Activo",
    propuestas: obtenerPropuestasReales("Fuerza y Libertad", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Fuerza y Libertad"], colorPartido: COLORES_PARTIDOS["Fuerza y Libertad"]
  },

  // ========== UNIDAD NACIONAL ==========
  {
    id: 96, nombre: "Roberto Chiabra", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Presidente"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 97, nombre: "Javier Bedoya", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Primer Vicepresidente"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 98, nombre: "Neldy Mendoza", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 221, nombre: "Lourdes Flores", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 222, nombre: "Rafael Rey", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=48", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Congresista"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 223, nombre: "Lourdes Flores", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=49", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  },
  {
    id: 224, nombre: "Rafael Rey", partidoPolitico: "Unidad Nacional", numeroLista: "1", 
    cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=50", estado: "Activo",
    propuestas: obtenerPropuestasReales("Unidad Nacional", "Parlamentario Andino"),
    lema: LEMAS_PARTIDOS["Unidad Nacional"], colorPartido: COLORES_PARTIDOS["Unidad Nacional"]
  }
];

// Función auxiliar para verificar IDs únicos y datos
export const verificarIntegridadDatos = () => {
  console.log('🔍 Verificando integridad de datos...');
  
  // Verificar IDs únicos
  const ids = initialCandidatos.map(c => c.id);
  const duplicados = ids.filter((id, index) => ids.indexOf(id) !== index);
  
  if (duplicados.length > 0) {
    console.error('❌ IDs duplicados encontrados:', duplicados);
    return false;
  }
  
  // Verificar que todos los partidos tengan propuestas
  const partidos = [...new Set(initialCandidatos.map(c => c.partidoPolitico))];
  const partidosSinPropuestas = partidos.filter(partido => !propuestasPorPartido[partido]);
  
  if (partidosSinPropuestas.length > 0) {
    console.warn('⚠️ Partidos sin propuestas definidas:', partidosSinPropuestas);
  }
  
  // Verificar estructura de datos
  const candidatosInvalidos = initialCandidatos.filter(c => 
    !c.id || !c.nombre || !c.partidoPolitico || !c.cargo
  );
  
  if (candidatosInvalidos.length > 0) {
    console.error('❌ Candidatos con datos incompletos:', candidatosInvalidos.length);
    return false;
  }
  
  console.log('✅ Verificación exitosa:');
  console.log(`   - Total candidatos: ${initialCandidatos.length}`);
  console.log(`   - Partidos políticos: ${partidos.length}`);
  console.log(`   - IDs únicos: ${new Set(ids).size}`);
  
  return true;
};

// Función para obtener candidatos por partido
export const obtenerCandidatosPorPartido = (partido) => {
  return initialCandidatos.filter(c => c.partidoPolitico === partido);
};

// Función para obtener candidatos por cargo
export const obtenerCandidatosPorCargo = (cargo) => {
  return initialCandidatos.filter(c => c.cargo === cargo && c.estado === "Activo");
};

// Función para buscar candidatos
export const buscarCandidatos = (termino) => {
  return initialCandidatos.filter(c => 
    c.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    c.partidoPolitico.toLowerCase().includes(termino.toLowerCase()) ||
    (c.distrito && c.distrito.toLowerCase().includes(termino.toLowerCase()))
  );
};

// Verificar integridad al cargar el módulo
verificarIntegridadDatos();