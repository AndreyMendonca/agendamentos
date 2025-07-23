package com.devandrey.agendamentoAPI.repositories;

import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.entities.Estudante;
import com.devandrey.agendamentoAPI.entities.Professor;
import com.devandrey.agendamentoAPI.entities.enuns.StatusAgendamento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByProfessorAndDataAgendamentoBetween(Professor professor, LocalDateTime inicio, LocalDateTime fim);

    List<Agendamento> findByEstudanteAndDataAgendamentoBetween(Estudante estudante, LocalDateTime inicioDoDia, LocalDateTime fimDoDia);

    List<Agendamento> findByDataAgendamentoBetween(LocalDateTime inicio, LocalDateTime fim);

    List<Agendamento> findTop10ByStatusAgendamentoOrderByDataRealizadoDesc(StatusAgendamento statusAgendamento);

}
