package com.devandrey.agendamentoAPI.repositories;

import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.entities.Estudante;
import com.devandrey.agendamentoAPI.entities.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    List<Agendamento> findByProfessorAndDataAgendamentoBetween(Professor professor, LocalDateTime inicio, LocalDateTime fim);

    List<Agendamento> findByEstudanteAndDataAgendamentoBetween(Estudante estudante, LocalDateTime inicioDoDia, LocalDateTime fimDoDia);
}
