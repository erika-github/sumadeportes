$(document).ready(function () {
		
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;	

	$('.slider li').hide(); // Ocultamos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide	
	$('.pagination li:first').css({ 'color': '#0048FF' }); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones

	$('.pagination li').click(pagination);


	myTimer = setInterval(nextSlider, 2000);

	// FUNCIONES =========================================================

	function pagination() {


		clearInterval(myTimer);

		myTimer = setInterval(nextSlider, 2000);

		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada


		$('.slider li').hide(); // Ocultamos todos los slides			
		$('.slider li:nth-child(' + paginationPos + ')').show();
		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({ 'color': '#FFFFFF' });
		$(this).css({ 'color': '#0048FF' });

		imgPos = paginationPos;

	}

	function nextSlider() {


		clearInterval(myTimer);
		myTimer = setInterval(nextSlider, 2000);

		if (imgPos >= imgItems) { imgPos = 1; }
		else { imgPos++; }


		$('.pagination li').css({ 'color': '#FFFFFF' });
		$('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#0048FF' });

		$('.slider li').hide(); // Ocultamos todos los slides		
		$('.slider li:nth-child(' + imgPos + ')').show();


		$('.pagination li').css({ 'z-index': 100 });
		

	}
	

});