package com.votoperu.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuariosController {

    @GetMapping("/verificar/{dni}")
    public String verificarUsuario(@PathVariable String dni) {
        return "{\"valido\": true, \"dni\": \"" + dni + "\"}";
    }
}