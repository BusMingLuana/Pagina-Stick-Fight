//$(document).ready(function(){

// FUNCION PARA ADAPTAR EL TEXTO Y LA IMAGEN DE PORTADA
	function responsiveDesign()
	{

	//define  variabless
	var encabezado = $("#portada");
	
	var ventana_altura =1000;
	var ventana_altura_cadena = ventana_altura.toString()
	var ventana_ancho = $(window).innerWidth();


//adapta las variables segun el ancho de la pantalla
	for (var i = 2600; i > ventana_ancho; i--) {
		ventana_altura -= 0.35;
		ventana_altura_cadena = ventana_altura.toString();
		
	}

	//configura las propiedades del id del dom utlizando las var pasadas/arriba
	encabezado.css({
	  height:ventana_altura_cadena
	});

	}


//LLAMAR FUNCIONES
$(window).on("resize load", responsiveDesign);

//})

