package com.votoperu.controller;

import com.votoperu.service.VotacionService;
import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Map;

@WebServlet("/api/usuarios/verificar/*")
public class VerificacionServlet extends HttpServlet {
    private VotacionService votacionService;
    private Gson gson;
    
    @Override
    public void init() throws ServletException {
        votacionService = new VotacionService();
        gson = new Gson();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        
        try {
            String pathInfo = request.getPathInfo();
            String dni = pathInfo.substring(1); // Remover el "/" del path
            
            if (dni == null || dni.length() != 8) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                response.getWriter().write("{\"error\": \"DNI inválido\"}");
                return;
            }
            
            Map<String, Object> resultado = votacionService.verificarUsuario(dni);
            String json = gson.toJson(resultado);
            response.getWriter().write(json);
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\": \"Error verificando usuario\"}");
        }
    }
}