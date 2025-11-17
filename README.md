Grupo 05:
- PEDRO
- EVER
- JHON
- FREDDY 
- VICTOR
- JEFERSON

# Sistema de Votación Digital - Perú

Sistema de votación digital desarrollado con React + Vite (Frontend) y Java JSP/Servlets (Backend).

## 🚀 Características

- **Frontend**: React.js con Tailwind CSS
- **Backend**: Java con Servlets y JSP
- **Base de datos**: MySQL
- **Autenticación**: Sistema seguro de verificación por DNI

## 📁 Estructura del Proyecto

DOCUMENTACIÓN DEL SISTEMA ELECTORAL DIGITAL DEL PERÚ 
________________________________________
1. Introducción
Este documento describe el diseño técnico y funcional de un Sistema de Votación Digital para el Perú, orientado a garantizar procesos electorales transparentes, confiables y seguros. El sistema incorpora mecanismos modernos para validar la identidad del votante, combatir automatizaciones fraudulentas y proporcionar información detallada de candidatos y partidos.
________________________________________
2. Objetivos del Sistema
   
2.1 Objetivo General
Garantizar un proceso de votación digital seguro, verificable y transparente, manteniendo los principios electorales del Perú.

2.2 Objetivos Específicos
- Verificar que cada votante sea un ser humano mediante CAPTCHA.
- Validar identidad ciudadana por DNI y biometría.
- Permitir que el votante acceda a información completa de los candidatos y partidos antes de votar.
- Garantizar integridad y anonimato del voto.
- Facilitar el conteo rápido y la auditoría del proceso.
________________________________________
3. Flujo Mejorado del Proceso de Votación

3.1 Acceso del Ciudadano
1.	El usuario ingresa a la plataforma digital.
2.	El sistema solicita ingresar su DNI.
3.	Antes de permitir continuar, aparece un desafío CAPTCHA para validar que el usuario es humano.
4.	Si se completa correctamente, se procede a la verificación con RENIEC para confirmar identidad y habilitación.
________________________________________

3.2 Información de Candidatos y Partidos
Antes de elegir, el sistema muestra un módulo detallado para cada candidato, que incluye:

Información del Candidato
- Nombre completo
- Fotografía
- Edad
- Biografía detallada
- Experiencia política
- Profesión
- Logros relevantes
- Ideología (derecha / centro / izquierda)
- Propuestas resumidas
- Propuestas detalladas
- Vicepresidentes (perfil y funciones potenciales)

Información del Partido Político
- Nombre del partido
- Logotipo
- Orientación ideológica (derecha, izquierda, centro, mixto)
- Número total de afiliados
- Cantidad actual de congresistas
- Historia del partido
- Principales líneas programáticas
- Participaciones electorales previas
- Presidente del partido
- Integrantes relevantes

Visualización

La información aparecerá organizada en pestañas:

- Biografía
- Propuestas
- Partido Político
- Vicepresidentes
- Estadísticas del Partido
El sistema permite comparar candidatos.
________________________________________
3.4 Emisión del Voto
1.	Tras revisar la información, el usuario pasa a la boleta de votación.
2.	Elige su candidato.
3.	Confirma su voto en una pantalla final.
4.	Se genera un token anónimo del voto.
5.	El voto se cifra y se envía al servidor central.
________________________________________
4. Arquitectura del Sistema

4.1 Módulos Principales

1.	Módulo CAPTCHA
- Protege contra bots
- ReCaptcha / Captcha dinámico propio
  
2.	Módulo de Validación de Identidad
- DNI
- Estado habilitado

3.	Módulo de Perfil de Candidatos y Partidos

- Gestión de fichas descriptivas
- Base de datos de biografías
- Datos estadísticos (afiliados, congresistas)
- Ideología política

4.	Módulo de Votación Electrónica
- Boleta inteligente
- Resumen previo
- Confirmación final

5.	Módulo de Seguridad
- Cifrado AES-256 + RSA 4096
- Hash SHA-3 para integridad

6.	Módulo de Conteo
7.	Módulo de Reportes y Actas
8.	Módulo de Auditoría (Blockchain opcional)
________________________________________
5. Base de Datos (Ampliada)

Tabla: Candidatos

<img width="339" height="333" alt="image" src="https://github.com/user-attachments/assets/5a9b88bc-5057-4e22-bf25-d5eb294abd54" />


________________________________________
Tabla: Partidos Políticos

<img width="315" height="285" alt="image" src="https://github.com/user-attachments/assets/09c34df8-2a22-4de9-a482-2937ac32c70b" />


________________________________________
Tabla: Electores

<img width="263" height="209" alt="image" src="https://github.com/user-attachments/assets/c6c7e5b0-05e0-49bd-ac9e-88b0fb58040a" />


________________________________________
Tabla: Votos

<img width="209" height="191" alt="image" src="https://github.com/user-attachments/assets/20ed787e-e7f5-4f12-bec6-0774f3f295e9" />


________________________________________
6. Seguridad Mejorada
- CAPTCHA humano/bot
- Multicapas de encriptación
- Segmentación de datos (identidad separada del voto)
- Auditorías automáticas
- Detección de anomalías
________________________________________
7. Interfaz del Usuario

7.1 Pantallas Clave

1.	Ingreso de DNI + CAPTCHA
2.	Verificación biométrica
3.	Panel informativo del candidato
- Biografía
- Propuestas
- Ideología
- Partido político
- Afiliados y congresistas
4.	Boleta de votación
5.	Confirmación final
6.	Pantalla de agradecimiento
________________________________________
8. Caso de Uso Mejorados
   
CU01 – Verificar si es humano

Actor: Ciudadano

Precondición: Acceso al sistema

Flujo:

1.	Ingresa DNI
2.	Completa CAPTCHA
3.	El sistema valida
________________________________________
CU02 – Consultar información de candidatos

Actor: Ciudadano

Descripción: El usuario revisa la biografía, ideología, propuestas, partido y estadísticas.
________________________________________
CU03 – Emitir el voto

Actor: Ciudadano

El votante elige su candidato basado en información completa.
________________________________________
9. Beneficios de la Mejora

- Se evita fraude mediante bots.
- Los votantes tienen acceso completo a la información de candidatos.
- Se incentiva un voto informado.
- Se aumenta la transparencia del sistema.
- La plataforma soporta auditorías profundas.
________________________________________
10. Conclusión
La versión mejorada del Sistema de Votación Digital del Perú incorpora herramientas modernas como CAPTCHA, información detallada de candidatos y partidos, y una arquitectura sólida basada en seguridad y transparencia. Esto permite un voto más informado, seguro y auditable.
________________________________________
11. imagenes del sistema

<img width="866" height="487" alt="image" src="https://github.com/user-attachments/assets/e106563f-2497-47de-8374-ff20c7e963d8" />

<img width="779" height="437" alt="image" src="https://github.com/user-attachments/assets/f44b2b92-46b5-4fe9-b5aa-da5cfdfb5a91" />

<img width="891" height="590" alt="image" src="https://github.com/user-attachments/assets/393d98c7-7956-4968-b02c-cb84e1cd6398" />

<img width="754" height="471" alt="image" src="https://github.com/user-attachments/assets/4283ce7f-89cd-418e-8aee-bdc779770734" />

<img width="818" height="397" alt="image" src="https://github.com/user-attachments/assets/b88e8c48-28e4-4304-beab-65fc462ec412" />

<img width="886" height="447" alt="image" src="https://github.com/user-attachments/assets/c656c1fa-eea9-448a-8502-f4e16fb22a47" />





