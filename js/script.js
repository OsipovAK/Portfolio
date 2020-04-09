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

	var keys = { 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };

	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
			e.preventDefault();
		e.returnValue = false;
	};

	function preventDefaultForScrollKeys(e) {
		if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
		};
	};

	function disableScroll() {
		if (window.addEventListener) // older FF
			window.addEventListener("DOMMouseScroll", preventDefault, false);
		window.onwheel = preventDefault; // modern standard
		window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
		document.body.addEventListener("touchmove", preventDefault, { passive: false });
		document.onkeydown = preventDefaultForScrollKeys;
		document.addEventListener("mousedown", function (event) {
			if ($('body').hasClass('asd')) {
				if (event.which === 2) {
					event.stopPropagation();
				}
			}
		});
	};

	function enableScroll() {
		if (window.removeEventListener)
			window.removeEventListener("DOMMouseScroll", preventDefault, false);
		window.onmousewheel = document.onmousewheel = null;
		window.onwheel = null;
		document.body.removeEventListener("touchmove", preventDefault, { passive: false });
		document.onkeydown = null;

	};

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

	$('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); //specifying options

	$('input[type="mail"]').inputmask({
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