package com.votoperu.dao;

import com.votoperu.model.Voto;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import java.sql.*;

@Repository
public class VotoDAO {
    
    private final DataSource dataSource;
    
    public VotoDAO(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    public boolean registrarVoto(Voto voto) {
        String sql = "INSERT INTO votos (dni_usuario, id_candidato, categoria, partido, candidato_nombre, fecha_voto) VALUES (?, ?, ?, ?, ?, ?)";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, voto.getDniUsuario());
            stmt.setLong(2, voto.getIdCandidato());
            stmt.setString(3, voto.getCategoria());
            stmt.setString(4, voto.getPartido());
            stmt.setString(5, voto.getCandidatoNombre());
            stmt.setTimestamp(6, new Timestamp(System.currentTimeMillis()));
            
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("❌ Error en registrarVoto: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}