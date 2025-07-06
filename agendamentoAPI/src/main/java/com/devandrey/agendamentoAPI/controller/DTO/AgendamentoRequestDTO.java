package com.devandrey.agendamentoAPI.controller.DTO;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public class AgendamentoRequestDTO {
    @NotNull(message = "é obrigátorio")
    private Long professor;
    @NotNull(message = "é obrigátorio")
    private Long estudante;
    @NotNull(message = "é obrigátorio")
    private LocalDateTime dataAgendamento;
    @NotEmpty(message = "é obrigátorio")
    private String conteudo;

    public AgendamentoRequestDTO(){}

    public AgendamentoRequestDTO(Long professor, Long estudante, LocalDateTime dataAgendamento, String conteudo) {
        this.professor = professor;
        this.estudante = estudante;
        this.dataAgendamento = dataAgendamento;
        this.conteudo = conteudo;
    }

    public Long getProfessor() {
        return professor;
    }

    public void setProfessor(Long professor) {
        this.professor = professor;
    }

    public Long getEstudante() {
        return estudante;
    }

    public void setEstudante(Long estudante) {
        this.estudante = estudante;
    }

    public LocalDateTime getDataAgendamento() {
        return dataAgendamento;
    }

    public void setDataAgendamento(LocalDateTime dataAgendamento) {
        this.dataAgendamento = dataAgendamento;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }
}
