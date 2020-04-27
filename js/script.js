$(document).ready(function () {
	$(".header__burger").on('click', function (event) {
		event.preventDefault();
	});
	$(".header__burger").click(function () {
		$(".header__nav").addClass("header__nav_open");
	});
	$(".nav__btn_close").click(function () {
		$(".header__nav").removeClass("header__nav_open");
	});
	$(".popup__check-input").on("click", function () {
		let a = $(this).is(':checked');
		if ((a) == false) {
			$('.popup__button').attr('disabled', true);
			let a = $(".popup__check-input").is(':checked');
		} else {
			$('.popup__button').removeAttr("disabled");
			let a = $(".popup__check-input").is(':checked');
		}
	});
	var swiper = new Swiper(".swiper-container", {
		slidesPerView: "1",
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			940: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		}

	});
	$('.nav__link').click((e) => {
		e.preventDefault();
		let href = $(e.currentTarget).attr('href');
		let top = $(href).offset().top;
		$('body,html').animate({
			scrollTop: top,
		}, 700);
	});

	$(".button_pink").click(function () {
		$(".popup1").show();
		$("html,body").css("overflow", "hidden");
	});
	$(".popup1").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$("html,body").css("overflow", "");
		};
	});

	$(".button_orange").click(function () {
		$(".popup2").show();
		$("html,body").css("overflow", "hidden");
	});
	$(".popup2").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$("html,body").css("overflow", "");
		};
	});

	$('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" });
	$('input[type="email"]').inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				casing: "lower"
			}
		}
	});

	$('form').each(function () {
		$(this).validate({
			errorPlacement(error, element) {
				return true;
			},
			focusInvalid: false,
			rules: {
				Почта: {
					required: true,
					email: true
				},
				ФИО: {
					required: true
				},
				Телефон: {
					required: true
				},
			},
			submitHandler(form) {
				let th = $(form);
				$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: th.serialize(),
				}).done(() => {
					th.trigger('reset');
				});

				$(".popup").hide();
				$(".popup3").show();
				$('body').addClass("stop-scrolling");

				$(".popup").click(function (event) {
					if (event.target == this) {
						$(this).hide();
						$('body').removeClass("stop-scrolling");
					};
				});
				return false;
			}
		});
	});
});