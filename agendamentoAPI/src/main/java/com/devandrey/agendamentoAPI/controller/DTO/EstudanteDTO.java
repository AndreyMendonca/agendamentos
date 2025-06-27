package com.devandrey.agendamentoAPI.controller.DTO;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;

public class EstudanteDTO {
    private Long id;
    @NotEmpty(message = "é obrigátorio")
    private String nome;
    @NotEmpty(message = "é obrigátorio")
    private String sobrenome;
    @CPF(message = "não é valido")
    private String cpf;
    private LocalDate nascimento;
    @NotEmpty(message = "é obrigátorio")
    private String cep;
    @NotEmpty(message = "é obrigátorio")
    private String logradouro;
    @NotNull(message = "é obrigátorio")
    private Integer numeroCasa;
    @NotEmpty(message = "é obrigátorio")
    private String bairro;
    @NotEmpty(message = "é obrigátorio")
    private String estado;
    @NotEmpty(message = "é obrigátorio")
    private String cidade;
    private String telefone;
    @NotEmpty(message = "é obrigátorio")
    private String whatsapp;
    private String email;

    public EstudanteDTO(){}

    public EstudanteDTO(Long id, String nome, String sobrenome, String cpf, LocalDate nascimento, String cep, String logradouro, Integer numeroCasa, String bairro, String estado, String cidade, String telefone, String whatsapp, String email) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.nascimento = nascimento;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numeroCasa = numeroCasa;
        this.bairro = bairro;
        this.estado = estado;
        this.cidade = cidade;
        this.telefone = telefone;
        this.whatsapp = whatsapp;
        this.email = email;
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

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public Integer getNumeroCasa() {
        return numeroCasa;
    }

    public void setNumeroCasa(Integer numeroCasa) {
        this.numeroCasa = numeroCasa;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
