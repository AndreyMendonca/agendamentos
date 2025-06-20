package com.devandrey.agendamentoAPI.repositories;

import com.devandrey.agendamentoAPI.entities.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
