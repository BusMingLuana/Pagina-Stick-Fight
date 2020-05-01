	/// Cuadro vertical del menu 

	$(document).ready(menu);
	var contador = 1;
	console.log("ssssa");

	function menu(){
		$("#iconoMenu2").click(function(){ 
				console.log("sss");
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
    }		

