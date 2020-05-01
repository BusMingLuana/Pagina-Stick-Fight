
$(document).ready(function() {


// /// EFECTOS DEL MENÚ
// var menu = $("#menu a");
// var anchoWindow = $(window).width();
// if (anchoWindow > 800) {
//   menu.each(function(index, elemento){
// 	$(this).css({
// 		"top": "-200px"
// 	});

// 	$(this).animate({
// 		top: "0"
// 	},800+(index*300));

//   });
// }
	// SCROLL DE LOS BOTONES 

	//Description
	var description = $("#description").offset().top
	var features = $(".features").offset().top
	var download = $("#download").offset().top
	var capturas  = $("#screenshots").offset().top;

		$("#btn-description").on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			
			scrollTop: description-80
		},500);
	});


	//Features
   $("#btn-features").on("click",function(e){
		//console.log("features")
		e.preventDefault();
		$("html, body").animate({
			scrollTop: features -81
		},500);
	});


	//Download
	$("#btn-download").on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: download -100
		},500);
	});


	//screenshots
	$("#btn-screenshots").on("click",function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: capturas -30
		},500);
	});


});

