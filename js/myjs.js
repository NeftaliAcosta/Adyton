$(document).ready(function(){
	var dirm = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.9668179883383!2d-100.30688428497957!3d25.738610883647308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662945898d24689%3A0x791182c8d770a209!2sLope+de+Vega+200%2C+An%C3%A1huac%2C+66450+San+Nicol%C3%A1s+de+los+Garza%2C+N.L.!5e0!3m2!1ses-419!2smx!4v1470079143034";
	var dirg = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5621307995075!2d-103.4340892163556!3d20.68738585648423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428aec167b0cd73%3A0xf1594ecd65f02578!2sAv.+Inglaterra+7030%2C+Paseos+Universidad%2C+45016+Zapopan%2C+Jal.!5e0!3m2!1ses-419!2smx!4v1469819044573";
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

	/*Inicio mapa*/

	$('#guad').click(function(){
		$('#mymapa iframe').attr("src",dirg);
		$('#guad').css('color','#383a43');
		$('#mty').css('color','#0070bb');
	})
	$('#mty').click(function(){
		$('#mymapa iframe').attr("src",dirm);
		$('#guad').css('color','#0070bb');
		$('#mty').css('color','#383a43');
	})
	/*Fin mapa*/

	/*Detalles de Servicios*/
	$('.mysos img').click(function(env){
		myid = $(this).attr("id");
		$('.mysos').fadeOut(1000);
		$('#detalles').html("<img src='img/"+myid+".png' class='img-responsive'>");
		$('#detalles').fadeIn(1000);
	});

	$('#detalles').click(function(){
		var pathname = window.location.pathname;
		$('#detalles').fadeOut(1000);
		$('.mysos').fadeIn(1000);
		$('#detalles').html("");
		window.location.href = pathname+"#soluciones";
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
		if (Empresa==""){
				Reserva="N/A"; 
			}
		
		
			if (Nombre=="") {
				$('#msj').html("Por favor escriba su Nombre Completo.");
				$('#nombre').focus();
				
			}
			else if (Correo=="") {
				$('#msj').html(Nombre + " por favor comp\u00e1rtanos su E-mail.");
				$('#correo').focus();
				
			}
			else if (Telefono=="") {
				$('#msj').html(Nombre + " por favor digite su n\u00famero de teléfono.");
				$('#telefono').focus();
				
			}
			else if (Estado=="") {
				$('#msj').html(Nombre + " por favor díganos de que parte nos escribe.");
				$('#estado').focus();
				
			}
			else if (Asunto=="*Requiero") {
				$('#msj').html(Nombre + " por favor seleccione un asunto.");
				$('#asunto').focus();
				
			}
			else if (Mensaje==""){
				$('#msj').html(Nombre + " por favor escriba su mensaje");
				$('#mensaje').focus();
				
			}
			
			else{
				
				
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

		
		return false;
		});
});
