$(function () {
	$('.nav__link').click((e) => {
		e.preventDefault();
		let href = $(e.currentTarget).attr('href');

		let top = $(href).offset().top;

		$('body,html').animate({
			scrollTop: top,
		}, 700);
	});
});

$(document).ready(function () {
	$(".button_pink").click(function () {
		$(".popup1").show();
		$('body').addClass("stop-scrolling");
		disableScroll();

	});

	$(".popup1").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$('body').removeClass("stop-scrolling");
			enableScroll();
		};
	});
});

$(document).ready(function () {
	$(".button_orange").click(function () {
		$(".popup2").show();
		$('body').addClass("stop-scrolling");
		disableScroll();

	});

	$(".popup2").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$('body').removeClass("stop-scrolling");
			enableScroll();
		};
	});
});