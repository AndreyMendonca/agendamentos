package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.controller.DTO.EstudanteDTO;
import com.devandrey.agendamentoAPI.services.EstudanteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estudantes")
@CrossOrigin(origins = "*")
public class EstudanteController {
    @Autowired
    private EstudanteService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EstudanteDTO save(@RequestBody @Valid EstudanteDTO estudanteDTO){
        return service.save(estudanteDTO);
    }

    @GetMapping("/{id}")
    public EstudanteDTO findById(@PathVariable Long id){
        return service.findById(id);
    }

    @GetMapping
    public List<EstudanteDTO> findAll(){
        return service.findAll();
    }

    @PutMapping("/{id}")
    public EstudanteDTO update(@PathVariable Long id,@RequestBody @Valid EstudanteDTO estudanteDTO){
        return service.update(id, estudanteDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}
