package com.votoperu.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/propuestas")
public class PropuestasController {

    @GetMapping
    public String getPropuestas() {
        return "{\"propuestas\": \"datos de propuestas\"}";
    }
}