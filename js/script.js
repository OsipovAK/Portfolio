var swiper = new Swiper(".swiper-container", {
	slidesPerView: "3",
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination"
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});

function checkedSubmit1() {
	var checkedItems = document.querySelectorAll('.popup input[id="popup__button1"]');
	for (var i = 0; i < checkedItems.length; i++) {
		checkedItems[i].disabled = !checkedItems[i].disabled;
	}
}
function checkedSubmit2() {
	var checkedItems = document.querySelectorAll('.popup input[id="popup__button2"]');
	for (var i = 0; i < checkedItems.length; i++) {
		checkedItems[i].disabled = !checkedItems[i].disabled;
	}
}

$(document).ready(function () {
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
		$('body').addClass("stop-scrolling");
	});
	$(".popup1").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$('body').removeClass("stop-scrolling");
		};
	});

	$(".button_orange").click(function () {
		$(".popup2").show();
		$('body').addClass("stop-scrolling");
	});
	$(".popup2").click(function (event) {
		if (event.target == this) {
			$(this).hide();
			$('body').removeClass("stop-scrolling");
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
	let burger = document.querySelector(".header__btn");
	let menu = document.querySelector(".header__nav");
	let close = document.querySelector(".nav__btn_close");
	burger.addEventListener("click", function (e) {
		e.preventDefault();
		menu.classList.add("header__nav_open");
	});
	close.addEventListener("click", function (e) {
		e.preventDefault();
		menu.classList.remove("header__nav_open");
	});


});