package com.votoperu.controllers;

import com.votoperu.model.Admin;
import com.votoperu.service.AuthService;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/api/auth/login")
public class AuthServlet extends HttpServlet {
    
    private AuthService authService = new AuthService();
    private ObjectMapper objectMapper = new ObjectMapper();
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        
        try {
            // Leer datos del request
            Admin admin = objectMapper.readValue(request.getReader(), Admin.class);
            
            // Autenticar usuario
            boolean autenticado = authService.autenticar(admin.getUsuario(), admin.getPassword());
            
            if (autenticado) {
                // Crear sesión
                HttpSession session = request.getSession();
                session.setAttribute("adminUser", admin.getUsuario());
                session.setAttribute("adminAuth", "true");
                session.setMaxInactiveInterval(30 * 60); // 30 minutos
                
                // Respuesta exitosa
                response.setStatus(HttpServletResponse.SC_OK);
                objectMapper.writeValue(response.getWriter(), 
                    new AuthResponse(true, "Autenticación exitosa", admin.getUsuario()));
            } else {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                objectMapper.writeValue(response.getWriter(), 
                    new AuthResponse(false, "Usuario o contraseña incorrectos", null));
            }
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            objectMapper.writeValue(response.getWriter(), 
                new AuthResponse(false, "Error en el servidor", null));
        }
    }
    
    // Clase interna para respuesta
    public static class AuthResponse {
        private boolean success;
        private String message;
        private String usuario;
        
        public AuthResponse(boolean success, String message, String usuario) {
            this.success = success;
            this.message = message;
            this.usuario = usuario;
        }
        
        // Getters y Setters
        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public String getUsuario() { return usuario; }
        public void setUsuario(String usuario) { this.usuario = usuario; }
    }
}