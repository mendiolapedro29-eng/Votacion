package com.votoperu.controller;

import com.votoperu.model.Candidato;
import com.votoperu.dao.CandidatoDAO;
import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/api/candidatos")
public class CandidatosServlet extends HttpServlet {
    private CandidatoDAO candidatoDAO;
    private Gson gson;
    
    @Override
    public void init() throws ServletException {
        candidatoDAO = new CandidatoDAO();
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
            List<Candidato> candidatos = candidatoDAO.obtenerTodos();
            String json = gson.toJson(candidatos);
            response.getWriter().write(json);
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"error\": \"Error obteniendo candidatos\"}");
        }
    }
}