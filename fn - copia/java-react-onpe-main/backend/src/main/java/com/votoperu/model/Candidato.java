package com.votoperu.model;

public class Candidato {
    private int id;
    private String nombre;
    private String partidoPolitico;
    private String cargo;
    private String numeroLista;
    private String foto;
    private String estado;
    private String distrito;
    
    // Constructores
    public Candidato() {}
    
    public Candidato(int id, String nombre, String partidoPolitico, String cargo, 
                    String numeroLista, String foto, String estado, String distrito) {
        this.id = id;
        this.nombre = nombre;
        this.partidoPolitico = partidoPolitico;
        this.cargo = cargo;
        this.numeroLista = numeroLista;
        this.foto = foto;
        this.estado = estado;
        this.distrito = distrito;
    }
    
    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    
    public String getPartidoPolitico() { return partidoPolitico; }
    public void setPartidoPolitico(String partidoPolitico) { this.partidoPolitico = partidoPolitico; }
    
    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }
    
    public String getNumeroLista() { return numeroLista; }
    public void setNumeroLista(String numeroLista) { this.numeroLista = numeroLista; }
    
    public String getFoto() { return foto; }
    public void setFoto(String foto) { this.foto = foto; }
    
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    
    public String getDistrito() { return distrito; }
    public void setDistrito(String distrito) { this.distrito = distrito; }
}