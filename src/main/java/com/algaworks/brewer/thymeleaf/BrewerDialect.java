package com.algaworks.brewer.thymeleaf;

import java.util.HashSet;
import java.util.Set;

import org.thymeleaf.dialect.AbstractProcessorDialect;
import org.thymeleaf.processor.IProcessor;
import org.thymeleaf.standard.StandardDialect;

import com.algaworks.brewer.thymeleaf.processor.ClassForErrorAttributeTagProcessor;
import com.algaworks.brewer.thymeleaf.processor.MessageElementTagProcessor;
import com.algaworks.brewer.thymeleaf.processor.OrderElementTagProcessor;
import com.algaworks.brewer.thymeleaf.processor.PaginationElementTagProcessor;

public class BrewerDialect extends AbstractProcessorDialect {
	
	private static final String NOME = "AlgaWorks Brewer";
	private static final String PREFIX = "brewer";

	public BrewerDialect() {
		super(NOME, PREFIX, StandardDialect.PROCESSOR_PRECEDENCE);		
	}

	@Override
	public Set<IProcessor> getProcessors(String dialectPrefix) {
		final Set<IProcessor> processadores = new HashSet<>();
		processadores.add(new ClassForErrorAttributeTagProcessor(dialectPrefix));
		processadores.add(new MessageElementTagProcessor(dialectPrefix));
		processadores.add(new OrderElementTagProcessor(dialectPrefix));
		processadores.add(new PaginationElementTagProcessor(dialectPrefix));
		return processadores;
		
	}

}
