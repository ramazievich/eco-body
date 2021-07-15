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


function readMore() {
	var dots = document.getElementById("dots__about__project");
	var more = document.getElementById("more__about__project");
	var btn = document.getElementById("btn__about__project");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btn.innerHTML = "˅"; /*показать*/
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		btn.innerHTML = "˄"; /*скрыть*/
		more.style.display = "inline";
	}
}