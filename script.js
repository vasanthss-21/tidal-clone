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
const visibleSlides = 3;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 40;
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSlider();
  }
});

updateSlider();
