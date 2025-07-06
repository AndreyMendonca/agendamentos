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
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Service
public class AgendamentoService {
    @Autowired
    private AgendamentoRepository repository;
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private EstudanteRepository estudanteRepository;

    public Agendamento save(AgendamentoRequestDTO dto){
        Agendamento agendamento = new Agendamento();

        validarHorarioDeAntecendencia(dto.getDataAgendamento());

        Professor professor = professorRepository.findById(dto.getProfessor()).orElseThrow(()-> new ResourceNotFoundException("Professor não encontrado"));
        if(!professor.getStatus()){
            throw new ResourceUnprocessableException(
                    "O professor está inativo, ative para agendar"
            );
        }

        Estudante estudante = estudanteRepository.findById(dto.getEstudante()).orElseThrow(()-> new ResourceNotFoundException("Estudante não encontrado"));
        //validar disponibilidade do professor // aluno

        agendamento.setProfessor(professor);
        agendamento.setEstudante(estudante);
        agendamento.setDataAgendamento(dto.getDataAgendamento());
        agendamento.setConteudo(dto.getConteudo());
        agendamento.setStatusAgendamento(StatusAgendamento.NAO_REALIZADA);
        return repository.save(agendamento);
    }

    private void validarDisponibilidadeProfessor(Professor professor, LocalDateTime dataAgendamento){
        LocalDate data = dataAgendamento.toLocalDate();
        LocalDateTime inicioDoDia = data.atStartOfDay();
        LocalDateTime fimDoDia = data.atTime(LocalTime.MAX);
        List<Agendamento> agendamentos = repository.findByProfessorAndDataAgendamentoBetween(professor, inicioDoDia, fimDoDia);
        //fazer validação de dispobilidade
    }

    private void validarHorarioDeAntecendencia(LocalDateTime horarioAgendamento){
        LocalDateTime dataMinimaAgendamento = LocalDateTime.now().plusDays(1);

        if (dataMinimaAgendamento.isAfter(horarioAgendamento)){
            throw new ResourceUnprocessableException("A aula só pode ser agendada ou atualizada com no mínimo 24 horas de antecedência.");
        }
    }
}
