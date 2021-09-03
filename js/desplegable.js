

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
			},"slow");
			contador = 1;
		}
	
	});


/// Selecciona los botones del menú
	//Descripcion 
		$("#btn-description").click(function(){
				$("#menu").animate({
					left: "-100%"
				},"slow");
				contador = 1;
		});

	// Features
		$("#btn-features").click(function(){
				$("#menu").animate({
					left: "-100%"
				},"slow");
				contador = 1;
		});

	//Download
		$("#btn-download").click(function(){
				$("#menu").animate({
					left: "-100%"
				},"slow");
				contador = 1;
		});

	//Screenshots
		$("#btn-screenshots").click(function(){
				$("#menu").animate({
					left: "-100%"
				},"slow");
				contador = 1;
		});

	//}

};