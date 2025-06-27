package com.devandrey.agendamentoAPI.entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "tb_estudante")
public class Estudante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private LocalDate nascimento;
    private String cep;
    private String logradouro;
    private Integer numeroCasa;
    private String bairro;
    private String estado;
    private String cidade;
    private String telefone;
    private String whatsapp;
    private String email;

    public Estudante () {}

    public Estudante(Long id, String nome, String sobrenome, String cpf, LocalDate nascimento, String cep, String logradouro, Integer numeroCasa, String bairro, String estado, String cidade, String telefone, String whatsapp, String email) {
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

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Estudante estudante)) return false;
        return Objects.equals(id, estudante.id) && Objects.equals(nome, estudante.nome) && Objects.equals(sobrenome, estudante.sobrenome) && Objects.equals(nascimento, estudante.nascimento) && Objects.equals(cep, estudante.cep) && Objects.equals(logradouro, estudante.logradouro) && Objects.equals(numeroCasa, estudante.numeroCasa) && Objects.equals(bairro, estudante.bairro) && Objects.equals(estado, estudante.estado) && Objects.equals(cidade, estudante.cidade) && Objects.equals(telefone, estudante.telefone) && Objects.equals(whatsapp, estudante.whatsapp) && Objects.equals(email, estudante.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nome, sobrenome, nascimento, cep, logradouro, numeroCasa, bairro, estado, cidade, telefone, whatsapp, email);
    }
}
