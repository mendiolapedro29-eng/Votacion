package com.votoperu.config;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class TestConnection {
    public static void main(String[] args) {
        Connection conn = null;
        try {
            System.out.println("🔌 Probando conexión a XAMPP MySQL...");
            
            conn = DatabaseConfig.getConnection();
            System.out.println("✅ Conexión exitosa a la base de datos!");
            
            // Probar consulta simple
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT COUNT(*) as total FROM usuarios");
            
            if (rs.next()) {
                int totalUsuarios = rs.getInt("total");
                System.out.println("📊 Total de usuarios en BD: " + totalUsuarios);
            }
            
            rs.close();
            stmt.close();
            
        } catch (Exception e) {
            System.out.println("❌ Error de conexión: " + e.getMessage());
            e.printStackTrace();
        } finally {
            try {
                if (conn != null) conn.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}