package com.votoperu.model;

import java.util.Date;

public class Voto {
    private int id;
    private String dniUsuario;
    private int idCandidato;
    private String categoria;
    private Date fechaVoto;
    private String partido;
    private String candidatoNombre;
    
    // Constructores
    public Voto() {}
    
    public Voto(String dniUsuario, int idCandidato, String categoria, 
                Date fechaVoto, String partido, String candidatoNombre) {
        this.dniUsuario = dniUsuario;
        this.idCandidato = idCandidato;
        this.categoria = categoria;
        this.fechaVoto = fechaVoto;
        this.partido = partido;
        this.candidatoNombre = candidatoNombre;
    }
    
    // Getters y Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getDniUsuario() { return dniUsuario; }
    public void setDniUsuario(String dniUsuario) { this.dniUsuario = dniUsuario; }
    
    public int getIdCandidato() { return idCandidato; }
    public void setIdCandidato(int idCandidato) { this.idCandidato = idCandidato; }
    
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    
    public Date getFechaVoto() { return fechaVoto; }
    public void setFechaVoto(Date fechaVoto) { this.fechaVoto = fechaVoto; }
    
    public String getPartido() { return partido; }
    public void setPartido(String partido) { this.partido = partido; }
    
    public String getCandidatoNombre() { return candidatoNombre; }
    public void setCandidatoNombre(String candidatoNombre) { this.candidatoNombre = candidatoNombre; }
}