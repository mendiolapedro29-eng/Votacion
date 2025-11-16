package com.votoperu.dao;

import com.votoperu.model.Candidato;
import com.votoperu.config.DatabaseConfig;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CandidatoDAO {
    
    public List<Candidato> obtenerTodos() {
        List<Candidato> candidatos = new ArrayList<>();
        String sql = "SELECT * FROM candidatos WHERE estado = 'Activo'";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            
            while (rs.next()) {
                Candidato candidato = new Candidato();
                candidato.setId(rs.getInt("id"));
                candidato.setNombre(rs.getString("nombre"));
                candidato.setPartidoPolitico(rs.getString("partido_politico"));
                candidato.setCargo(rs.getString("cargo"));
                candidato.setNumeroLista(rs.getString("numero_lista"));
                candidato.setFoto(rs.getString("foto"));
                candidato.setEstado(rs.getString("estado"));
                candidato.setDistrito(rs.getString("distrito"));
                
                candidatos.add(candidato);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return candidatos;
    }
    
    public List<Candidato> obtenerPorCargo(String cargo) {
        List<Candidato> candidatos = new ArrayList<>();
        String sql = "SELECT * FROM candidatos WHERE cargo = ? AND estado = 'Activo'";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, cargo);
            ResultSet rs = stmt.executeQuery();
            
            while (rs.next()) {
                Candidato candidato = new Candidato();
                candidato.setId(rs.getInt("id"));
                candidato.setNombre(rs.getString("nombre"));
                candidato.setPartidoPolitico(rs.getString("partido_politico"));
                candidato.setCargo(rs.getString("cargo"));
                candidato.setNumeroLista(rs.getString("numero_lista"));
                candidato.setFoto(rs.getString("foto"));
                candidato.setEstado(rs.getString("estado"));
                candidato.setDistrito(rs.getString("distrito"));
                
                candidatos.add(candidato);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return candidatos;
    }
}