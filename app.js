let banner = document.querySelector(".bgFixeSuperPose");
let bgFixe = document.querySelector(".bgFixe");
let flower1 = document.getElementById("flower1");
let flower2 = document.getElementById("flower2");
let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots = [...document.getElementsByClassName("dot")];
let slideIndex = 0;
let upgradeSlideIndex;

banner.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  flower1.style.left = x + 3 + "px";
  flower1.style.top = y + -10 + "px";
  flower1.style.width = 10 + "px";
  flower1.style.height = 10 + "px";
});

banner.addEventListener("mouseleave", function () {
  flower1.style.width = 0;
  flower1.style.height = 0;
});

bgFixe.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  flower2.style.left = x + 3 + "px";
  flower2.style.top = y + -10 + "px";
  flower2.style.width = 120 + "px";
  flower2.style.height = 120 + "px";
});

bgFixe.addEventListener("mouseleave", function () {
  flower2.style.left = 50 + "%";
  flower2.style.top = 50 + "%";
  flower2.style.width = 82 + "px";
  flower2.style.height = 82 + "px";
});

// Function for show slides

function showSlides(n) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("keyframesClass");
  }

  slides[n - 1].style.display = "block";
  slides[n - 1].classList.add("keyframesClass");
  dots[n - 1].className += " active";
}

// Function for show slidse in auto

function showSlidesAuto() {
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  upgradeSlideIndex = slideIndex;
  showSlides(slideIndex);
  setTimeout(showSlidesAuto, 3000);
}
showSlidesAuto();

// Function for Next and previous buttons

function buttonFleche(n) {
  upgradeSlideIndex = upgradeSlideIndex + n;

  if (upgradeSlideIndex > slides.length) {
    upgradeSlideIndex = 1;
  }
  if (upgradeSlideIndex < 1) {
    upgradeSlideIndex = slides.length;
  }
  showSlides(upgradeSlideIndex);
}

prev.addEventListener("click", function () {
  upgradeSlideIndex += -1;

  if (upgradeSlideIndex < 1) {
    upgradeSlideIndex = slides.length;
  }
  showSlides(upgradeSlideIndex);
});

next.addEventListener("click", function () {
  upgradeSlideIndex += 1;

  if (upgradeSlideIndex > slides.length) {
    upgradeSlideIndex = 1;
  }
  showSlides(upgradeSlideIndex);
});

// Function for Dot buttons function

function currrentSlide(e) {
  let idDot = e.target.id;
  upgradeSlideIndex = idDot;
  showSlides(upgradeSlideIndex);
}

dots.forEach((element) => {
  element.addEventListener("click", currrentSlide);
});
