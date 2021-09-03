// Cuadro vertical del menu 
$(document).ready(menu);

var contador = 1;

function menu(){
	$("#menu").click(function(){
		
		if (contador == 1) {
			$("#menu").animate({
				left: "0"
			});
			contador = 0;
		} else {
			$("#menu").animate({
				left: "-100%"
			});
			contador = 1;
		}
	
	});


// Selecciona los botones del menú

		$(".botonesmenu").click(function(){
				$("#menu").animate({
					left: "-100%"
				});
				contador = 0;
		});
	// // Beneficios
	// 	$("#btn-features").click(function(){
	// 			$("#menu").animate({
	// 				left: "-100%"
	// 			});
	// 			contador = 0;
	// 	});
	// // Marcas
	// 	$("#btn-download").click(function(){
	// 			$("#menu").animate({
	// 				left: "-100%"
	// 			});
	// 			contador = 0;
	// 	});
	// // Contacto
	// 	$("#btn-screenshots").click(function(){
	// 			$("#menu").animate({
	// 				left: "-100%"
	// 			});
	// 			contador = 0;
	// 	});

	// //}

};

