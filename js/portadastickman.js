//$(document).ready(function(){



// FUNCION PARA ADAPTAR EL TEXTO Y LA IMAGEN DE PORTADA
function responsiveDesign()
{

//define  variabless
var portada = $("header");
var ventana_altura = 1000;
var ventana_altura_cadena = ventana_altura.toString()
var ventana_ancho = $(window).innerWidth();


//adapta las variables segun el ancho de la pantalla
for (var i = 2600; i > ventana_ancho; i--) {
    ventana_altura -= 0.40;
    console.log(ventana_altura)
    ventana_altura_cadena = ventana_altura.toString();
    //topMargin -= 0.083;
   
  
}

//configura las propiedades del id del dom utlizando las var pasadas/arriba
portada.css({
  height:ventana_altura_cadena
});


}


$(window).on("resize load", responsiveDesign);

//})