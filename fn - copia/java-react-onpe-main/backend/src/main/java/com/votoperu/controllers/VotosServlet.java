package com.votoperu.controller;

import com.votoperu.model.Voto;
import com.votoperu.service.VotacionService;
import com.google.gson.Gson;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/api/votos")
public class VotosServlet extends HttpServlet {
    private VotacionService votacionService;
    private Gson gson;
    
    @Override
    public void init() throws ServletException {
        votacionService = new VotacionService();
        gson = new Gson();
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        
        try {
            // Leer el JSON del request
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = request.getReader().readLine()) != null) {
                sb.append(line);
            }
            String jsonBody = sb.toString();
            
            // Parsear el JSON
            Map<String, Object> votoData = gson.fromJson(jsonBody, Map.class);
            
            // Crear objeto Voto
            Voto voto = new Voto();
            voto.setDniUsuario((String) votoData.get("dniUsuario"));
            voto.setIdCandidato(((Double) votoData.get("idCandidato")).intValue());
            voto.setCategoria((String) votoData.get("categoria"));
            voto.setFechaVoto(new Date());
            voto.setPartido((String) votoData.get("partido"));
            voto.setCandidatoNombre((String) votoData.get("candidatoNombre"));
            
            // Procesar el voto
            boolean success = votacionService.procesarVoto(voto);
            
            Map<String, Object> respuesta = new HashMap<>();
            respuesta.put("success", success);
            respuesta.put("mensaje", success ? "Voto registrado exitosamente" : "Error registrando voto");
            
            String jsonRespuesta = gson.toJson(respuesta);
            response.getWriter().write(jsonRespuesta);
            
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            Map<String, String> error = new HashMap<>();
            error.put("error", "Error procesando el voto");
            response.getWriter().write(gson.toJson(error));
        }
    }
    
    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}