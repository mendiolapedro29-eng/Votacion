package com.votoperu.controllers;

import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

//@WebServlet("/api/usuarios/*")
public class UsuariosServlet extends HttpServlet {
    private Gson gson = new Gson();
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        // Configurar CORS
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, *");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        try {
            String pathInfo = request.getPathInfo();
            
            if (pathInfo != null && pathInfo.startsWith("/verificar/")) {
                String dni = pathInfo.substring("/verificar/".length());
                verificarDNI(dni, response);
            } else {
                response.setStatus(404);
                Map<String, String> error = new HashMap<>();
                error.put("error", "Endpoint no encontrado");
                response.getWriter().write(gson.toJson(error));
            }
            
        } catch (Exception e) {
            response.setStatus(500);
            Map<String, String> error = new HashMap<>();
            error.put("error", "Error procesando la solicitud");
            response.getWriter().write(gson.toJson(error));
        }
    }
    
    private void verificarDNI(String dni, HttpServletResponse response) throws IOException {
        Map<String, Object> respuesta = new HashMap<>();
        
        if (dni != null && dni.length() == 8) {
            respuesta.put("valido", true);
            respuesta.put("haVotado", false);
            respuesta.put("nombres", "Ciudadano con DNI " + dni);
            respuesta.put("mensaje", "DNI verificado correctamente");
        } else {
            respuesta.put("valido", false);
            respuesta.put("haVotado", false);
            respuesta.put("mensaje", "DNI inválido");
        }
        
        response.getWriter().write(gson.toJson(respuesta));
    }
    
    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, *");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setStatus(200);
    }
}