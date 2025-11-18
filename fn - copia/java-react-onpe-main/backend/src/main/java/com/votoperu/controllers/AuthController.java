package com.votoperu.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AuthController {

@PostMapping("/login")
public Map<String, Object> login(@RequestBody Map<String, String> loginRequest) {
    // ACEPTAR AMBOS FORMATOS
    String username = loginRequest.get("username");
    String usuario = loginRequest.get("usuario");
    String password = loginRequest.get("password");
    
    String user = username != null ? username : usuario;
    
    Map<String, Object> response = new HashMap<>();
    
    // LOG PARA DEBUG
    System.out.println("🔐 Login attempt - Usuario: " + user + ", Password: " + password);
    
    // CREDENCIALES VÁLIDAS
    if ("admin".equals(user) && "admin".equals(password)) {
        response.put("success", true);
        response.put("message", "Login exitoso");
        response.put("user", Map.of(
            "id", 1,
            "username", user,
            "role", "admin"
        ));
        System.out.println("✅ Login exitoso para: " + user);
    } else {
        response.put("success", false);
        response.put("message", "Credenciales incorrectas");
        System.out.println("❌ Login fallido para: " + user);
    }
    
    return response;
}
}