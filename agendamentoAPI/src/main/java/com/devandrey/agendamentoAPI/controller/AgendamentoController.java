package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.controller.DTO.AgendamentoRequestDTO;
import com.devandrey.agendamentoAPI.entities.Agendamento;
import com.devandrey.agendamentoAPI.services.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {
    @Autowired
    private AgendamentoService service;

    @PostMapping
    public Agendamento save(@RequestBody AgendamentoRequestDTO dto){
        return service.save(dto);
    }
}
