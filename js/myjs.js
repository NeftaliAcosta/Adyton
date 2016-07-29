$(document).ready(function(){
	$('.mysos img').click(function(){
		myid = $(this).attr("id");
		$('.mysos').hide();
		$('#detalles').html("<img src='img/"+myid+".png' class='img-responsive'>");
	});

	$('#detalles').click(function(){
		$('#detalles').hide();
		$('.mysos').show();
		$('#detalles').html("");
	});
});
