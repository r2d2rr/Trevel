var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function myFunction() {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

autoSlider();
var left = 0;
var timer;

function autoSlider () {
	timer = setTimeout (function () {
		var polosa = document.getElementById('polosa');
	left = left -100;
	if (left < -401) {
		left = 0;
		clearTimeout(timer);
	}
	polosa.style.left = left +'%';
	autoSlider ();
	}, 5000);
}
