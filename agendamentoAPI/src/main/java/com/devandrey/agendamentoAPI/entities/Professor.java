package com.devandrey.agendamentoAPI.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "tb_professor")
public class Professor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    @Column(unique = true)
    private String cpf;
    private LocalDate nascimento;
    private String especialidade;
    private Boolean status;

    public Professor(){}

    public Professor(Long id, String nome, String sobrenome, LocalDate nascimento, String especialidade, Boolean status) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
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
        if (!(o instanceof Professor professor)) return false;
        return Objects.equals(id, professor.id) && Objects.equals(nome, professor.nome) && Objects.equals(sobrenome, professor.sobrenome) && Objects.equals(nascimento, professor.nascimento) && Objects.equals(especialidade, professor.especialidade) && Objects.equals(status, professor.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, sobrenome, nascimento, especialidade, status);
    }
}
