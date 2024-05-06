let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) { slideIndex = slides.length }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  showSlides();
}

showSlides();








