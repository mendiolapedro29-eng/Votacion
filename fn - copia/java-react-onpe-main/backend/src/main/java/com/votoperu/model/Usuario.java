package com.votoperu.model;

public class Usuario {
    private String dni;
    private String nombres;
    private String apellidos;
    private boolean haVotado;
    private boolean activo;
    
    // Constructores
    public Usuario() {}
    
    public Usuario(String dni, String nombres, String apellidos, boolean haVotado, boolean activo) {
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.haVotado = haVotado;
        this.activo = activo;
    }
    
    // Getters y Setters
    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }
    
    public String getNombres() { return nombres; }
    public void setNombres(String nombres) { this.nombres = nombres; }
    
    public String getApellidos() { return apellidos; }
    public void setApellidos(String apellidos) { this.apellidos = apellidos; }
    
    public boolean isHaVotado() { return haVotado; }
    public void setHaVotado(boolean haVotado) { this.haVotado = haVotado; }
    
    public boolean isActivo() { return activo; }
    public void setActivo(boolean activo) { this.activo = activo; }
}