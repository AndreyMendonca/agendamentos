package com.devandrey.agendamentoAPI.services;

import com.devandrey.agendamentoAPI.config.mapper.Mapper;
import com.devandrey.agendamentoAPI.controller.DTO.ProfessorDTO;
import com.devandrey.agendamentoAPI.entities.Professor;
import com.devandrey.agendamentoAPI.exception.ResourceConflictCpfException;
import com.devandrey.agendamentoAPI.exception.ResourceNotFoundException;
import com.devandrey.agendamentoAPI.exception.ResourceUnprocessableException;
import com.devandrey.agendamentoAPI.repositories.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serial;
import java.util.List;
import java.util.Optional;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository repository;

    @Transactional
    public ProfessorDTO save(ProfessorDTO dto){
        Optional<Professor> possivelProfessor = repository.findByCpf(dto.getCpf());
        if(possivelProfessor.isPresent()){
            throw new ResourceConflictCpfException("CPF já cadastrado no sistema.");
        }
        Professor professor = repository.save(Mapper.parseObject(dto, Professor.class));
        return Mapper.parseObject(professor, ProfessorDTO.class);
    }

    public List<ProfessorDTO> findAll(){
        List<Professor> professores = repository.findAll();
        return Mapper.parseListObjects(professores, ProfessorDTO.class);
    }

    public ProfessorDTO findById(Long id){
        Professor professor = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Professor não localizado"));
        return Mapper.parseObject(professor, ProfessorDTO.class);
    }

    @Transactional
    public ProfessorDTO update(Long id, ProfessorDTO entity){
        ProfessorDTO dto = this.findById(id);
        if(!dto.getCpf().equals(entity.getCpf())){
            throw new ResourceUnprocessableException("Não é possivel atualizar o campo CPF");
        }
        entity.setId(id);
        Professor professor = Mapper.parseObject(entity, Professor.class);
        repository.save(professor);
        return Mapper.parseObject(professor, ProfessorDTO.class);
    }

    public void delete(Long id){
        this.findById(id);
        repository.deleteById(id);
    }
}
