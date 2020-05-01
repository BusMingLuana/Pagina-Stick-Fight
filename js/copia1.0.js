
$(document).ready(function() {

	//Efecto Menu 
	$('.menu a  ').each(function(index , elemento) {
        $(this).css({
          'top': '-200px'
        });
      
       $(this).animate({
       	'top': '0'
       }, 1000 + (index * 500));
	});
 



// Scroll Elementos Menu
   var description = $('#description').offset().top,
      features = $('#features').offset().top,
       download = $('#download').offset().top,
       screenshots = $('#screenshots').offset().top;


    $('#btn-description').on('click', function(e){
    	e.preventDefault();
      $('html, body').animate({

      	 scrollTop:  description // -50 //400
      }, 500);

   });



    $('#btn-features').on('click', function(e){
    	e.preventDefault();
      $('html, body').animate({

      	 scrollTop: features 
      }, 500);
        
   });


    $('#btn-download').on('click', function(e){
    	e.preventDefault();
      $('html, body').animate({

      	 scrollTop: download
      }, 500);
        
   });



    $('#btn-screenshots').on('click', function(e){
    	e.preventDefault();
      $('html, body').animate({

      	 scrollTop: screenshots
      }, 500);
        
    });

});


$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
  });
  


};


