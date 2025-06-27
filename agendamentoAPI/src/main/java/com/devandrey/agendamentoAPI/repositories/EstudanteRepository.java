package com.devandrey.agendamentoAPI.repositories;

import com.devandrey.agendamentoAPI.entities.Estudante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EstudanteRepository extends JpaRepository<Estudante, Long> {
    Optional<Estudante> findByCpf(String cpf);
}
