/**
 * Servicio compartido para gestionar candidatos electorales
 * 
 * Este servicio centraliza la gestión de candidatos para que sean accesibles
 * tanto desde el panel de administración como desde la página de votación.
 * Los datos se obtienen del backend Java via API REST.
 * 
 * Funcionalidades:
 * - Obtención de candidatos desde backend Java
 * - Transformación de datos para diferentes vistas (admin vs votación)
 * - Agrupación de presidentes con sus vicepresidentes
 * - Filtrado por estado (activo/inactivo)
 */

import { initialCandidatos } from './data/candidatosData';
import { propuestasPorPartido } from './data/propuestasData';

// Configuración de la API - ajusta la URL según tu backend Java
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8080/votacion-api/api";

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
    console.warn('Usando datos locales como fallback');
    return initialCandidatos;
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
 * Obtiene candidatos filtrados por cargo específico desde el backend
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
    const candidatos = await getCandidatos();
    
    // Filtrar solo candidatos activos para mostrar en votación
    const activos = candidatos.filter(c => c.estado === "Activo");

    // Agrupar presidentes con sus vicepresidentes correspondientes
    const presidentes = activos.filter(c => c.cargo === "Presidente");
    const presidentesConVice = presidentes.map(pres => {
      const vicepresidentes = activos.filter(
        c => (c.cargo === "Primer Vicepresidente" || c.cargo === "Segundo Vicepresidente" || c.cargo === "Vicepresidente") && 
        c.numeroLista === pres.numeroLista && 
        c.partidoPolitico === pres.partidoPolitico
      ).sort((a, b) => {
        // Ordenar: Primer Vicepresidente primero, luego Segundo Vicepresidente
        if (a.cargo === "Primer Vicepresidente") return -1;
        if (b.cargo === "Primer Vicepresidente") return 1;
        if (a.cargo === "Segundo Vicepresidente") return -1;
        if (b.cargo === "Segundo Vicepresidente") return 1;
        return 0;
      });
      return {
        id: pres.id,
        nombre: pres.nombre,
        partido: pres.partidoPolitico,
        numero: pres.numeroLista,
        foto: pres.foto,
        vicepresidentes: vicepresidentes.map(v => v.nombre),
        propuestas: propuestasPorPartido[pres.partidoPolitico] || [],
      };
    });

    // Transformar candidatos a congresistas con formato para votación
    const congresistas = activos
      .filter(c => c.cargo === "Congresista")
      .map(c => ({
        id: c.id,
        nombre: c.nombre,
        partido: c.partidoPolitico,
        numero: c.numeroLista,
        foto: c.foto,
        distrito: c.distrito || "Lima",
        propuestas: propuestasPorPartido[c.partidoPolitico] || [],
      }));

    // Transformar candidatos a parlamentarios andinos con formato para votación
    const parlamentoAndino = activos
      .filter(c => c.cargo === "Parlamentario Andino")
      .map(c => ({
        id: c.id,
        nombre: c.nombre,
        partido: c.partidoPolitico,
        numero: c.numeroLista,
        foto: c.foto,
        propuestas: propuestasPorPartido[c.partidoPolitico] || [],
      }));

    return {
      presidente: presidentesConVice,
      congresistas: congresistas,
      parlamentoAndino: parlamentoAndino,
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
 * Verifica un DNI en el backend Java
 * @param {string} dni - DNI a verificar
 * @returns {Object} Objeto con información de verificación
 */
export const verificarDNI = async (dni) => {
  try {
    return await fetchAPI(`/usuarios/verificar/${dni}`);
  } catch (error) {
    console.error('Error verificando DNI:', error);
    throw error;
  }
};

/**
 * Registra un voto en el backend Java
 * @param {Object} votoData - Datos del voto a registrar
 * @returns {Object} Respuesta del servidor
 */
export const registrarVoto = async (votoData) => {
  try {
    return await fetchAPI('/votos', {
      method: 'POST',
      body: JSON.stringify(votoData),
    });
  } catch (error) {
    console.error('Error registrando voto:', error);
    throw error;
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
    throw error;
  }
};

/**
 * Función de compatibilidad - mantiene el mismo nombre pero ahora es async
 * @returns {Array} Datos iniciales de candidatos (fallback)
 */
export const forceUpdateCandidatos = () => {
  console.warn('forceUpdateCandidatos ahora se maneja en el backend');
  return initialCandidatos;
};