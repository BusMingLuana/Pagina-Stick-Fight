
$(document).ready(function() {
  
  ScrollReveal({ reset: true });
 

// Description
  ScrollReveal().reveal('.contImg', { delay: 300 ,distance : '400px', origin: 'left'});
  ScrollReveal().reveal('.contParr', { delay: 500 , distance : '120px', origin: 'right'});

//Features/carousel
  ScrollReveal().reveal('.carousel-inner', { delay: 300 ,distance : '100px', origin: 'right'});
 

 //Download 
   ScrollReveal().reveal('.google-play', { delay: 300 ,distance : '200px', origin: 'left'});
   ScrollReveal().reveal('.suscribe', { delay: 300 , distance : '200px', origin: 'right'});



   //Screenshots
   ScrollReveal().reveal('.textocap', { delay: 300 ,distance : '200px'});
   ScrollReveal().reveal('.screens', { delay: 500 , distance : '200px', origin: 'right'});

   //Footer
   ScrollReveal().reveal('.logo-footer', { delay: 500 ,distance : '200px', origin: 'top'});
   ScrollReveal().reveal('.email', { delay: 650 , distance : '200px', origin: 'left'});
   ScrollReveal().reveal('.copyright', { delay: 650 , distance : '200px', origin: 'right'});
   

});
