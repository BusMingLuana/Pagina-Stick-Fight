$(document).ready(function(){ 

	$(window).scroll(function(){

		var scroll = $(window).scrollTop();
		var anchoWindow = $(window).width();

		/*var cuadroMenu = $("#cuadro-menu");
		if (scroll >= 300) {

			cuadroMenu.each(function(index,elemento){ 
			//console.log("xc")	
				cuadroMenu.css({
				"background":"red"
			    },1000);
			});
			
		}*/



//NOSOTROS
//PC
	if (anchoWindow > 500) {
		//Quienes Somos
		var quienesSomos = $("#quienes-somos");
		if (scroll >= 300/(1800/anchoWindow)) {
			quienesSomos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
					//marginLeft:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},700);
			});
		}
		//Mision
		var mision = $("#mision");
		if (scroll >= 400/(1800/anchoWindow)) {
			mision.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
		//Vision
		var vision = $("#vision");
		if (scroll >= 400/(1800/anchoWindow)) {
			vision.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}
//MOVIL
	if (anchoWindow <= 500) {
		//Quienes Somos
		var quienesSomos = $("#quienes-somos");
		if (scroll >= 300/(1800/anchoWindow)) {
			quienesSomos.each(function(index,elemento){
				$(this).css({
					//opacity:0,
					left:500
					//marginLeft:500
				});
				$(this).animate({
					//opacity:1,
					left:0
				},700);
			});
		}
		//Mision
		var mision = $("#mision");
		if (scroll >= 600/(1800/anchoWindow)) {
			mision.each(function(index,elemento){
				$(this).css({
					//opacity:0,
					left:-500
				});
				$(this).animate({
					//opacity:1,
					left:0
				},1000);
			});
		}
		//Vision
		var vision = $("#vision");
		if (scroll >= 900/(1800/anchoWindow)) {
			vision.each(function(index,elemento){
				$(this).css({
					//opacity:0,
					left:500
				});
				$(this).animate({
					//opacity:1,
					left:0
				},1000);
			});
		}
	}



/// BENEFICIOS  
/*	var descuentos = $("#descuentos");
	var envios = $("#envios");
	var plazos = $("#plazos");
	var asistencia = $("#asistencia");
//PC 		
	if (anchoWindow > 600) {
	//Descuentos
		if (scroll >= 1100) { 
			descuentos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	//Envios
		if (scroll >= 1100) { 
			envios.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},750);
			});
		}
	//Plazos
		if (scroll >= 1100) { 
			plazos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},750);
			});
		}
	//Asistencia
		if (scroll >= 1100) { 
			asistencia.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}
//MOVIL 		
	if (anchoWindow <= 600) {
	//Descuentos
		if (scroll >= 800) { 
			descuentos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	//Envios
		if (scroll >= 1000) { 
			envios.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	//Plazos
		if (scroll >= 1200) { 
			plazos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	//Asistencia
		if (scroll >= 1400) { 
			asistencia.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}



///MARCAS
	var autos = $("#marcas-autos");
	var productos = $("#marcas-productos");
//PC
	if (anchoWindow > 800) {
		//autos
		if (scroll >= 1900) { 
			autos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
		//productos
		if (scroll >= 1900) { 
			productos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}
//MOVIL
	if ((anchoWindow <= 800) & (anchoWindow > 600)) {
		//autos
		if (scroll >= 1900) { 
			autos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
		//productos
		if (scroll >= 2200) { 
			productos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}
//MOVIL 2
	if (anchoWindow <= 600) {
		//autos
		if (scroll >= 2500) { 
			autos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
		//productos
		if (scroll >= 2800) { 
			productos.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:500
				});
				$(this).animate({
					opacity:1,
					left:0
				},1000);
			});
		}
	}


///CONTACTO
	var formulario = $("#formulario");
//PC
	if (anchoWindow > 955) {
		if (scroll >= 2700) { 
			formulario.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},800);
			});
		}
	}
//PC 2
	if ((anchoWindow > 800) & (anchoWindow <= 955)) {
		if (scroll >= 2900) { 
			formulario.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},800);
			});
		}
	}
//MOVIL
	if ((anchoWindow > 600) & (anchoWindow <= 800)) {
		if (scroll >= 3000) { 
			formulario.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},800);
			});
		}
	}
//MOVIL 2
	if ((anchoWindow > 420) & (anchoWindow <= 600)) {
		if (scroll >= 3600) { 
			formulario.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},800);
			});
		}
	}
//MOVIL 3
	if (anchoWindow <= 420) {
		if (scroll >= 4200) { 
			formulario.each(function(index,elemento){
				$(this).css({
					opacity:0,
					left:-500
				});
				$(this).animate({
					opacity:1,
					left:0
				},800);
			});
		}
	}

*/
});

});
