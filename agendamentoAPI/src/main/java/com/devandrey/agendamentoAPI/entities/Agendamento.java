package com.devandrey.agendamentoAPI.entities;

import com.devandrey.agendamentoAPI.entities.enuns.StatusAgendamento;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "tb_agendamento")
public class Agendamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dataAgendamento;
    private LocalDateTime dataRealizado;
    private String conteudo;

    @ManyToOne()
    @JoinColumn(name = "estudante_id")
    private Estudante estudante;

    @ManyToOne()
    @JoinColumn(name = "professor_id")
    private Professor professor;
    private StatusAgendamento statusAgendamento;

    public Agendamento(){}

    public Agendamento(Long id, LocalDateTime dataAgendamento, String conteudo, Estudante estudate, Professor professor, StatusAgendamento statusAgendamento) {
        this.id = id;
        this.dataAgendamento = dataAgendamento;
        this.conteudo = conteudo;
        this.estudante = estudate;
        this.professor = professor;
        this.statusAgendamento = statusAgendamento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDataAgendamento() {
        return dataAgendamento;
    }

    public void setDataAgendamento(LocalDateTime dataAgendamento) {
        this.dataAgendamento = dataAgendamento;
    }

    public LocalDateTime getDataRealizado() {
        return dataRealizado;
    }

    public void setDataRealizado(LocalDateTime dataRealizado) {
        this.dataRealizado = dataRealizado;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public Estudante getEstudante() {
        return estudante;
    }

    public void setEstudante(Estudante estudante) {
        this.estudante = estudante;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public StatusAgendamento getStatusAgendamento() {
        return statusAgendamento;
    }

    public void setStatusAgendamento(StatusAgendamento statusAgendamento) {
        this.statusAgendamento = statusAgendamento;
    }

    @Override
    public boolean equals(Object o) {
        if (!(o instanceof Agendamento that)) return false;
        return Objects.equals(id, that.id) && Objects.equals(dataAgendamento, that.dataAgendamento) && Objects.equals(conteudo, that.conteudo) && Objects.equals(estudante, that.estudante) && Objects.equals(professor, that.professor) && statusAgendamento == that.statusAgendamento;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, dataAgendamento, conteudo, estudante, professor, statusAgendamento);
    }
}
