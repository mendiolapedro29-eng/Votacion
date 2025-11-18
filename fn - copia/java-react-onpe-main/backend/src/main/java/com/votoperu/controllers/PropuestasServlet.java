//* */
package com.votoperu.controllers;

import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

//@WebServlet("/api/propuestas")
public class PropuestasServlet extends HttpServlet {
    private Gson gson;
    
    @Override
    public void init() throws ServletException {
        gson = new Gson();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        configureCorsHeaders(response);
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        try {
            // Datos de propuestas por partido (puedes mover esto a la BD si prefieres)
            Map<String, String[]> propuestasPorPartido = new HashMap<>();
            
            propuestasPorPartido.put("Fuerza Popular", new String[]{
                "Seguridad ciudadana", "Reactivación económica", "Educación gratuita",
                "Infraestructura pública", "Fiscalización"
            });
            
            propuestasPorPartido.put("Renovación Popular", new String[]{
                "Lucha contra la corrupción", "Reducción de impuestos", "Inversión privada",
                "Seguridad nacional", "Transparencia"
            });
            
            propuestasPorPartido.put("Alianza para el Progreso", new String[]{
                "Obras públicas", "Empleo juvenil", "Tecnología educativa",
                "Desarrollo regional", "Agricultura"
            });
            
            propuestasPorPartido.put("Avanza País", new String[]{
                "Defensa nacional", "Orden público", "Inversión extranjera",
                "Turismo", "Medio ambiente"
            });
            
            propuestasPorPartido.put("Perú Libre", new String[]{
                "Salud pública", "Reforma agraria", "Derechos laborales",
                "Educación pública", "Soberanía nacional"
            });
            
            String json = gson.toJson(propuestasPorPartido);
            response.getWriter().write(json);
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            Map<String, String> error = new HashMap<>();
            error.put("error", "Error obteniendo propuestas");
            response.getWriter().write(gson.toJson(error));
        }
    }
    
    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        configureCorsHeaders(response);
        response.setStatus(HttpServletResponse.SC_OK);
    }
private void configureCorsHeaders(HttpServletResponse response) {
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Específico, no *
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, *"); // Agregar *
    response.setHeader("Access-Control-Allow-Credentials", "true"); // Agregar esta línea
    response.setHeader("Access-Control-Max-Age", "3600");
}
}
 