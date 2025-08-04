package com.devandrey.agendamentoAPI.config.security;

import com.devandrey.agendamentoAPI.entities.Usuario;
import com.devandrey.agendamentoAPI.exception.InvalidTokenException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    @Autowired
    private SecretKeyGenerator keyGenerator;

    public AccessToken generateToken(Usuario usuario){
        SecretKey key = keyGenerator.getKey();
        Date expirationDate = generateExpirationDate();
        Map<String, Object> claims = generateTokenClams(usuario);

        String token = Jwts.builder()
                .signWith(key)
                .subject(usuario.getUsername())
                .expiration(expirationDate)
                .claims(claims)
                .compact();

        return new AccessToken(token);
    }

    private Date generateExpirationDate(){
        LocalDateTime now = LocalDateTime.now().plusMinutes(60);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
    }

    private Map<String, Object> generateTokenClams(Usuario usuario){
        Map<String, Object> claims = new HashMap<>();
        claims.put("name", usuario.getNome());
        return claims;
    }

    public String getEmailFromToken(String tokenJwt){
        try{
            return Jwts
                    .parser()
                    .verifyWith(keyGenerator.getKey())
                    .build()
                    .parseSignedClaims(tokenJwt)
                    .getPayload()
                    .getSubject();
        }catch (JwtException e){
            throw new InvalidTokenException(e.getMessage());
        }
    }
}
