$(document).ready(function(){
//alert("dfd");

/// EFECTOS DEL MENÚ
	var menu = $("#menu a");
	var anchoWindow = $(window).width();
	if (anchoWindow > 800) {
	  menu.each(function(index, elemento){
		$(this).css({
			"top": "-1000px"
		});

		$(this).animate({
			top: "0"
		},800+(index*300));

	  });
	}


// EFECTOS DEL TÍTULO
	var titulo = $("#textoPortada");

	titulo.css({
		opacity:0,
		/*marginTop:0*/
		//marginRight: -6000
	});

	titulo.animate({
		opacity:1,
		/*marginTop:200*/
		//marginRight: 0

	},1500);


// SCROLL DE LOS BOTONES 

	//Nosotros
	var nosotros = $("#nosotros").offset().top;
	var btn_nosotros = $("#btn_nosotros");

	btn_nosotros.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: nosotros
		},500);
	});


	//Beneficios
	var beneficios = $("#beneficios").offset().top;
	var btn_beneficios = $("#btn_beneficios");

	btn_beneficios.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: beneficios
		},500);
	});


	//Marcas
	var marcas = $("#marcas").offset().top;
	var btn_marcas = $("#btn_marcas");

	btn_marcas.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: marcas
		},500);
	});


	//Contacto
	var contacto = $("#contacto").offset().top;
	var btn_contacto = $("#btn_contacto");

	btn_contacto.on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: contacto
		},500);
	});

	//Boton Enviar / Contacto
	/*var contacto = $("#contacto").offset().top;
	var btn_enviar = $("#enviar-btn");

	btn_enviar.on("click",function(e){
		//e.preventDefault();
		$("html, body").animate({
			scrollTop: contacto
		},0);
	});
*/

});