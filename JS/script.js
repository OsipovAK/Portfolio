$(function(){
	$('.mobile-container').hide();
	$('#burg').on('click', function(){
	$('.mobile-container').slideToggle();
	$('.cont-center').slideToggle(100);
	});
});

function windowSize(){
	if ($(window).width() > '320'){
		$('.logo').show(10);
		$('.logo2').hide(10);
	} else {
		$('.logo').hide(10);
		$('.logo2').show(10);
	}
}
$(window).on('load resize', windowSize);