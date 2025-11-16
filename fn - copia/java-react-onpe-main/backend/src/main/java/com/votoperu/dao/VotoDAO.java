package com.votoperu.dao;

import com.votoperu.model.Voto;
import com.votoperu.config.DatabaseConfig;
import java.sql.*;
import java.util.Date;

public class VotoDAO {
    
    public boolean registrarVoto(Voto voto) {
        String sql = "INSERT INTO votos (dni_usuario, id_candidato, categoria, fecha_voto, partido, candidato_nombre) VALUES (?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, voto.getDniUsuario());
            stmt.setInt(2, voto.getIdCandidato());
            stmt.setString(3, voto.getCategoria());
            stmt.setTimestamp(4, new Timestamp(voto.getFechaVoto().getTime()));
            stmt.setString(5, voto.getPartido());
            stmt.setString(6, voto.getCandidatoNombre());
            
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}