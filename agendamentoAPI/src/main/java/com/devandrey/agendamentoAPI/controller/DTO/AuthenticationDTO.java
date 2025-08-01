package com.devandrey.agendamentoAPI.controller.DTO;

import jakarta.validation.constraints.NotEmpty;

public class AuthenticationDTO {
    @NotEmpty(message = "é obrigátorio")
    private String email;
    @NotEmpty(message = "é obrigátorio")
    private String senha;

    public AuthenticationDTO(){}

    public AuthenticationDTO(String email, String senha) {
        this.email = email;
        this.senha = senha;
    }
    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
