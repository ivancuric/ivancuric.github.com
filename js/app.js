function resize() {
	h = $(window).height();
	w = $(window).width();
}

function x_coord(target) {
	var X = e.pageX - $(this).offset().left;
}

function y_coord(target) {

}

///////////DOCUMENT READY///////////////

$(document).ready(function() {

	Modernizr.addTest('firefox', function () {
		return !!navigator.userAgent.match(/firefox/i);
	});

	//$('.wrapper').removeClass('hide');
	//$('.wrapper').addClass('reveal');
	var isdown = 0;
	var timeoutId = 0;

	$('.container').on('mousedown', function(e) {
		mousedown = 1;
		var X = 0;
		var Y = 0;
		var center = 0;
		var tile = $(this).find('.tile');

		tile.removeClass("htop hright hbottom hleft hcenter");

		if ($(this).hasClass('large')){
			X = (e.pageX - $(this).offset().left -155)/2.0666;
			Y = (e.pageY - $(this).offset().top -75)*(-1);
			center = 30;
			
		} else {
			X = e.pageX - $(this).offset().left -75;
			Y = (e.pageY - $(this).offset().top -75)*(-1);
			center = 20;
		}

		if (Math.abs(X)<=center&&Math.abs(Y)<=20) {
			tile.addClass("center hcenter");
		} else if ((Y>=0)&&(Math.abs(X) < (Y))) {
			tile.addClass("top hbottom");
		} else if ((X>=0)&&((X) >= Math.abs(Y))) {
			tile.addClass("right hleft");
		} else if ((Y<=0)&&(Math.abs(X) < Math.abs(Y))) {
			tile.addClass("bottom htop");
		} else {
			tile.addClass("left hright");
		}
	});

	$('.container').on('mouseup mouseleave', function() {
		$(this).find('.tile').removeClass("top right bottom left center");
		mousedown = 0;
	});

	$('.target').on('mouseup', function(e) {
		if (e.which==1) {
			$(this).toggleClass("active");
			//$(this).css('marginLeft', -$(this).width()/2 + 'px');
			//$(this).css('marginTop', -$(this).height()/2 + 'px');
			$(".wrapper").toggleClass("hide");
		}
		
		
		mousedown = 0;
	});

	$(".container").on("contextmenu", function(e) {
		$(this).find('.tile').toggleClass('selected');
		e.preventDefault();
	});

	//$(".test").on("mouseup", function(e) {
	//	$(this).find('.tile').toggleClass('maxed');
	//});

	//$(window).resize(function() {
	//	resize();
	//	console.log(w+', '+h);
	//});
	//resize();

	///DEBUGGING DIJAGONALE///
	//function canvas() {
	//	$('.tile').wrapInner('<canvas/>');
	//}

	//$('body').isotope({
	//	// options
	//	itemSelector : '.container',
	//	layoutMode : 'fitRows'
	//});
	//canvas();

	//var a_canvas = document.getElementById("a");
	//var a_context = a_canvas.getContext("2d");
	//a_context.moveTo(0,0);
	//a_context.lineTo(150,150);
	//a_context.moveTo(150,0);
	//a_context.lineTo(0,150);
	//a_context.strokeStyle = "#eee";
	//a_context.stroke();
//
	//var b_canvas = document.getElementById("b");
	//var b_context = b_canvas.getContext("2d");
	//b_context.moveTo(0,0);
	//b_context.lineTo(310,150);
	//b_context.moveTo(310,0);
	//b_context.lineTo(0,150);
	//b_context.strokeStyle = "#eee";
	//b_context.stroke();

	//$('h1').mousedown(function(){
	//	$('.toflip').toggleClass('flip');
	//});
}); //KRAJ JQUERY