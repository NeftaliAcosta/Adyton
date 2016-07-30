$(document).ready(function(){
	$("#item1").hide();
	$("#item2").hide();
	$("#item3").hide();
	$("#item4").hide();
	$("#item5").hide();
	$("#item1").show("fast",function(){
		$("#item2").show("fast",function(){
			$("#item3").show("fast",function(){	
				$("#item4").show("fast",function(){	
					$("#item5").show("fast",function(){		
					});	
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
});
