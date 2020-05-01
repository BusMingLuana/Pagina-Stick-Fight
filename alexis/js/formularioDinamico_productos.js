
/// Definir variables
var fabrica_buje = new Array("-","icsa","gomet");
var fabrica_parrilla = new Array("-","borguetti","suspenmec");
var fabrica_extremo = new Array("-","ms","locma","locane");
var fabrica_rotula = new Array("-","ms","locma","locane");
var fabrica_bieleta = new Array("-","ms","locma","locane");
var fabrica_axial = new Array("-","ms","locma","locane");

console.log("44445555");


//Crea una funcion que ejecuta el cambio dinamico
function cambia(){

	//var producto_tipo = document.formulario.producto.value;

	var producto_tipo;
	producto_tipo = document.formulario.producto[document.formulario.producto.selectedIndex].value;

	//Comprueba la variable anterior 
	if (producto_tipo!="-") {
		//console.log("Tiene un valor");
		// Selecionamos las cosas correctas
		opciones_fabricas = eval("fabrica_" + producto_tipo);
		// SE calcula el tamaño de cosa
		opciones_fabrica_length = opciones_fabricas.length;

		document.formulario.fabrica.length = opciones_fabrica_length;

		//Para cada fabrica del array la pongo en el select
		for (var i = 0; i<opciones_fabrica_length; i++) {
			document.formulario.fabrica.options[i].value=opciones_fabricas[i];
			switch(opciones_fabricas[i]){
				case "-": document.formulario.fabrica.options[i].text="Fábricas"; break
				case "icsa": document.formulario.fabrica.options[i].text="Icsa"; break
				case "gomet": document.formulario.fabrica.options[i].text="Gomet"; break
				case "borguetti": document.formulario.fabrica.options[i].text="MB Borguetti"; break
				case "suspenmec": document.formulario.fabrica.options[i].text="Suspenmec"; break
				case "ms": document.formulario.fabrica.options[i].text="MS Autopartes"; break
				case "locma": document.formulario.fabrica.options[i].text="Locma"; break
				case "locane": document.formulario.fabrica.options[i].text="Locane Hnos"; break
			}
			//document.formulario.fabrica.options[i].text=opciones_fabricas[i];
		}
	} else{
			// Si no hay ninguna fabrica seleccionada, elimino las opciones del select
			document.formulario.fabrica.length = 8;
			document.formulario.fabrica.options[0].value="-";
			document.formulario.fabrica.options[0].text="Fábricas";
			document.formulario.fabrica.options[1].value="icsa";
			document.formulario.fabrica.options[1].text="Icsa";
			document.formulario.fabrica.options[2].value="gomet";
			document.formulario.fabrica.options[2].text="Gomet";
			document.formulario.fabrica.options[3].value="borghetti";
			document.formulario.fabrica.options[3].text="MB Borguetti";
			document.formulario.fabrica.options[4].value="suspenmec";
			document.formulario.fabrica.options[4].text="Suspenmec";
			document.formulario.fabrica.options[5].value="ms";
			document.formulario.fabrica.options[5].text="MS Autopartes";
			document.formulario.fabrica.options[6].value="locma";
			document.formulario.fabrica.options[6].text="Locma";
			document.formulario.fabrica.options[7].value="locane";
			document.formulario.fabrica.options[7].text="Locane Hnos";
		}

		// Resetea
		document.formulario.fabrica.options[0].selected = true;
}

//cambia();