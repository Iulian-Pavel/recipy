package com.recipy.recipyserver.exception;
import java.util.Map;

public class GlobalExceptionResponse {
    private String message;
    private Map<String, String> errors;

    public GlobalExceptionResponse(String message, Map<String, String> errors) {
        this.message = message;
        this.errors = errors;
    }

    public String getMessage() {
        return message;
    }

    public Map<String, String> getErrors() {
        return errors;
    }
}
