    var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
$(function(){
	$('.anchor').click((e) => {
		e.preventDefault();
		let href = $(e.currentTarget).attr('href');

		let top = $(href).offset().top;

		$('body,html').animate({
			scrollTop: top,
		}, 700);
	});
});

