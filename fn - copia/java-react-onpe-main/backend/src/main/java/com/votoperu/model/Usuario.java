package com.votoperu.model;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // ✅ Usar Long, no long
    
    @Column(name = "dni", unique = true, nullable = false)
    private String dni;
    
    @Column(name = "nombres")
    private String nombres;
    
    @Column(name = "apellidos")
    private String apellidos;
    
    @Column(name = "ha_votado")
    private boolean haVotado;
    
    // Constructor por defecto (OBLIGATORIO para JPA)
    public Usuario() {}
    
    // Constructor con parámetros
    public Usuario(String dni, String nombres, String apellidos) {
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.haVotado = false;
    }
    
    // Getters y Setters - IMPORTANTE: usar Long, no long
    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) {  // ✅ Recibe Long, no long
        this.id = id; 
    }
    
    public String getDni() { 
        return dni; 
    }
    
    public void setDni(String dni) { 
        this.dni = dni; 
    }
    
    public String getNombres() { 
        return nombres; 
    }
    
    public void setNombres(String nombres) { 
        this.nombres = nombres; 
    }
    
    public String getApellidos() { 
        return apellidos; 
    }
    
    public void setApellidos(String apellidos) { 
        this.apellidos = apellidos; 
    }
    
    public boolean isHaVotado() { 
        return haVotado; 
    }
    
    public void setHaVotado(boolean haVotado) { 
        this.haVotado = haVotado; 
    }
    
    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", dni='" + dni + '\'' +
                ", nombres='" + nombres + '\'' +
                ", haVotado=" + haVotado +
                '}';
    }
}