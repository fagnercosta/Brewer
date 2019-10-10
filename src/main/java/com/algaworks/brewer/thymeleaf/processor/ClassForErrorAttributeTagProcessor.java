package com.algaworks.brewer.thymeleaf.processor;

import javax.persistence.PrePersist;

import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.engine.AttributeName;
import org.thymeleaf.model.IProcessableElementTag;
import org.thymeleaf.processor.element.AbstractAttributeTagProcessor;
import org.thymeleaf.processor.element.IElementTagStructureHandler;
import org.thymeleaf.spring4.util.FieldUtils;
import org.thymeleaf.templatemode.TemplateMode;

public class ClassForErrorAttributeTagProcessor extends AbstractAttributeTagProcessor {
	
	private static final String NOME_ATRIBUTO ="classforerror";
	private static final int PRECENCIA =1000;

	public ClassForErrorAttributeTagProcessor(String dialectPrefix) {
		super(TemplateMode.HTML,dialectPrefix,null,false,NOME_ATRIBUTO,true,PRECENCIA,true);
	}

	@Override
	protected void doProcess(ITemplateContext context, IProcessableElementTag tag, AttributeName attributeName, String attributeValue, IElementTagStructureHandler structureHandler) {	
		String field = attributeValue;
		boolean temErro = FieldUtils.hasErrors(context, field);
		
		if(temErro) {
			String classesExistentes = tag.getAttributeValue("class");
			structureHandler.setAttribute("class", classesExistentes+ " has-error");
		}
	}

}
