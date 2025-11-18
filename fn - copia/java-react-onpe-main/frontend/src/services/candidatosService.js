
import { initialCandidatos } from './data/candidatosData';
import { propuestasPorPartido } from './data/propuestasData';

// Configuración de la API - ajusta la URL según tu backend Java
const API_BASE = ''; // ajusta el puerto

/**
 * Función auxiliar para hacer peticiones HTTP con manejo de errores
 */
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error en petición ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Obtiene todos los candidatos desde el backend Java
 * @returns {Array} Lista de todos los candidatos
 */
export const getCandidatos = async () => {
  try {
    return await fetchAPI('/candidatos');
  } catch (error) {
    console.warn('Error conectando con backend, usando datos locales como fallback');
    return initialCandidatos || [];
  }
};

/**
 * Obtiene candidatos por categoría específica desde el backend
 * @param {string} categoria - presidente, congresistas, parlamento
 * @returns {Array} Lista de candidatos de la categoría
 */
export const getCandidatosPorCategoria = async (categoria) => {
  try {
    return await fetchAPI(`/candidatos?categoria=${categoria}`);
  } catch (error) {
    console.warn(`Error obteniendo ${categoria}, usando filtro local`);
    const todosCandidatos = await getCandidatos();
    
    switch (categoria) {
      case 'presidente':
        return todosCandidatos.filter(c => c.cargo === "Presidente" && c.estado === "Activo");
      case 'congresistas':
        return todosCandidatos.filter(c => c.cargo === "Congresista" && c.estado === "Activo");
      case 'parlamento':
        return todosCandidatos.filter(c => c.cargo === "Parlamentario Andino" && c.estado === "Activo");
      default:
        return todosCandidatos.filter(c => c.estado === "Activo");
    }
  }
};

/**
 * Obtiene propuestas por partido desde el backend
 * @returns {Object} Objeto con propuestas por partido
 */
export const getPropuestasPorPartido = async () => {
  try {
    return await fetchAPI('/propuestas');
  } catch (error) {
    console.warn('Error obteniendo propuestas, usando datos locales');
    return propuestasPorPartido || {};
  }
};

/**
 * Guarda la lista de candidatos en el backend Java
 * @param {Array} candidatos - Lista de candidatos a guardar
 */
export const saveCandidatos = async (candidatos) => {
  try {
    await fetchAPI('/candidatos', {
      method: 'POST',
      body: JSON.stringify(candidatos),
    });
  } catch (error) {
    console.error('Error guardando candidatos en backend:', error);
    throw error;
  }
};

/**
 * Obtiene candidatos filtrados por cargo específico
 * @param {string} cargo - Cargo a filtrar (Presidente, Vicepresidente, Congresista, etc.)
 * @returns {Array} Lista de candidatos activos con el cargo especificado
 */
export const getCandidatosPorCargo = async (cargo) => {
  try {
    const candidatos = await getCandidatos();
    return candidatos.filter(c => c.cargo === cargo && c.estado === "Activo");
  } catch (error) {
    console.error('Error obteniendo candidatos por cargo:', error);
    return [];
  }
};

/**
 * Obtiene candidatos organizados por categoría para la página de votación
 * Agrupa presidentes con sus vicepresidentes y organiza por categorías
 * @returns {Object} Objeto con candidatos organizados por categoría (presidente, congresistas, parlamentoAndino)
 */
export const getCandidatosParaVotacion = async () => {
  try {
    // Obtener datos en paralelo para mejor performance
    const [presidentesData, congresistasData, parlamentoData, propuestasData] = await Promise.all([
      getCandidatosPorCategoria('presidente'),
      getCandidatosPorCategoria('congresistas'),
      getCandidatosPorCategoria('parlamento'),
      getPropuestasPorPartido()
    ]);

    // Procesar presidentes con vicepresidentes
    const presidentesConVice = await procesarPresidentesConVice(presidentesData, propuestasData);
    
    // Procesar congresistas
    const congresistasProcesados = congresistasData.map(candidato => ({
      id: candidato.id,
      nombre: candidato.nombre,
      partido: candidato.partidoPolitico,
      numero: candidato.numeroLista,
      foto: candidato.foto,
      distrito: candidato.distrito || "Lima",
      propuestas: Array.isArray(candidato.propuestas) ? candidato.propuestas : (propuestasData[candidato.partidoPolitico] || []),
      color: candidato.colorPartido,
      // Campos adicionales para compatibilidad
      lema: candidato.lema,
      estado: candidato.estado
    }));

    // Procesar parlamentarios andinos
    const parlamentoProcesado = parlamentoData.map(candidato => ({
      id: candidato.id,
      nombre: candidato.nombre,
      partido: candidato.partidoPolitico,
      numero: candidato.numeroLista,
      foto: candidato.foto,
      propuestas: Array.isArray(candidato.propuestas) ? candidato.propuestas : (propuestasData[candidato.partidoPolitico] || []),
      color: candidato.colorPartido,
      // Campos adicionales para compatibilidad
      lema: candidato.lema,
      estado: candidato.estado
    }));

    return {
      presidente: presidentesConVice,
      congresistas: congresistasProcesados,
      parlamentoAndino: parlamentoProcesado,
    };

  } catch (error) {
    console.error('Error obteniendo candidatos para votación:', error);
    // Retornar estructura vacía en caso de error
    return {
      presidente: [],
      congresistas: [],
      parlamentoAndino: [],
    };
  }
};

