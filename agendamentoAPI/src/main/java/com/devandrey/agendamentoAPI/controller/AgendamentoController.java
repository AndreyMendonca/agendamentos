package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.controller.DTO.AgendamentoRequestDTO;
import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.services.AgendamentoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
