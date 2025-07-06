package com.devandrey.agendamentoAPI.controller.DTO;

import java.time.LocalDateTime;

public class AgendamentoRequestDTO {
    private Long id;
    private Long professor;
    private Long estudante;
    private LocalDateTime dataAgendamento;
    private String conteudo;

    public AgendamentoRequestDTO(){}

    public AgendamentoRequestDTO(Long id, Long professor, Long estudante, LocalDateTime dataAgendamento, String conteudo) {
        this.id = id;
        this.professor = professor;
        this.estudante = estudante;
        this.dataAgendamento = dataAgendamento;
        this.conteudo = conteudo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
