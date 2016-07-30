$(document).ready(function(){
	$("#item1").hide();
	$("#item2").hide();
	$("#item3").hide();
	$("#item4").hide();
	$("#item5").hide();
	$("#item6").hide();
	$("#item7").hide();
	$("#item1").show("fast",function(){
		$("#item2").show("fast",function(){
			$("#item3").show("fast",function(){	
				$("#item4").show("fast",function(){	
						$("#item5").show("fast",function(){	
						});	
						$("#item6").fadeIn(2000);
						$("#item7").fadeIn(2000);
				});	
			});
		});
	});

	/*Detalles de Servicios*/
	$('.mysos img').click(function(env){
		myid = $(this).attr("id");
		$('.mysos').fadeOut(1000);
		$('#detalles').html("<img src='img/"+myid+".png' class='img-responsive'>");
		$('#detalles').fadeIn(1000);
	});

	$('#detalles').click(function(){
		$('#detalles').fadeOut(1000);
		$('.mysos').fadeIn(1000);
		$('#detalles').html("");
	});

	/*Facebook*/
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "http://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.7";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


	/*Efecto de Ancla*/
	 $('.lmenu li a').click(function() {
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {
	             var $target = $(this.hash);
	             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	             if ($target.length) {
	                 var targetOffset = $target.offset().top;
	                 $('html,body').animate({scrollTop: targetOffset}, 1000);
	                 return false;
	            }
	       }
   	});


	 /*Envio de correos*/
	 $('#btnenviar').click(function (){
		var url = window.location.href;
		var Nombre = $('#nombre').val();
		var Empresa = $('#empresa').val();
		var Correo = $('#correo').val();
		var Telefono = $('#telefono').val();
		var Estado = $('#estado').val();
		var Asunto = $('#asunto').val();
		var Mensaje =$('#mensaje').val();
		
		
			if (Nombre=="") {
				$('#msj').html("Por favor escriba su Nombre Completo.");
				$('#nombre').focus();
				$('#notificacion').modal('show');
			}
			else if (Correo=="") {
				$('#msj').html(Nombre + " por favor comp\u00e1rtanos su E-mail.");
				$('#correo').focus();
				$('#notificacion').modal('show');
			}
			else if (Telefono=="") {
				$('#msj').html(Nombre + " por favor digite su n\u00famero de teléfono.");
				$('#telefono').focus();
				$('#notificacion').modal('show');
			}
			else if (Estado=="") {
				$('#msj').html(Nombre + " por favor díganos de que parte nos escribe.");
				$('#estado').focus();
				$('#notificacion').modal('show');
			}
			else if (Asunto=="*Requiero") {
				$('#msj').html(Nombre + " por favor seleccione un asunto.");
				$('#asunto').focus();
				$('#notificacion').modal('show');
			}
			else if (Mensaje==""){
				$('#msj').html(Nombre + " por favor escriba su mensaje");
				$('#mensaje').focus();
				$('#notificacion').modal('show');
			}
			
			else{
				
				if (Empresa==""){
				Reserva="N/A"; 
				}
				var urlData ="&url=" + url +
							"&Nombre=" + Nombre +
							"&Empresa=" + Empresa +
							"&Correo=" + Correo +
							"&Telefono="+ Telefono +
							"&Estado=" + Estado +
							"&Asunto=" + Asunto +
							"&Mensaje=" + Mensaje;

			$.ajax({ 
					type:  'POST',
					url:   'php/mail.php',
					async: true,
					data: urlData,
					dataType: 'text/html',
					success: function() { /* sucesso */
	             },
					complete:  function(data) {
						$('#mymsj').html(data.responseText);
						$('#notificacion').modal('show');
	                }
	        });
			
			}
		('#nombre').val('');
		('#empresa').val('');
		('#correo').val('');
		('#telefono').val('');
		('#estado').val('');
		('#asunto').val('');
		('#mensaje').val();
		
		return false;
		});
});
