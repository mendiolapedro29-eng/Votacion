package com.votoperu.controllers;

import com.votoperu.model.Candidato;
import com.votoperu.dao.CandidatoDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/candidatos")
@CrossOrigin(origins = "http://localhost:5173") // Esto usa tu configuración CORS
public class CandidatoController {

    @Autowired
    private CandidatoDAO candidatoDAO;

    @GetMapping
    public ResponseEntity<?> getCandidatos(@RequestParam(required = false) String categoria) {
        try {
            System.out.println("🎯 Petición recibida para categoría: " + categoria);
            
            List<Candidato> candidatos;
            
            if (categoria != null) {
                switch (categoria.toLowerCase()) {
                    case "presidente":
                        candidatos = candidatoDAO.obtenerPorCargo("Presidente");
                        break;
                    case "congresistas":
                        candidatos = candidatoDAO.obtenerPorCargo("Congresista");
                        break;
                    case "parlamento":
                        candidatos = candidatoDAO.obtenerPorCargo("Parlamentario Andino");
                        break;
                    default:
                        candidatos = candidatoDAO.obtenerTodos();
                }
            } else {
                candidatos = candidatoDAO.obtenerTodos();
            }
            
            System.out.println("✅ Candidatos encontrados: " + candidatos.size());
            return ResponseEntity.ok(candidatos);
            
        } catch (Exception e) {
            System.out.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
            
            Map<String, String> error = new HashMap<>();
            error.put("error", "Error obteniendo candidatos: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }

    @PostMapping
    public ResponseEntity<?> createCandidato(@RequestBody Candidato candidato) {
        try {
            // Aquí va tu lógica para crear/actualizar candidatos
            Map<String, String> respuesta = new HashMap<>();
            respuesta.put("message", "Candidato procesado exitosamente");
            respuesta.put("status", "success");
            
            return ResponseEntity.ok(respuesta);
            
        } catch (Exception e) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Error procesando candidato: " + e.getMessage());
            return ResponseEntity.status(500).body(error);
        }
    }
}