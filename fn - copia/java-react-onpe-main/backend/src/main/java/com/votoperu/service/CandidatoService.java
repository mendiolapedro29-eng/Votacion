package com.votoperu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.votoperu.model.Candidato;
import com.votoperu.repository.CandidatoRepository;
import java.util.List;
import java.util.Optional;

@Service
public class CandidatoService {

    @Autowired
    private CandidatoRepository candidatoRepository;

    public List<Candidato> findAll() {
        return candidatoRepository.findAll();
    }

    public List<Candidato> findByCategoria(String categoria) {
        return candidatoRepository.findByCargoContaining(categoria);
    }

    public Optional<Candidato> findById(Long id) {
        return candidatoRepository.findById(id);
    }

    public Candidato save(Candidato candidato) {
        return candidatoRepository.save(candidato);
    }

    public void deleteById(Long id) {
        candidatoRepository.deleteById(id);
    }

    public List<Candidato> findByPartidoPolitico(String partido) {
        return candidatoRepository.findByPartidoPolitico(partido);
    }
    
    // Método adicional para buscar por cargo exacto
    public List<Candidato> findByCargoExacto(String cargo) {
        return candidatoRepository.findByCargo(cargo);
    }
}