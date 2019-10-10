<script>
			$(function() {
				var settings = {
					type : 'json',
					filelimit : 1,
					allow : '*.(jpg|jpeg|png)',
					action : '/brewer/fotos',
					complete : function(resposta) {
						
									var inputNomeFoto = $('input[name=foto]');
									var inputcontentType = $('input[name=contentType]');
									var htmlFotoCervejaTemplate = $('#foto-cerveja').html();								
									var template = Handlebars.compile(htmlFotoCervejaTemplate);
									var htmlFotoCerveja = template({nomeFoto : resposta.nome});								
									var containerFotoCerveja = $('.js-foto-cerveja-container');		
									var uploadDrop = $('#upload-drop');
									
						
									inputNomeFoto.val(resposta.nome);
									inputcontentType.val(resposta.contentType);
						
									uploadDrop.addClass('hidden');

									containerFotoCerveja.append(htmlFotoCerveja);
									
									var botaoRemover = $('.js-remove-foto');
									var conteudoHbs = $('.js-foto-cerveja');
									
									botaoRemover.on('click', function () {
										conteudoHbs.remove();
										uploadDrop.removeClass('hidden');
										inputNomeFoto.val('');
										inputcontentType.val('');
										console.log("Excluindo foto temporária....");
										
									});
									
									
								
									
						
						}
						
					};
						
						
						

				UIkit.uploadSelect($('#upload-select'), settings);
				UIkit.uploadDrop($('#upload-drop'), settings);
			});
		</script>