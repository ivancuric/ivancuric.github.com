$(document).ready(function() {
	//var isDown = false;
	//
	//$('.container').on('mouseenter', '.tile', function() {
	//	if(!$(this).hasClass('hover')){
	//		$(this).addClass("hover");
	//	}
	//});


	///DEBUGGING///
	var a_canvas = document.getElementById("a");
	var a_context = a_canvas.getContext("2d");
	a_context.moveTo(0,0);
	a_context.lineTo(150,150);
	a_context.moveTo(150,0);
	a_context.lineTo(0,150);
	a_context.strokeStyle = "#eee";
	a_context.stroke();

	var b_canvas = document.getElementById("b");
	var b_context = b_canvas.getContext("2d");
	b_context.moveTo(0,0);
	b_context.lineTo(310,150);
	b_context.moveTo(310,0);
	b_context.lineTo(0,150);
	b_context.strokeStyle = "#eee";
	b_context.stroke();



	$('.container').on('mousedown', function(e) {
		//isDown = true;
		var X = 0;
		var Y = 0;
		var center = 0;
		var tile = $(this).find('.tile');

		if ($(this).hasClass('large')){
			X = e.pageX - $(this).offset().left -155;
			Y = (e.pageY - $(this).offset().top -75)*(-1);
			center = 51;
			//console.log('large');
		} else {
			X = e.pageX - $(this).offset().left -75;
			Y = (e.pageY - $(this).offset().top -75)*(-1);
			center = 20;
		}
		
		//console.log((e.pageX - X)+ ' , ' + (e.pageY - Y));
		console.log(X+ ' , ' + Y);

		//if (Math.abs(X)<=center&&Math.abs(Y)<=20) {
		//	tile.addClass("center hcenter");
		//} else if ((Y>=0)&&(Math.abs(X) < (Y))) {
		//	tile.addClass("top hbottom");
		//} else if ((X>=0)&&((X) >= Math.abs(Y))) {
		//	tile.addClass("right hleft");
		//} else if ((Y<=0)&&(Math.abs(X) < Math.abs(Y))) {
		//	tile.addClass("bottom htop");
		//} else {
		//	tile.addClass("left hright");
		//}
	});

	$('.container').on('mouseup mouseleave', function() {
		$(this).find('.tile').removeClass("top right bottom left center");
		//console.log("wtf");
	});

	//$('.container').mouseleave(function(){
	//	$(this).removeClass("top right bottom left center");
	//	console.log("wtf");
	//});
	//$('.container').mouseleave(function(){
	//	$(this).removeClass("top right bottom left center");
	//	console.log("wtf");
	//});
});