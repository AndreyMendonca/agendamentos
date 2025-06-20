package com.devandrey.agendamentoAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class ResourceUnprocessableException extends RuntimeException{
    public ResourceUnprocessableException(String msg){
        super(msg);
    }
}

