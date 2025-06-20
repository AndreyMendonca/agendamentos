package com.devandrey.agendamentoAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ResourceConflictCpfException extends RuntimeException{
    public ResourceConflictCpfException(String msg){
        super(msg);
    }
}

