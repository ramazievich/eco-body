/**
 * Функция для бургер меню
*/
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


/* сворачивание текста */
/*
  $(document).ready(function() {
333
	$('.reviews__text').each(function() {
	  if ($(this).text().length > 192) {
		$(this).data('full', $(this).text());
		$(this).text($(this).text().slice(0, 192) + '...');
		$(this).after("<span class='reviews__more'>ᐯ</span>");
	  }
	});
  
	$('.reviews__more').click(function() {
	  if ($(this).text() == 'ᐯ') {
		$(this).siblings('.reviews__text').text($(this).siblings('.reviews__text').data('full'));
		$(this).text('ᐱ');
	  } else {
		$(this).siblings('.reviews__text').text($(this).siblings('.reviews__text').text().slice(0, 192) + '...');
		$(this).text('ᐯ');
	  }
	});
  
  });
*/


/**функция сворачивания текста в разделе про меня
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



