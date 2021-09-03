
$(document).ready(function() {
    //Efectos pasar a otro archivo js que se llame "efectos.js"
    ScrollReveal({ reset: true });
   
  
  // Description
    ScrollReveal().reveal('.contImg', { delay: 500 ,distance : '400px', origin: 'left'});
    ScrollReveal().reveal('.contParr', { delay: 900 , distance : '120px', origin: 'right'});
  
  //Features
    ScrollReveal().reveal('.imagenFeature', { delay: 600 ,distance : '100px', origin: 'right'});
    ScrollReveal().reveal('.textoFeatures', { delay: 900 , distance : '120px', origin: 'left'});
  
  
   //Download 
     ScrollReveal().reveal('.google-play', { delay: 600 ,distance : '200px', origin: 'left'});
     ScrollReveal().reveal('.suscribe', { delay: 600 , distance : '200px', origin: 'right'});
  
  
  
     //Screenshots
     ScrollReveal().reveal('.textocap', { delay: 500 ,distance : '200px'});
     ScrollReveal().reveal('.screens', { delay: 800 , distance : '200px', origin: 'right'});
  
  });