$(document).ready(function() {


    /// EFECTOS DEL MENÚ
    var menu = $("#menu a");
    var anchoWindow = $(window).width();
    if (anchoWindow > 800) {
      menu.each(function(index, elemento){
        $(this).css({
            "top": "-200px"
        });
    
        $(this).animate({
            top: "0"
        },800+(index*300));
    
      });
    }

});



      // SCROLL DE LOS BOTONES 
      var ventana_ancho = $(window).innerWidth();
      //Description
      var description = $("#description").offset().top
      var features = $("#contenedorfeatures").offset().top
      var download = $("#download").offset().top
      var screenshots  = $("#screenshots").offset().top;
      
  
          $("#btn-description").on("click",function(e){
          e.preventDefault();
          if (ventana_ancho >= 2600  ) {
            $("html, body").animate({scrollTop: description},500);
          } else if (ventana_ancho < 2600 && ventana_ancho >=1000 ){ 
              $("html, body").animate({scrollTop: description-50},500);
              
          } else if (ventana_ancho < 1000 && ventana_ancho >=500 ) {
           $("html, body").animate({scrollTop: description-20},500);
            
        } else if (ventana_ancho < 500 && ventana_ancho >=300 ) {
         $("html, body").animate({scrollTop: description},500);
          
           };
          })
          

      //Features
      
      
     $("#btn-features").on("click",function(e){
          e.preventDefault();
          if (ventana_ancho >= 2600  ) {
            $("html, body").animate({scrollTop: features-500},500);
          } else if (ventana_ancho < 2600 && ventana_ancho >=2400 ){ 
              $("html, body").animate({scrollTop: features-450},500);
              
          } else if (ventana_ancho < 2400 && ventana_ancho >=2200 ){ 
            $("html, body").animate({scrollTop: features-435},500);
            
        } else if (ventana_ancho < 2200 && ventana_ancho >=2000 ){ 
            $("html, body").animate({scrollTop: features-403},500);
            
        }else if (ventana_ancho < 2000 && ventana_ancho >=1600 ) {
           $("html, body").animate({scrollTop: features-315},500);
            
        } else if (ventana_ancho < 1600 && ventana_ancho >=1300 ) {
         $("html, body").animate({scrollTop: features-230},500);
          
           } else if (ventana_ancho < 1300 && ventana_ancho >=1000 ) {
            $("html, body").animate({scrollTop: features-170},500);
             
              }else if (ventana_ancho < 1000 && ventana_ancho >=700 ) {
                $("html, body").animate({scrollTop: features-110},500);
                 
              }else if (ventana_ancho < 700 && ventana_ancho >=300 ) {
                $("html, body").animate({scrollTop: features-50},500);
            };
        
        });
    
  
      //Download
      $("#btn-download").on("click",function(e){
        e.preventDefault();
        if (ventana_ancho >= 2600  ) {
          $("html, body").animate({scrollTop: download-500},500);
        } else if (ventana_ancho < 2600 && ventana_ancho >=1800 ){ 
            $("html, body").animate({scrollTop: download-500},500);
            
        } else if (ventana_ancho < 1800 && ventana_ancho >=1200 ){ 
          $("html, body").animate({scrollTop: download-435},500);
          
      } else if (ventana_ancho < 1200 && ventana_ancho >=800 ){ 
          $("html, body").animate({scrollTop: download-350},500);
          
      }else if (ventana_ancho < 800 && ventana_ancho >=300 ) {
         $("html, body").animate({scrollTop: download-120},500);
        
          };
      
      });
  
  
      //screenshots
      $("#btn-screenshots").on("click",function(e){
        e.preventDefault();
        if (ventana_ancho >= 2600  ) {
          $("html, body").animate({scrollTop: screenshots},500);
        } else if (ventana_ancho < 2600 && ventana_ancho >=2000 ){ 
            $("html, body").animate({scrollTop: screenshots-500},500);
            
        } else if (ventana_ancho < 2000 && ventana_ancho >=1500 ){ 
          $("html, body").animate({scrollTop: screenshots-400},500);
          
      } else if (ventana_ancho < 1500 && ventana_ancho >=700 ){ 
          $("html, body").animate({scrollTop: screenshots-150},500);
          
      }else if (ventana_ancho < 700 && ventana_ancho >=500 ) {
         $("html, body").animate({scrollTop: screenshots-55},500);
        
          }else if (ventana_ancho < 500 && ventana_ancho >=300 ) {
            $("html, body").animate({scrollTop: screenshots-30},500);
           
             };
      
      });