/**
 * Procesa presidentes y agrupa con sus vicepresidentes correspondientes
 */
const procesarPresidentesConVice = async (presidentes, propuestasData) => {
  try {
    // Obtener todos los vicepresidentes
    const vicepresidentes = await getCandidatosPorCargo('Vicepresidente');
    const primerVicepresidentes = await getCandidatosPorCargo('Primer Vicepresidente');
    const segundoVicepresidentes = await getCandidatosPorCargo('Segundo Vicepresidente');
    
    const todosVices = [...vicepresidentes, ...primerVicepresidentes, ...segundoVicepresidentes];

    return presidentes.map(presidente => {
      // Filtrar vicepresidentes del mismo partido y lista
      const vicesCorrespondientes = todosVices.filter(vice => 
        vice.numeroLista === presidente.numeroLista && 
        vice.partidoPolitico === presidente.partidoPolitico
      ).sort((a, b) => {
        // Ordenar por tipo de vicepresidencia
        const orden = { 'Primer Vicepresidente': 1, 'Segundo Vicepresidente': 2, 'Vicepresidente': 3 };
        return (orden[a.cargo] || 4) - (orden[b.cargo] || 4);
      });

      return {
        id: presidente.id,
        nombre: presidente.nombre,
        partido: presidente.partidoPolitico,
        numero: presidente.numeroLista,
        foto: presidente.foto,
        vicepresidentes: vicesCorrespondientes.map(v => v.nombre),
        propuestas: Array.isArray(presidente.propuestas) ? presidente.propuestas : (propuestasData[presidente.partidoPolitico] || []),
        color: presidente.colorPartido,
        // Campos adicionales para compatibilidad
        lema: presidente.lema,
        estado: presidente.estado
      };
    });

  } catch (error) {
    console.error('Error procesando vicepresidentes:', error);
    // Fallback: retornar presidentes sin vicepresidentes
    return presidentes.map(presidente => ({
      id: presidente.id,
      nombre: presidente.nombre,
      partido: presidente.partidoPolitico,
      numero: presidente.numeroLista,
      foto: presidente.foto,
      vicepresidentes: [],
      propuestas: Array.isArray(presidente.propuestas) ? presidente.propuestas : (propuestasData[presidente.partidoPolitico] || []),
      color: presidente.colorPartido,
      lema: presidente.lema,
      estado: presidente.estado
    }));
  }
};

/**
 * Verifica un DNI en el backend Java
 * @param {string} dni - DNI a verificar
 * @returns {Object} Objeto con información de verificación
 */
export const verificarDNI = async (dni) => {
  try {
    const resultado = await fetchAPI(`/usuarios/verificar/${dni}`);
    return {
      valido: resultado.valido || false,
      haVotado: resultado.haVotado || false,
      nombres: resultado.nombres || '',
      dni: resultado.dni || dni,
      ...resultado
    };
  } catch (error) {
    console.error('Error verificando DNI:', error);
    // Fallback para desarrollo
    return {
      valido: true,
      haVotado: false,
      nombres: 'Usuario de Prueba',
      dni: dni,
      mensaje: 'Modo desarrollo - Verificación simulada'
    };
  }
};

/**
 * Registra un voto en el backend Java
 * @param {Object} votoData - Datos del voto a registrar
 * @returns {Object} Respuesta del servidor
 */
export const registrarVoto = async (votoData) => {
  try {
    const respuesta = await fetchAPI('/votos', {
      method: 'POST',
      body: JSON.stringify({
        dniUsuario: votoData.dniUsuario,
        idCandidato: votoData.idCandidato,
        categoria: votoData.categoria,
        partido: votoData.partido,
        candidatoNombre: votoData.candidatoNombre,
        fechaVoto: new Date().toISOString()
      }),
    });
    
    return {
      success: true,
      mensaje: 'Voto registrado exitosamente',
      ...respuesta
    };
    
  } catch (error) {
    console.error('Error registrando voto:', error);
    return {
      success: false,
      mensaje: 'Error registrando el voto',
      error: error.message
    };
  }
};

/**
 * Obtiene resultados electorales desde el backend
 * @returns {Object} Resultados electorales
 */
export const obtenerResultados = async () => {
  try {
    return await fetchAPI('/resultados');
  } catch (error) {
    console.error('Error obteniendo resultados:', error);
    // Fallback para desarrollo
    return {
      timestamp: new Date().toISOString(),
      totalVotos: 0,
      resultados: {},
      mensaje: 'Modo desarrollo - Resultados simulados'
    };
  }
};

/**
 * Función de compatibilidad - mantiene el mismo nombre pero ahora es async
 * @returns {Array} Datos iniciales de candidatos (fallback)
 */
export const forceUpdateCandidatos = async () => {
  console.warn('forceUpdateCandidatos ahora se maneja en el backend');
  return initialCandidatos || [];
};