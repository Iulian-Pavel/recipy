package com.recipy.recipyserver.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recipy.recipyserver.dto.RegisterRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @PostMapping("/register")
    public String register(@Valid @RequestBody RegisterRequest request) {
        return "User succesfully registered";
    }
}
