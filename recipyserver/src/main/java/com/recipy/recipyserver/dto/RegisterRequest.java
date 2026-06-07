package com.recipy.recipyserver.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.NotBlank;

public class RegisterRequest {
    @NotBlank(message = "Username is required")
    @Size(min = 3)
    private String username;

    @NotBlank(message = "Password is required!")
    @Size(min = 6, max = 100, message = "Password must be between 6 and 100 characters")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setEmail(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
