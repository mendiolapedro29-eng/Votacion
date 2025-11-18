package com.votoperu.service;

import com.votoperu.dao.*;
import com.votoperu.model.*;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.HashMap;
import java.util.Map;

@Service 
public class VotacionService {
    private final CandidatoDAO candidatoDAO;
    private final UsuarioDAO usuarioDAO;
    private final VotoDAO votoDAO;
    
    // Spring inyecta automáticamente las dependencias
    @Autowired
    public VotacionService(CandidatoDAO candidatoDAO, UsuarioDAO usuarioDAO, VotoDAO votoDAO) {
        this.candidatoDAO = candidatoDAO;
        this.usuarioDAO = usuarioDAO;
        this.votoDAO = votoDAO;
        System.out.println("✅ VotacionService creado con DAOs inyectados");
    }
    
    public Map<String, Object> verificarUsuario(String dni) {
        Map<String, Object> respuesta = new HashMap<>();
        try {
            Usuario usuario = usuarioDAO.verificarDNI(dni);
            
            if (usuario != null) {
                respuesta.put("valido", true);
                respuesta.put("haVotado", usuario.isHaVotado());
                respuesta.put("nombres", usuario.getNombres() + " " + usuario.getApellidos());
                respuesta.put("dni", usuario.getDni());
            } else {
                respuesta.put("valido", false);
                respuesta.put("haVotado", false);
                respuesta.put("mensaje", "Usuario no encontrado");
            }
        } catch (Exception e) {
            System.err.println("❌ Error en verificarUsuario: " + e.getMessage());
            respuesta.put("valido", false);
            respuesta.put("error", "Error en el servidor");
        }
        
        return respuesta;
    }
    
    public boolean procesarVoto(Voto voto) {
        try {
            // Registrar el voto
            boolean votoRegistrado = votoDAO.registrarVoto(voto);
            
            if (votoRegistrado) {
                // Marcar al usuario como que ya votó
                return usuarioDAO.marcarComoVotado(voto.getDniUsuario());
            }
        } catch (Exception e) {
            System.err.println("❌ Error en procesarVoto: " + e.getMessage());
            e.printStackTrace();
        }
        
        return false;
    }
}