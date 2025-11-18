package com.votoperu.service;

import com.votoperu.config.DatabaseConfig;
import java.sql.*;

public class AuthService {
    
    // Método existente
    public boolean verificarCredenciales(String username, String password) {
        String sql = "SELECT COUNT(*) FROM usuarios WHERE username = ? AND password = ?";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, username);
            stmt.setString(2, password);
            
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return rs.getInt(1) > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    
    // AGREGAR ESTE MÉTODO - es un alias de verificarCredenciales
    public boolean autenticar(String username, String password) {
        return verificarCredenciales(username, password);
    }
    
    // Métodos adicionales que ya tenías
    public boolean verificarDNI(String dni) {
        String sql = "SELECT COUNT(*) FROM votantes WHERE dni = ? AND ya_voto = false";
        
        try (Connection conn = DatabaseConfig.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            
            stmt.setString(1, dni);
            ResultSet rs = stmt.executeQuery();
            
            if (rs.next()) {
                return rs.getInt(1) > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public boolean marcarComoVotado(String dni) {
        String sql = "UPDATE votantes SET ya_voto = true WHERE dni = ?";
        
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