package com.devandrey.agendamentoAPI.controller.DTO;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;
import java.util.Objects;

public class ProfessorDTO {
    private Long id;
    @NotEmpty(message = "é obrigátorio")
    private String nome;
    @NotEmpty(message = "é obrigátorio")
    private String sobrenome;
    @CPF(message = "não é válido")
    @NotEmpty(message = "é obrigátorio")
    private String cpf;
    private LocalDate nascimento;
    private String especialidade;
    @NotNull(message = "é obrigátorio")
    private Boolean status;

    public ProfessorDTO(){}

    public ProfessorDTO(Long id, String nome, String sobrenome, String cpf, LocalDate nascimento, String especialidade, Boolean status) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.especialidade = especialidade;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof ProfessorDTO that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(nome, that.nome) && Objects.equals(sobrenome, that.sobrenome) && Objects.equals(nascimento, that.nascimento) && Objects.equals(especialidade, that.especialidade) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, sobrenome, nascimento, especialidade, status);
    }
}
