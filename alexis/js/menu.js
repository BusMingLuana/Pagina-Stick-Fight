

/// Cuadro horizontal del menu
	//var cuadroMenu = $("#cuadro-menu");
	var cuadroMenu = document.getElementById("cuadro-menu");

	//window.onscroll = function(){
	  var anchoWindow = $(window).width();
	  if (anchoWindow > 800) 
	  {
	  	window.onscroll = function(){
		if (window.pageYOffset > 100) {
			cuadroMenu.style.background = "#000";
		   } else {
			cuadroMenu.style.background = "transparent";
		   }
		}
	  } else {
	  		cuadroMenu.style.background = "#000";
	  }
	//}


/// Cuadro vertical del menu 
$(document).ready(menu);

var contador = 1;

function menu(){
	$("#iconoMenu2").click(function(){
		
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


/// Selecciona los botones del menú
	// Nosotros
		$("#btn_nosotros").click(function(){
				$("#menu").animate({
					left: "-100%"
				});
				contador = 1;
		});
	// Beneficios
		$("#btn_beneficios").click(function(){
				$("#menu").animate({
					left: "-100%"
				});
				contador = 1;
		});
	// Marcas
		$("#btn_marcas").click(function(){
				$("#menu").animate({
					left: "-100%"
				});
				contador = 1;
		});
	// Contacto
		$("#btn_contacto").click(function(){
				$("#menu").animate({
					left: "-100%"
				});
				contador = 1;
		});

	//}

};



/*$("#main",).click(function(){
	console.log("sss");
});*/

/*$("body").not("#iconoMenu").click(function(){
   console.log("sss");
});*/






