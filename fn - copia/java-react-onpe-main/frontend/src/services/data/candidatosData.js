/**
 * Datos iniciales de candidatos electorales - Elecciones 2026
 * 
 * Este archivo contiene todos los datos de candidatos organizados por partido político.
 * Cada partido tiene su estructura completa: presidente, vicepresidentes, congresistas y parlamentarios andinos.
 */

// Datos iniciales de candidatos - Elecciones 2026
// Organizados por partido político con estructura completa
export const initialCandidatos = [
  // ========== ACCIÓN POPULAR ==========
  // Lista 1: Julio Chávez
  { id: 1, nombre: "Julio Chávez", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 101, nombre: "María del Carmen Alva", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=27", estado: "Activo" },
  { id: 102, nombre: "Luis Neyra", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=28", estado: "Activo" },
  { id: 103, nombre: "Edgard Reymundo", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=29", estado: "Activo" },
  { id: 104, nombre: "Flor Pablo", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=30", estado: "Activo" },
  { id: 105, nombre: "Carlos Anderson", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=31", estado: "Activo" },
  { id: 106, nombre: "Ana María Choquehuanca", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 107, nombre: "Jorge Montoya", partidoPolitico: "Acción Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  // Lista 2: Alfredo Barnechea
  { id: 2, nombre: "Alfredo Barnechea", partidoPolitico: "Acción Popular", numeroLista: "2", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 108, nombre: "Gustavo Rondón", partidoPolitico: "Acción Popular", numeroLista: "2", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=34", estado: "Activo" },
  { id: 109, nombre: "Carmen Omonte", partidoPolitico: "Acción Popular", numeroLista: "2", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=35", estado: "Activo" },
  // Lista 3: Víctor Andrés García Belaúnde
  { id: 3, nombre: "Víctor Andrés García Belaúnde", partidoPolitico: "Acción Popular", numeroLista: "3", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },

  // ========== AHORA NACIÓN ==========
  { id: 4, nombre: "Alfonso López Chau", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 5, nombre: "Luis Villanueva", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 6, nombre: "Ruth Buendía", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Congresista", distrito: "Junín", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 110, nombre: "Carlos Bruce", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=36", estado: "Activo" },
  { id: 111, nombre: "María Elena Foronda", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=37", estado: "Activo" },
  { id: 112, nombre: "Jorge del Castillo", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=38", estado: "Activo" },
  { id: 113, nombre: "Luis Alberto Sánchez", partidoPolitico: "Ahora Nación", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=39", estado: "Activo" },

  // ========== ALIANZA PARA EL PROGRESO ==========
  { id: 8, nombre: "César Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 9, nombre: "Jessica Tummi", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 10, nombre: "Alejandro Soto", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Congresista", distrito: "Piura", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 114, nombre: "José Elías Ávalos", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Congresista", distrito: "La Libertad", foto: "https://i.pravatar.cc/150?img=40", estado: "Activo" },
  { id: 115, nombre: "Yessica Paniagua", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Congresista", distrito: "La Libertad", foto: "https://i.pravatar.cc/150?img=41", estado: "Activo" },
  { id: 116, nombre: "Luis Yika", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Congresista", distrito: "Lambayeque", foto: "https://i.pravatar.cc/150?img=42", estado: "Activo" },
  { id: 117, nombre: "María Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=43", estado: "Activo" },
  { id: 118, nombre: "Richard Acuña", partidoPolitico: "Alianza para el Progreso", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },

  // ========== PAÍS PARA TODOS ==========
  { id: 11, nombre: "Carlos Álvarez", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 12, nombre: "María Chambizea", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 13, nombre: "Diego Guevara", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 119, nombre: "Giancarlo Vaccari", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=45", estado: "Activo" },
  { id: 120, nombre: "María del Carmen Omonte", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=46", estado: "Activo" },
  { id: 121, nombre: "Jorge Montoya", partidoPolitico: "País para Todos", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },

  // ========== AVANZA PAÍS ==========
  { id: 14, nombre: "Phillip Butters", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 15, nombre: "Fernán Altuve", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 16, nombre: "Karol Paredes", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 122, nombre: "Hernando Guerra García", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=48", estado: "Activo" },
  { id: 123, nombre: "María Teresa Cabrera", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=49", estado: "Activo" },
  { id: 124, nombre: "José Cueto", partidoPolitico: "Avanza País", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=50", estado: "Activo" },

  // ========== INTEGRIDAD DEMOCRÁTICA ==========
  { id: 17, nombre: "Wolfgang Grozo", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 18, nombre: "Cecilia Azabache", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 19, nombre: "Wellington Prada", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 125, nombre: "Marco Arana", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 126, nombre: "Verónika Mendoza", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=52", estado: "Activo" },
  { id: 127, nombre: "Alberto Quintanilla", partidoPolitico: "Integridad Democrática", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=53", estado: "Activo" },

  // ========== PARTIDO REGIONALISTA DE INTEGRACIÓN NACIONAL ==========
  { id: 20, nombre: "Walter Chirinos", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 128, nombre: "Antolin Huáscar", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=54", estado: "Activo" },
  { id: 129, nombre: "Nadine Heredia", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=55", estado: "Activo" },
  { id: 130, nombre: "Ollanta Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=56", estado: "Activo" },
  { id: 131, nombre: "Liliana Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 132, nombre: "Yehude Simon", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=57", estado: "Activo" },
  { id: 21, nombre: "Liliana Humala", partidoPolitico: "Partido Regionalista de Integración Nacional", numeroLista: "2", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },

  // ========== FE EN EL PERÚ ==========
  { id: 22, nombre: "Álvaro Paz de la Barra", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 23, nombre: "Yessika Arteaga", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 24, nombre: "Shella Palacios", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 133, nombre: "José Luna", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=58", estado: "Activo" },
  { id: 134, nombre: "María del Carmen Alva", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=59", estado: "Activo" },
  { id: 135, nombre: "Carlos Bruce", partidoPolitico: "Fe en el Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=60", estado: "Activo" },

  // ========== FUERZA POPULAR ==========
  { id: 25, nombre: "Keiko Fujimori", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Presidente", foto: "https://th.bing.com/th/id/OIP.ddPYxi-__M7x8dLIYqcTxQHaJS?w=130&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1", estado: "Activo" },
  { id: 26, nombre: "Miki Torres", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 27, nombre: "Luis Galarreta", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 136, nombre: "Kenji Fujimori", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=61", estado: "Activo" },
  { id: 137, nombre: "Martha Chávez", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=62", estado: "Activo" },
  { id: 138, nombre: "Lourdes Alcorta", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=63", estado: "Activo" },
  { id: 139, nombre: "Carlos Tubino", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=64", estado: "Activo" },
  { id: 140, nombre: "Rosa Bartra", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=65", estado: "Activo" },
  { id: 141, nombre: "Luis Yika", partidoPolitico: "Fuerza Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=66", estado: "Activo" },

  // ========== PARTIDO PATRIÓTICO DEL PERÚ ==========
  { id: 28, nombre: "Herbert Caller", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 29, nombre: "Rossana Montes", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 30, nombre: "Jorge Carcovich", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 142, nombre: "Daniel Salaverry", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=67", estado: "Activo" },
  { id: 143, nombre: "María del Carmen Alva", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 144, nombre: "José Luna", partidoPolitico: "Partido Patriótico del Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=69", estado: "Activo" },

  // ========== PARTIDO DEMOCRÁTICO FEDERAL ==========
  { id: 31, nombre: "Armando Massé", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 32, nombre: "Virgilio Acuña", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 33, nombre: "Lidia Lourdes", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 145, nombre: "Marco Arana", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=70", estado: "Activo" },
  { id: 146, nombre: "Verónika Mendoza", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=71", estado: "Activo" },
  { id: 147, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Democrático Federal", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=72", estado: "Activo" },

  // ========== PARTIDO MORADO ==========
  // Lista 1
  { id: 34, nombre: "Messias Guevara", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 35, nombre: "Herber Cueva", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 36, nombre: "Marisol Liñán", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 148, nombre: "Gino Costa", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=73", estado: "Activo" },
  { id: 149, nombre: "Alberto de Belaunde", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=74", estado: "Activo" },
  { id: 150, nombre: "Maricarmen Alva", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=75", estado: "Activo" },
  { id: 151, nombre: "Gino Costa", partidoPolitico: "Partido Morado", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=76", estado: "Activo" },
  // Lista 2
  { id: 37, nombre: "Richard Arce", partidoPolitico: "Partido Morado", numeroLista: "2", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 38, nombre: "Ronnie Jurado", partidoPolitico: "Partido Morado", numeroLista: "2", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 39, nombre: "Frida Ríos", partidoPolitico: "Partido Morado", numeroLista: "2", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },

  // ========== JUNTOS POR EL PERÚ ==========
  { id: 40, nombre: "Roberto Sánchez", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 41, nombre: "Analí Marquez", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 42, nombre: "Brígida Curo", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 152, nombre: "Marco Arana", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=77", estado: "Activo" },
  { id: 153, nombre: "Verónika Mendoza", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=78", estado: "Activo" },
  { id: 154, nombre: "Alberto Quintanilla", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Puno", foto: "https://i.pravatar.cc/150?img=79", estado: "Activo" },
  { id: 155, nombre: "Marco Arana", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=80", estado: "Activo" },
  { id: 156, nombre: "Verónika Mendoza", partidoPolitico: "Juntos por el Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=81", estado: "Activo" },

  // ========== LIBERTAD POPULAR ==========
  { id: 43, nombre: "Rafael Belaúnde Llosa", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 44, nombre: "Pedro Cateriano", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 45, nombre: "Tania Porles", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 157, nombre: "Mario Vargas Llosa", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=82", estado: "Activo" },
  { id: 158, nombre: "Alberto de Belaunde", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=83", estado: "Activo" },
  { id: 159, nombre: "Gino Costa", partidoPolitico: "Libertad Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=84", estado: "Activo" },

  // ========== SOMOS PERÚ ==========
  { id: 50, nombre: "George Forsyth", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 168, nombre: "Luis Castañeda", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=93", estado: "Activo" },
  { id: 169, nombre: "Patricia Juárez", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=94", estado: "Activo" },
  { id: 170, nombre: "Yehude Simon", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lambayeque", foto: "https://i.pravatar.cc/150?img=95", estado: "Activo" },
  { id: 171, nombre: "Patricia Juárez", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=96", estado: "Activo" },
  { id: 172, nombre: "Luis Castañeda Lossio", partidoPolitico: "Somos Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=97", estado: "Activo" },

  // ========== RENOVACIÓN POPULAR ==========
  { id: 51, nombre: "Rafael López Aliaga", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 52, nombre: "Norma Yarrow", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 53, nombre: "Jhon Ramos Malpica", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 173, nombre: "Alejandro Cavero", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=98", estado: "Activo" },
  { id: 174, nombre: "José Cueto", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=99", estado: "Activo" },
  { id: 175, nombre: "Hernando Guerra García", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=100", estado: "Activo" },
  { id: 176, nombre: "Alejandro Cavero", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=1", estado: "Activo" },
  { id: 177, nombre: "José Cueto", partidoPolitico: "Renovación Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=2", estado: "Activo" },

  // ========== PERÚ PRIMERO ==========
  { id: 54, nombre: "Mario Vizcarra", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 55, nombre: "Martín Vizcarra", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 56, nombre: "Judith Mendoza", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 178, nombre: "Mercedes Aráoz", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=3", estado: "Activo" },
  { id: 179, nombre: "Pedro Olaechea", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=4", estado: "Activo" },
  { id: 180, nombre: "Mercedes Aráoz", partidoPolitico: "Perú Primero", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=5", estado: "Activo" },

  // ========== UN CAMINO DIFERENTE ==========
  { id: 57, nombre: "Rosario Fernández", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 58, nombre: "Arturo Fernández", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 59, nombre: "Anita Carnero", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 181, nombre: "Marco Arana", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=6", estado: "Activo" },
  { id: 182, nombre: "Verónika Mendoza", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=7", estado: "Activo" },
  { id: 183, nombre: "Alberto Quintanilla", partidoPolitico: "Un Camino Diferente", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=8", estado: "Activo" },

  // ========== PARTIDO PRIMERO LA GENTE ==========
  // Lista 1
  { id: 60, nombre: "Miguel del Castillo", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 61, nombre: "Luis Machicao", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 62, nombre: "Rocío Pizarro", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 184, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=9", estado: "Activo" },
  { id: 185, nombre: "Raúl Molina", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=10", estado: "Activo" },
  { id: 186, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=11", estado: "Activo" },
  // Lista 2
  { id: 63, nombre: "Marisol Pérez Tello", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 64, nombre: "Raúl Molina", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 65, nombre: "Manuel Ato", partidoPolitico: "Partido Primero La Gente", numeroLista: "2", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },

  // ========== PARTIDO CIUDADANOS POR EL PERÚ ==========
  { id: 66, nombre: "Morgan Quero", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 67, nombre: "Alberto Moreno", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 68, nombre: "Melanie Herrera", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 187, nombre: "Marco Arana", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=13", estado: "Activo" },
  { id: 188, nombre: "Verónika Mendoza", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=14", estado: "Activo" },
  { id: 189, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Ciudadanos por el Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=15", estado: "Activo" },

  // ========== SALVEMOS AL PERÚ ==========
  { id: 69, nombre: "Mariano González", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 70, nombre: "Gilbert Portugal", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 71, nombre: "Katherine Ramírez", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 190, nombre: "Marco Arana", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=16", estado: "Activo" },
  { id: 191, nombre: "Verónika Mendoza", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=17", estado: "Activo" },
  { id: 192, nombre: "Alberto Quintanilla", partidoPolitico: "Salvemos al Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=18", estado: "Activo" },

  // ========== FRENTE DE LA ESPERANZA ==========
  { id: 72, nombre: "Fernando Olivera", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 73, nombre: "Elizabeth León", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 74, nombre: "Carlos Cuaresma", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 193, nombre: "Marco Arana", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=19", estado: "Activo" },
  { id: 194, nombre: "Verónika Mendoza", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 195, nombre: "Alberto Quintanilla", partidoPolitico: "Frente de la Esperanza", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=21", estado: "Activo" },

  // ========== PERÚ LIBRE ==========
  { id: 75, nombre: "Vladimir Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 76, nombre: "Flavio Cruz", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 77, nombre: "Bertha Rojas", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 196, nombre: "Guido Bellido", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=22", estado: "Activo" },
  { id: 197, nombre: "Waldemar Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Congresista", distrito: "Junín", foto: "https://i.pravatar.cc/150?img=23", estado: "Activo" },
  { id: 198, nombre: "Héctor Valer", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=24", estado: "Activo" },
  { id: 199, nombre: "Guido Bellido", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=25", estado: "Activo" },
  { id: 200, nombre: "Waldemar Cerrón", partidoPolitico: "Perú Libre", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },

  // ========== PODEMOS PERÚ ==========
  { id: 78, nombre: "José Luna Gálvez", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 79, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 80, nombre: "Raúl Noblecilla", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 201, nombre: "José Luna", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=27", estado: "Activo" },
  { id: 202, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=28", estado: "Activo" },
  { id: 203, nombre: "Raúl Noblecilla", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=29", estado: "Activo" },
  { id: 204, nombre: "José Luna", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=30", estado: "Activo" },
  { id: 205, nombre: "Cecilia García", partidoPolitico: "Podemos Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=31", estado: "Activo" },

  // ========== COOPERACIÓN POPULAR ==========
  { id: 81, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 82, nombre: "Vanessa Lazo", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 83, nombre: "Carmela Salazar", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 206, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 207, nombre: "Vanessa Lazo", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 208, nombre: "Yonhy Lescano", partidoPolitico: "Cooperación Popular", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=34", estado: "Activo" },

  // ========== SÍ CREO ==========
  { id: 84, nombre: "Carlos Espá", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 85, nombre: "Alejandro Santa María", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 86, nombre: "Melitza Yanzich", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 209, nombre: "Marco Arana", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=35", estado: "Activo" },
  { id: 210, nombre: "Verónika Mendoza", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=36", estado: "Activo" },
  { id: 211, nombre: "Alberto Quintanilla", partidoPolitico: "Sí creo", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=37", estado: "Activo" },

  // ========== PARTIDO DEL BUEN GOBIERNO ==========
  { id: 87, nombre: "Jorge Nieto", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 88, nombre: "Susana Matute", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 89, nombre: "Carlos Caballero", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Congresista", distrito: "Arequipa", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 212, nombre: "Marco Arana", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=38", estado: "Activo" },
  { id: 213, nombre: "Verónika Mendoza", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=39", estado: "Activo" },
  { id: 214, nombre: "Alberto Quintanilla", partidoPolitico: "Partido del Buen Gobierno", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=40", estado: "Activo" },

  // ========== PARTIDO DEMÓCRATA UNIDO PERÚ ==========
  { id: 90, nombre: "Charlie Carrasco", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=20", estado: "Activo" },
  { id: 91, nombre: "María Paredes Verdi", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=12", estado: "Activo" },
  { id: 92, nombre: "Wilbert Segovia", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=33", estado: "Activo" },
  { id: 215, nombre: "Marco Arana", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=41", estado: "Activo" },
  { id: 216, nombre: "Verónika Mendoza", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=42", estado: "Activo" },
  { id: 217, nombre: "Alberto Quintanilla", partidoPolitico: "Partido Demócrata Unido Perú", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=43", estado: "Activo" },

  // ========== FUERZA Y LIBERTAD ==========
  { id: 93, nombre: "Fiorella Molinelli", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=26", estado: "Activo" },
  { id: 94, nombre: "Gilbert Violeta", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=32", estado: "Activo" },
  { id: 95, nombre: "Mariona Pariona", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Congresista", distrito: "Ayacucho", foto: "https://i.pravatar.cc/150?img=68", estado: "Activo" },
  { id: 218, nombre: "Marco Arana", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Congresista", distrito: "Cajamarca", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 219, nombre: "Verónika Mendoza", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Congresista", distrito: "Cusco", foto: "https://i.pravatar.cc/150?img=45", estado: "Activo" },
  { id: 220, nombre: "Alberto Quintanilla", partidoPolitico: "Fuerza y Libertad", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=46", estado: "Activo" },

  // ========== UNIDAD NACIONAL ==========
  { id: 96, nombre: "Roberto Chiabra", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Presidente", foto: "https://i.pravatar.cc/150?img=44", estado: "Activo" },
  { id: 97, nombre: "Javier Bedoya", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Primer Vicepresidente", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 98, nombre: "Neldy Mendoza", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Callao", foto: "https://i.pravatar.cc/150?img=51", estado: "Activo" },
  { id: 221, nombre: "Lourdes Flores", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=47", estado: "Activo" },
  { id: 222, nombre: "Rafael Rey", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Congresista", distrito: "Lima", foto: "https://i.pravatar.cc/150?img=48", estado: "Activo" },
  { id: 223, nombre: "Lourdes Flores", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=49", estado: "Activo" },
  { id: 224, nombre: "Rafael Rey", partidoPolitico: "Unidad Nacional", numeroLista: "1", cargo: "Parlamentario Andino", foto: "https://i.pravatar.cc/150?img=50", estado: "Activo" },

];

