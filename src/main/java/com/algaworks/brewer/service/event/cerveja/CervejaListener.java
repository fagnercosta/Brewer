package com.algaworks.brewer.service.event.cerveja;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.algaworks.brewer.storage.FotoStorage;

@Component
public class CervejaListener {
	
	
	@Autowired
	private FotoStorage storage;
	
	
	@EventListener(condition = "#evento.existeFoto()")
	public void cervejaSalva(CervejaSalvaEvent evento) {
		System.out.println("Tem Foto SIM>>"+evento.getCerveja().getFoto());	
		this.storage.salvar(evento.getCerveja().getFoto());
	}

}
