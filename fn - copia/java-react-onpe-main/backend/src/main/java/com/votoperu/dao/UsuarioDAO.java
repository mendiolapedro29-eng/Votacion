package com.votoperu.dao;

import com.votoperu.model.Usuario;
import com.votoperu.config.DatabaseConfig;
import java.sql.*;

public class UsuarioDAO {
    
    public Usuario verificarDNI(String dni) {
        String sql = "SELECT * FROM usuarios WHERE dni = ? AND activo = true";
        Usuario usuario = null;
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, dni);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                usuario = new Usuario();
                usuario.setDni(rs.getString("dni"));
                usuario.setNombres(rs.getString("nombres"));
                usuario.setApellidos(rs.getString("apellidos"));
                usuario.setHaVotado(rs.getBoolean("ha_votado"));
                usuario.setActivo(rs.getBoolean("activo"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return usuario;
    }
    
    public boolean marcarComoVotado(String dni) {
        String sql = "UPDATE usuarios SET ha_votado = true WHERE dni = ?";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, dni);
            return stmt.executeUpdate() > 0;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }
}