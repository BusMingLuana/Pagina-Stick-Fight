//$(document).ready(function(){

// FUNCION PARA ADAPTAR EL TEXTO Y LA IMAGEN DE PORTADA
	function responsiveDesign()
	{

	//define  variabless
	var encabezado = $("header");
	var textoPortada = $("#textoPortada");
	var textoTamaño = $("#letrasPortada");
	var ventana_altura = 1000;
	var ventana_altura_cadena = ventana_altura.toString()
	var ventana_ancho = $(window).innerWidth();
	var topMargin = 200;
	var topMargin_cadena = topMargin.toString();
	var fuenteTamaño = 80;
	var fuenteTamaño_cadena = fuenteTamaño.toString();

//adapta las variables segun el ancho de la pantalla
	for (var i = 2600; i > ventana_ancho; i--) {
		ventana_altura -= 0.35;
		ventana_altura_cadena = ventana_altura.toString();
		//topMargin -= 0.083;
		topMargin -= 0.06;
		topMargin_cadena = topMargin.toString();
		fuenteTamaño -= 0.02;
		fuenteTamaño_cadena = fuenteTamaño.toString();
	}

	//configura las propiedades del id del dom utlizando las var pasadas/arriba
	encabezado.css({
	  height:ventana_altura_cadena
	});

	textoPortada.animate({marginTop:topMargin_cadena},0);

	textoTamaño.animate({fontSize:fuenteTamaño_cadena},0);

	}






	/*function cambiarTexto(){
	var texto_portada = $("#letrasPortada");
	var texto_portada2 = $("#letrasPortada2");
	var texto_portada3 = $("#letrasPortada3");
	var contr_texto = 1;

	if  (contr_texto == 1) {
		texto_portada.animate({
			top:"-600px"
		},5000,)
	} 


	}

	cambiarTexto();*/






//LLAMAR FUNCIONES
//$(document).ready(function(){cambiarTexto()};
//$(document).on("ready", cambiarTexto);
$(window).on("resize load", responsiveDesign);

//})