package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.controller.DTO.ProfessorDTO;
import com.devandrey.agendamentoAPI.services.ProfessorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professores")
@CrossOrigin(origins = "*")
public class ProfessorController {
    @Autowired
    private ProfessorService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProfessorDTO save(@RequestBody @Valid ProfessorDTO dto){
        return service.save(dto);
    }

    @GetMapping
    public List<ProfessorDTO> findAll(){
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ProfessorDTO findById(@PathVariable Long id){
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public ProfessorDTO update(@PathVariable Long id,@RequestBody @Valid ProfessorDTO dto){
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
