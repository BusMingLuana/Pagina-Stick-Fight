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