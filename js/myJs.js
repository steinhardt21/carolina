$(document).ready(function() {

//FIRST TYPEFACE
	$(this).on('input', '.slider2', function() {
		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("letter-spacing",valeurdemonslider+"px");
	});

	$(this).on('input', '.slider1', function() {
		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("font-size",valeurdemonslider+"pt");
	});

//SECOND TYPEFACE
	$(this).on('input', '.alide', function() {
		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("letter-spacing",valeurdemonslider+"px");
	});

	$(this).on('input', '.slider1', function() {
		valeurdemonslider = $(this).val();
		$('.typo').find('.test').css("font-size",valeurdemonslider+"pt");
	});

});
