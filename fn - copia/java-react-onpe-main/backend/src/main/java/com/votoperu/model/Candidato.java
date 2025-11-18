package com.votoperu.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;
import com.google.gson.Gson;

@Entity
@Table(name = "candidatos")
public class Candidato {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre", nullable = false)
    private String nombre;
    
    @Column(name = "partido_politico")
    private String partidoPolitico;
    
    @Column(name = "cargo")
    private String cargo;
    
    @Column(name = "numero_lista")
    private String numeroLista;
    
    @Column(name = "foto")
    private String foto;
    
    @Column(name = "estado")
    private String estado;
    
    @Column(name = "distrito")
    private String distrito;
    
    @Column(name = "propuestas", columnDefinition = "TEXT")
    private String propuestas;
    
    @Column(name = "lema")
    private String lema;
    
    @Column(name = "color_partido")
    private String colorPartido;
    
    // Constructor por defecto (OBLIGATORIO para JPA)
    public Candidato() {}
    
    // Constructor con parámetros
    public Candidato(String nombre, String partidoPolitico, String cargo, String numeroLista) {
        this.nombre = nombre;
        this.partidoPolitico = partidoPolitico;
        this.cargo = cargo;
        this.numeroLista = numeroLista;
        this.estado = "Activo"; // Valor por defecto
    }

    // Getters y Setters (los que ya tienes)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
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
    
    public String getPropuestas() { return propuestas; }
    public void setPropuestas(String propuestas) { this.propuestas = propuestas; }
    
    // Método para obtener propuestas como Lista
    public List<String> getPropuestasList() {
        if (propuestas != null && !propuestas.trim().isEmpty()) {
            try {
                return Arrays.asList(new Gson().fromJson(propuestas, String[].class));
            } catch (Exception e) {
                System.out.println("Error parseando propuestas: " + e.getMessage());
                return Arrays.asList();
            }
        }
        return Arrays.asList();
    }
    
    public String getLema() { return lema; }
    public void setLema(String lema) { this.lema = lema; }
    
    public String getColorPartido() { return colorPartido; }
    public void setColorPartido(String colorPartido) { this.colorPartido = colorPartido; }
    
    @Override
    public String toString() {
        return "Candidato{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", partidoPolitico='" + partidoPolitico + '\'' +
                ", cargo='" + cargo + '\'' +
                '}';
    }
}