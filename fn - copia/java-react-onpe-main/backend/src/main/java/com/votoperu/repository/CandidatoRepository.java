package com.votoperu.repository;

import com.votoperu.model.Candidato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
    
    // Buscar candidatos por cargo (presidente, congresistas, etc.)
    List<Candidato> findByCargoContaining(String cargo);
    
    // Buscar candidatos por partido político
    List<Candidato> findByPartidoPolitico(String partidoPolitico);
    
    // Buscar candidatos por categoría específica (cargo exacto)
    List<Candidato> findByCargo(String cargo);
    
    // Buscar candidatos por número de lista
    List<Candidato> findByNumeroLista(String numeroLista);
    
    // Buscar candidatos por distrito (para congresistas)
    List<Candidato> findByDistrito(String distrito);
    
    // Buscar candidatos por estado
    List<Candidato> findByEstado(String estado);
}