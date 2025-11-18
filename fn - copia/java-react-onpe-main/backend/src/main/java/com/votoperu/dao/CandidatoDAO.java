package com.votoperu.dao;

import com.votoperu.model.Candidato;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class CandidatoDAO {
    
    private final DataSource dataSource;
    
    // Spring inyectará el DataSource automáticamente
    public CandidatoDAO(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    public List<Candidato> obtenerTodos() {
        List<Candidato> candidatos = new ArrayList<>();
        String sql = "SELECT * FROM candidatos WHERE estado = 'Activo'";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            
            while (rs.next()) {
                Candidato candidato = mapResultSetToCandidato(rs);
                candidatos.add(candidato);
            }
        } catch (SQLException e) {
            System.err.println("❌ Error en obtenerTodos: " + e.getMessage());
            e.printStackTrace();
        }
        return candidatos;
    }
    
    public List<Candidato> obtenerPorCargo(String cargo) {
        List<Candidato> candidatos = new ArrayList<>();
        String sql = "SELECT * FROM candidatos WHERE cargo = ? AND estado = 'Activo'";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, cargo);
            ResultSet rs = stmt.executeQuery();
            
            while (rs.next()) {
                Candidato candidato = mapResultSetToCandidato(rs);
                candidatos.add(candidato);
            }
        } catch (SQLException e) {
            System.err.println("❌ Error en obtenerPorCargo: " + e.getMessage());
            e.printStackTrace();
        }
        return candidatos;
    }
    
    public Candidato obtenerPorId(Long id) {
        String sql = "SELECT * FROM candidatos WHERE id = ?";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setLong(1, id);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                return mapResultSetToCandidato(rs);
            }
        } catch (SQLException e) {
            System.err.println("❌ Error en obtenerPorId: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
    
    private Candidato mapResultSetToCandidato(ResultSet rs) throws SQLException {
        Candidato candidato = new Candidato();
        candidato.setId(rs.getLong("id"));
        candidato.setNombre(rs.getString("nombre"));
        candidato.setPartidoPolitico(rs.getString("partido_politico"));
        candidato.setCargo(rs.getString("cargo"));
        candidato.setNumeroLista(rs.getString("numero_lista"));
        candidato.setFoto(rs.getString("foto"));
        candidato.setEstado(rs.getString("estado"));
        candidato.setDistrito(rs.getString("distrito"));
        candidato.setPropuestas(rs.getString("propuestas"));
        candidato.setLema(rs.getString("lema"));
        candidato.setColorPartido(rs.getString("color_partido"));
        return candidato;
    }
}