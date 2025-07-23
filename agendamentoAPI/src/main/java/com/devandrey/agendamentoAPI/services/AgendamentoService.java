package com.devandrey.agendamentoAPI.services;

import com.devandrey.agendamentoAPI.config.mapper.Mapper;
import com.devandrey.agendamentoAPI.controller.DTO.AgendamentoRequestDTO;
import com.devandrey.agendamentoAPI.controller.DTO.EstudanteDTO;
import com.devandrey.agendamentoAPI.controller.DTO.ProfessorDTO;
import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.entities.Estudante;
import com.devandrey.agendamentoAPI.entities.Professor;
import com.devandrey.agendamentoAPI.entities.enuns.StatusAgendamento;
import com.devandrey.agendamentoAPI.exception.ResourceNotFoundException;
import com.devandrey.agendamentoAPI.exception.ResourceUnprocessableException;
import com.devandrey.agendamentoAPI.repositories.AgendamentoRepository;
import com.devandrey.agendamentoAPI.repositories.EstudanteRepository;
import com.devandrey.agendamentoAPI.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class AgendamentoService {
    @Autowired
    private AgendamentoRepository repository;
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private EstudanteRepository estudanteRepository;

    public Agendamento save(AgendamentoRequestDTO dto) {
        Agendamento agendamento = new Agendamento();
        validarHorarioDeAntecendencia(dto.getDataAgendamento());

        Professor professor = professorRepository.findById(dto.getProfessor()).orElseThrow(() -> new ResourceNotFoundException("Professor não encontrado"));
        if (!professor.getStatus()) {
            throw new ResourceUnprocessableException(
                    "O professor está inativo, ative para agendar"
            );
        }
        validarDisponibilidadeProfessor(professor, dto.getDataAgendamento());

        Estudante estudante = estudanteRepository.findById(dto.getEstudante()).orElseThrow(() -> new ResourceNotFoundException("Estudante não encontrado"));
        validarDisponibilidadeEstudante(estudante, dto.getDataAgendamento());

        agendamento.setProfessor(professor);
        agendamento.setEstudante(estudante);
        agendamento.setDataAgendamento(dto.getDataAgendamento());
        agendamento.setConteudo(dto.getConteudo());
        agendamento.setStatusAgendamento(StatusAgendamento.NAO_REALIZADO);
        return repository.save(agendamento);
    }

    public Agendamento findById(Long id){
        return repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Agendamento não encontrado"));
    }

    public Agendamento statusRealizada(Long id){
        Agendamento agendamento = this.findById(id);
        if(agendamento.getStatusAgendamento().equals(StatusAgendamento.CANCELADO)){
            throw new ResourceUnprocessableException("O agendamento foi cancelado, não é possivel setar como realizado");
        }
        agendamento.setDataRealizado(LocalDateTime.now());
        agendamento.setStatusAgendamento(StatusAgendamento.REALIZADO);
        return repository.save(agendamento);
    }

    public Agendamento statusCancelado(Long id){
        Agendamento agendamento = this.findById(id);
        if(agendamento.getStatusAgendamento().equals(StatusAgendamento.REALIZADO)){
            throw new ResourceUnprocessableException("O agendamento já foi realizado, não é possível cancelar.");
        }
        agendamento.setStatusAgendamento(StatusAgendamento.CANCELADO);
        return repository.save(agendamento);
    }

    public List<Agendamento> findAll() {
        return repository.findAll();
    }

    public List<Agendamento> findAllByDate(LocalDate data) {
        LocalDateTime inicio = data.atStartOfDay();
        LocalDateTime fim = data.atTime(LocalTime.MAX);
        return repository.findByDataAgendamentoBetween(inicio, fim);
    }

    private void validarDisponibilidadeProfessor(Professor professor, LocalDateTime dataAgendamento) {
        LocalDate data = dataAgendamento.toLocalDate();
        LocalDateTime inicioDoDia = data.atStartOfDay();
        LocalDateTime fimDoDia = data.atTime(LocalTime.MAX);
        List<Agendamento> agendamentos = repository.findByProfessorAndDataAgendamentoBetween(professor, inicioDoDia, fimDoDia);

        for (Agendamento agendamento : agendamentos) {
            LocalDateTime agendamentoInicio = agendamento.getDataAgendamento();
            LocalDateTime rangeInicialAgendamento = agendamentoInicio.minusHours(1);
            LocalDateTime rangeFinalAgendamento = agendamentoInicio.plusHours(1);

            boolean confito = dataAgendamento.isAfter(rangeInicialAgendamento) && dataAgendamento.isBefore(rangeFinalAgendamento);
            if (confito) {
                throw new ResourceUnprocessableException("O professor estará em aula no horário selecionado");
            }
        }
    }

    private void validarDisponibilidadeEstudante(Estudante estudante, LocalDateTime dataAgendamento) {
        LocalDate data = dataAgendamento.toLocalDate();
        LocalDateTime inicioDoDia = data.atStartOfDay();
        LocalDateTime fimDoDia = data.atTime(LocalTime.MAX);
        List<Agendamento> agendamentos = repository.findByEstudanteAndDataAgendamentoBetween(estudante, inicioDoDia, fimDoDia);

        for (Agendamento agendamento : agendamentos) {
            LocalDateTime agendamentoInicio = agendamento.getDataAgendamento();
            LocalDateTime rangeInicialAgendamento = agendamentoInicio.minusHours(1);
            LocalDateTime rangeFinalAgendamento = agendamentoInicio.plusHours(1);

            boolean confito = dataAgendamento.isAfter(rangeInicialAgendamento) && dataAgendamento.isBefore(rangeFinalAgendamento);
            if (confito) {
                throw new ResourceUnprocessableException("O estudante estará em aula no horário selecionado");
            }
        }
    }

    private void validarHorarioDeAntecendencia(LocalDateTime horarioAgendamento) {
        LocalDateTime dataMinimaAgendamento = LocalDateTime.now().plusDays(1);

        if (dataMinimaAgendamento.isAfter(horarioAgendamento)) {
            throw new ResourceUnprocessableException("A aula só pode ser agendada ou atualizada com no mínimo 24 horas de antecedência.");
        }
    }


}
