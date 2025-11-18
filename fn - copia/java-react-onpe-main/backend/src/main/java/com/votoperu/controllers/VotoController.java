package com.votoperu.controllers;

import com.votoperu.service.VotacionService;
import com.votoperu.model.Voto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/votos")
@CrossOrigin(origins = "http://localhost:5173")
public class VotoController {

    @Autowired
    private VotacionService votacionService;

    @PostMapping
    public ResponseEntity<?> registrarVoto(@RequestBody Voto voto) {
        try {
            System.out.println("🎯 Registrando voto para: " + voto.getDniUsuario());
            
            boolean resultado = votacionService.procesarVoto(voto);
            
            if (resultado) {
                return ResponseEntity.ok(Map.of(
                    "success", true,
                    "mensaje", "Voto registrado exitosamente"
                ));
            } else {
                return ResponseEntity.badRequest().body(Map.of(
                    "success", false,
                    "mensaje", "Error registrando el voto"
                ));
            }
            
        } catch (Exception e) {
            System.err.println("❌ Error registrando voto: " + e.getMessage());
            e.printStackTrace();
            
            return ResponseEntity.status(500).body(Map.of(
                "success", false,
                "mensaje", "Error en el servidor: " + e.getMessage()
            ));
        }
    }
}