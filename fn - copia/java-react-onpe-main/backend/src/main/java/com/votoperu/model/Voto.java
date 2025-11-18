package com.votoperu.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "votos")
public class Voto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "dni_usuario")
    private String dniUsuario;
    
    @Column(name = "id_candidato")
    private Long idCandidato;
    
    @Column(name = "categoria")
    private String categoria;
    
    @Column(name = "partido")
    private String partido;
    
    @Column(name = "candidato_nombre")
    private String candidatoNombre;
    
    @Column(name = "fecha_voto")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaVoto;
    
    // Constructor por defecto
    public Voto() {}
    
    // Constructor con parámetros
    public Voto(String dniUsuario, Long idCandidato, String categoria, String partido, String candidatoNombre) {
        this.dniUsuario = dniUsuario;
        this.idCandidato = idCandidato;
        this.categoria = categoria;
        this.partido = partido;
        this.candidatoNombre = candidatoNombre;
        this.fechaVoto = new Date();
    }
    
    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getDniUsuario() { return dniUsuario; }
    public void setDniUsuario(String dniUsuario) { this.dniUsuario = dniUsuario; }
    
    public Long getIdCandidato() { return idCandidato; }
    public void setIdCandidato(Long idCandidato) { this.idCandidato = idCandidato; }
    
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    
    public String getPartido() { return partido; }
    public void setPartido(String partido) { this.partido = partido; }
    
    public String getCandidatoNombre() { return candidatoNombre; }
    public void setCandidatoNombre(String candidatoNombre) { this.candidatoNombre = candidatoNombre; }
    
    public Date getFechaVoto() { return fechaVoto; }
    public void setFechaVoto(Date fechaVoto) { this.fechaVoto = fechaVoto; }
}