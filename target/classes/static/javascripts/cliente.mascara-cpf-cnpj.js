var Cliente = Cliente || {};

Cliente.MascaraCpfCnpj = (function(){
	
	function Mascara() {
		this.radioTipoPessoa = $('.js-radio-tipo-pessoa');
		this.labelCpfCnpj =$('[for=cpfOuCnpj]');
		this.inputCpfCnpj = $('#cpfOuCnpj');
	}
	
	Mascara.prototype.iniciar = function() {
		this.radioTipoPessoa.on('change', onAlterarTipoPessoa.bind(this));
	}
	
	function onAlterarTipoPessoa(evento) {
		var tipoPessoaSelecionado = $(evento.currentTarget);	
		this.labelCpfCnpj.text(tipoPessoaSelecionado.data('texto'));
		this.inputCpfCnpj.mask(tipoPessoaSelecionado.data('mascara'));
		this.inputCpfCnpj.val('');
		this.inputCpfCnpj.removeAttr('disabled');
		
	}
	
	return Mascara;
	
}());


$(function(){
	var mascara = new Cliente.MascaraCpfCnpj();
	mascara.iniciar();
	
});
