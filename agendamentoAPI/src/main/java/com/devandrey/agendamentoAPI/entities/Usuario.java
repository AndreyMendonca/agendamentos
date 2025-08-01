package com.devandrey.agendamentoAPI.entities;

import com.devandrey.agendamentoAPI.entities.enuns.UsuarioRole;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "tb_usuario")
public class Usuario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String email;
    private String senha;
    private UsuarioRole role;
    private String nome;

    public Usuario(){}

    public Usuario(String email, String id, String nome, UsuarioRole role, String senha) {
        this.email = email;
        this.id = id;
        this.nome = nome;
        this.role = role;
        this.senha = senha;
    }

    public Usuario(String email, String senha, String nome){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.role = UsuarioRole.ADMIN;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == UsuarioRole.ADMIN){
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        }else{
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
        }
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
