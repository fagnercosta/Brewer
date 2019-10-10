var Brewer = Brewer || {};

Brewer.MaskMoney = (function() {
	
	function MaskMoney() {
		this.decimal = $('.js-decimal');
		this.plain = $('.js-plain');
	}
	
	MaskMoney.prototype.enable = function() {
		this.decimal.maskMoney({ decimal: ',', thousands: '.' });
		this.plain.maskMoney({ precision: 0, thousands: '.' });
	}
	
	return MaskMoney;
	
}());


// Classe para telefone

Brewer.MaskPhoneNumber = (function(){
	
	
	function MascaraNumeroTelefone() {
		this.inputTelefone = $('.js-phone-number');
	}
	
	MascaraNumeroTelefone.prototype.enable = function() {
		
		var maskBehavior = function (val) {
			  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
			},
			options = {
			  onKeyPress: function(val, e, field, options) {
			      field.mask(maskBehavior.apply({}, arguments), options);
			    }
		};
			
	    this.inputTelefone.mask(maskBehavior,options);
		
	}
	
	return MascaraNumeroTelefone;
}());


// Classe para CEP

Brewer.MascaraCEP = (function() {
	
	function Mascara() {
		this.inputCep = $('#cep_cliente');		
	} 
	
	Mascara.prototype.iniciar = function() {
		this.inputCep.mask('00.000.000');
	}
	
	return Mascara;
	
}());


// Chamando as funcoes

$(function() {
	var maskMoney = new Brewer.MaskMoney();
	maskMoney.enable();
	
	var maskPhone = new Brewer.MaskPhoneNumber();
	maskPhone.enable();
	
	var maskCep = new Brewer.MascaraCEP();
	maskCep.iniciar();
});