package com.algaworks.brewer.controller.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.algaworks.brewer.service.exception.NomeEstiloJaCadastradoException;

@ControllerAdvice
public class ControllerAdvicxeExceptionHandler {

	@ExceptionHandler(NomeEstiloJaCadastradoException.class)
	public ResponseEntity<?> HandlerNomeEstilo(NomeEstiloJaCadastradoException e) {
		return ResponseEntity.badRequest().body(e.getMessage()); 
	}
}
