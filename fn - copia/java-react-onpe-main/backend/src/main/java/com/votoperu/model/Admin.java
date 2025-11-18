package com.votoperu.model;

public class Admin {
        private String usuario;
    private String password;
    
    // Constructores
    public Admin() {}
    
    public Admin(String usuario, String password) {
        this.usuario = usuario;
        this.password = password;
    }
    
    // Getters y Setters
    public String getUsuario() { return usuario; }
    public void setUsuario(String usuario) { this.usuario = usuario; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
