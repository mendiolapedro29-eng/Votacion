package com.votoperu.service;

import com.votoperu.dao.*;
import com.votoperu.model.*;
import java.util.HashMap;
import java.util.Map;

public class VotacionService {
    private CandidatoDAO candidatoDAO;
    private UsuarioDAO usuarioDAO;
    private VotoDAO votoDAO;
    
    public VotacionService() {
        this.candidatoDAO = new CandidatoDAO();
        this.usuarioDAO = new UsuarioDAO();
        this.votoDAO = new VotoDAO();
    }
    
    public Map<String, Object> verificarUsuario(String dni) {
        Map<String, Object> respuesta = new HashMap<>();
        Usuario usuario = usuarioDAO.verificarDNI(dni);
        
        if (usuario != null) {
            respuesta.put("valido", true);
            respuesta.put("haVotado", usuario.isHaVotado());
            respuesta.put("nombres", usuario.getNombres() + " " + usuario.getApellidos());
            respuesta.put("dni", usuario.getDni());
        } else {
            respuesta.put("valido", false);
            respuesta.put("haVotado", false);
        }
        
        return respuesta;
    }
    
    public boolean procesarVoto(Voto voto) {
        // Registrar el voto
        boolean votoRegistrado = votoDAO.registrarVoto(voto);
        
        if (votoRegistrado) {
            // Marcar al usuario como que ya votó
            return usuarioDAO.marcarComoVotado(voto.getDniUsuario());
        }
        
        return false;
    }
}