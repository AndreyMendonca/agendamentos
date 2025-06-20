package com.devandrey.agendamentoAPI.repositories;

import com.devandrey.agendamentoAPI.entities.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
    Optional<Professor> findByCpf(String cpf);
}
