/**
 * Функция для бургер меню
*/
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


/**функция сворачивания текста в разделе про меня маленькая
 *
 *
 */
 function showMoreAboutMe() {
    let dots = document.getElementById("dots_about_me");
    let moreText = document.getElementById("more_about_me");
    let btnText = document.getElementById("btn_about_me");
	
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "&#5167;";
		  moreText.style.display = "none";
	}

	else {
		dots.style.display = "none";
		btnText.innerHTML = "&#5169;";
		  moreText.style.display = "inline";
	}
	}

/**функция сворачивания текста в разделе про меня большая
 *
 *
 */
 function showMoreAboutMe() {
    let dots = document.getElementById("dots_about_me__full");
    let moreText = document.getElementById("more_about_me__full");
    let btnText = document.getElementById("btn_about_me__full");
	
	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "&#5167;";
		  moreText.style.display = "none";
	}

	else {
		dots.style.display = "none";
		btnText.innerHTML = "&#5169;";
		  moreText.style.display = "inline";
	}
	}

/**функция слайдер преимущества
 *
 *
 */
let dots = 3;
let sliderElem = document.querySelector('.slider');
let dotElems = sliderElem.querySelectorAll('.slider__dot');
let indicatorElem = sliderElem.querySelector('.slider__indicator');
Array.prototype.forEach.call(dotElems, dotElem => {
  dotElem.addEventListener('click', e => {
    let currentPos = parseInt(sliderElem.getAttribute('data-pos'));
    let newPos = parseInt(dotElem.getAttribute('data-pos'));
    let newDirection = newPos > currentPos ? 'right' : 'left';
    let currentDirection = newPos < currentPos ? 'right' : 'left';
    indicatorElem.classList.remove(`slider__indicator--${currentDirection}`);
    indicatorElem.classList.add(`slider__indicator--${newDirection}`);
    sliderElem.setAttribute('data-pos', newPos);
  });
});



