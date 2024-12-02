const burgerButton = document.getElementById('burgerButton');
  const menu = document.getElementById('menu');

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

const slider = document.getElementById("slider");
const slides = document.querySelectorAll("#slider > div");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const visibleSlides = 3; // Number of slides visible at a time

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 40; // Width of slide + gap
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

// Move to the previous set of slides
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Move to the next set of slides
nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSlider();
  }
});

// Set initial position
updateSlider();
