package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.controller.DTO.AgendamentoRequestDTO;
import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.services.AgendamentoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {
    @Autowired
    private AgendamentoService service;

    @PostMapping
    public Agendamento save(@RequestBody @Valid AgendamentoRequestDTO dto){
        return service.save(dto);
    }

    @PatchMapping("/realizado/{id}")
    public Agendamento statusRealizada(@PathVariable Long id){
        return service.statusRealizada(id);
    }

    @PatchMapping("/cancelado/{id}")
    public Agendamento statusCancelado(@PathVariable Long id){
        return service.statusCancelado(id);
    }

    @GetMapping("/todos")
    public List<Agendamento> findAll(){
        return service.findAll();
    }
    @GetMapping()
    public List<Agendamento> findAllByDate(@RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data){
        return service.findAllByDate(data);
    }
    @GetMapping("/ultimos")
    public List<Agendamento> findUltimosRealizados(){
        return service.findUltimosRealizados();
    }

    @PutMapping("/{id}")
    public Agendamento update(@RequestBody @Valid AgendamentoRequestDTO dto, @PathVariable Long id){
        return service.update(dto, id);
    }

}
