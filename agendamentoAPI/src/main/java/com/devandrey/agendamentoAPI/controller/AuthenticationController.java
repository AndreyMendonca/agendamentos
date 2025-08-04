package com.devandrey.agendamentoAPI.controller;

import com.devandrey.agendamentoAPI.config.security.AccessToken;
import com.devandrey.agendamentoAPI.config.security.JwtService;
import com.devandrey.agendamentoAPI.controller.DTO.AuthenticationDTO;
import com.devandrey.agendamentoAPI.controller.DTO.RegisterDTO;
import com.devandrey.agendamentoAPI.entities.Usuario;
import com.devandrey.agendamentoAPI.repositories.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UsuarioRepository repository;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.getEmail(), data.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        AccessToken accessToken = jwtService.generateToken((Usuario) auth.getPrincipal());

        return ResponseEntity.ok(accessToken);
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if(repository.findByEmail(data.getEmail())!=null){
            return ResponseEntity.badRequest().build();
        }
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.getSenha());
        Usuario usuario = new Usuario(data.getEmail(), encryptedPassword, data.getNome());

        repository.save(usuario);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
