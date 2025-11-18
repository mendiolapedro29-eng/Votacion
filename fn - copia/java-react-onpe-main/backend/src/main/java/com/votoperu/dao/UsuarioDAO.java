package com.votoperu.dao;

import com.votoperu.model.Usuario;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;
import java.sql.*;

@Repository
public class UsuarioDAO {
    
    private final DataSource dataSource;
    
    public UsuarioDAO(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    public Usuario verificarDNI(String dni) {
        String sql = "SELECT * FROM usuarios WHERE dni = ?";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, dni);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                Usuario usuario = new Usuario();
                usuario.setId(rs.getLong("id"));
                usuario.setDni(rs.getString("dni"));
                usuario.setNombres(rs.getString("nombres"));
                usuario.setApellidos(rs.getString("apellidos"));
                usuario.setHaVotado(rs.getBoolean("ha_votado"));
                return usuario;
            }
        } catch (SQLException e) {
            System.err.println("❌ Error en verificarDNI: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }
    
    public boolean marcarComoVotado(String dni) {
        String sql = "UPDATE usuarios SET ha_votado = true WHERE dni = ?";
        
        try (Connection conn = dataSource.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, dni);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            System.err.println("❌ Error en marcarComoVotado: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}