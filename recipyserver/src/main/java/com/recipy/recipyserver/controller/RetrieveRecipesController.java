package com.recipy.recipyserver.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RetrieveRecipesController {

    @GetMapping(path = "/hello")
	public String helloWorld() {
        return "Hello, World!";
    }

}
