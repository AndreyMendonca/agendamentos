package com.devandrey.agendamentoAPI.services;



import com.devandrey.agendamentoAPI.config.mapper.Mapper;
import com.devandrey.agendamentoAPI.controller.DTO.EstudanteDTO;
import com.devandrey.agendamentoAPI.entities.Estudante;
import com.devandrey.agendamentoAPI.exception.ResourceConflictCpfException;
import com.devandrey.agendamentoAPI.exception.ResourceNotFoundException;
import com.devandrey.agendamentoAPI.exception.ResourceUnprocessableException;
import com.devandrey.agendamentoAPI.repositories.EstudanteRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstudanteService {
    @Autowired
    private EstudanteRepository repository;

    @Transactional
    public EstudanteDTO save(EstudanteDTO dto){
        Optional<Estudante> possivelEstudante = repository.findByCpf(dto.getCpf());
        if(possivelEstudante.isPresent()){
            throw new ResourceConflictCpfException("CPF já cadastrado no sistema.");
        }
        Estudante Estudante = repository.save(Mapper.parseObject(dto, Estudante.class));
        return Mapper.parseObject(Estudante, EstudanteDTO.class);
    }

    public List<EstudanteDTO> findAll(){
        List<Estudante> Estudantes = repository.findAll();
        return Mapper.parseListObjects(Estudantes, EstudanteDTO.class);
    }

    public EstudanteDTO findById(Long id){
        Estudante Estudante = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Estudante não localizado"));
        return Mapper.parseObject(Estudante, EstudanteDTO.class);
    }

    @Transactional
    public EstudanteDTO update(Long id, EstudanteDTO entity){
        EstudanteDTO dto = this.findById(id);
        if(!dto.getCpf().equals(entity.getCpf())){
            throw new ResourceUnprocessableException("Não é possivel atualizar o campo CPF");
        }
        entity.setId(id);
        Estudante Estudante = Mapper.parseObject(entity, Estudante.class);
        repository.save(Estudante);
        return Mapper.parseObject(Estudante, EstudanteDTO.class);
    }

    public void delete(Long id){
        this.findById(id);
        repository.deleteById(id);
    }
}
