$(document).ready(function () {
  "use strict"; // Start of use strict
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $("body").scrollspy({
    target: "#sideNav",
  });
});
function make_me_dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


const titles = ["Varshitha", "Software Engineer", "Tech Enthusiast", "AWS Certified", "Problem Solver"];
let currentIndex = 0;
const textElement = document.getElementById("dynamic-text");

textElement.textContent = titles[currentIndex];
textElement.style.opacity = 1;
currentIndex++;

function changeText() {
  textElement.style.opacity = 0;
  setTimeout(() => {
    if (currentIndex >= titles.length) {
      currentIndex = 0; 
    }
    textElement.textContent = titles[currentIndex]; 
    textElement.style.opacity = 1; 
    currentIndex++;
  }, 500);
}

setInterval(changeText, 2000); 



function showModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function changeSlide(carouselId, n) {
  showSlides(carouselId, (slideIndex[carouselId] += n));
}

function currentSlide(carouselId, n) {
  showSlides(carouselId, (slideIndex[carouselId] = n));
}

function showSlides(carouselId, n) {
  let slides = document.querySelectorAll("#" + carouselId + " figure");
  let dots = document.querySelectorAll("#" + carouselId + " .dot");

  console.log("Slides:", slides);
  console.log("Dots:", dots);

  if (n >= slides.length) {
    slideIndex[carouselId] = 0;
  }
  if (n < 0) {
    slideIndex[carouselId] = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  if (slides[slideIndex[carouselId]]) {
    slides[slideIndex[carouselId]].style.display = "block";
  }
  if (dots[slideIndex[carouselId]]) {
    dots[slideIndex[carouselId]].classList.add("active");
  }
}

let slideIndex = {
  "project-1-modal-carousel": 0,
  "project-2-modal-carousel": 0,
};

document.addEventListener("DOMContentLoaded", function () {
  showSlides(
    "project-1-modal-carousel",
    slideIndex["project-1-modal-carousel"]
  );
  showSlides(
    "project-2-modal-carousel",
    slideIndex["project-2-modal-carousel"]
  );
});
