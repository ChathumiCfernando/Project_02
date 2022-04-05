// main page

function playGamerVideo() {
	var video = document.getElementById("gamersbg");
	video.play();
}

function pauseGamerVideo() {
	var video = document.getElementById("gamersbg");
	video.pause();
}

function playDeveloperVideo() {
	var video = document.getElementById("developersbg");
	video.play();
	video.playbackRate = 3;
}

function pauseDeveloperVideo() {
	var video = document.getElementById("developersbg");
	video.pause();
}

// main page


//gaming page slide show

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//gaming page slide show