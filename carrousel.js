let currentSlide = 1;
const totalSlides = 3;

// Função para avançar para o próximo slide
function nextSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  document.getElementById("img" + currentSlide).checked = true;
}

// Função para voltar ao slide anterior
function prevSlide() {
  currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1;
  document.getElementById("img" + currentSlide).checked = true;
}

// Função para auto slide a cada 3 segundos
setInterval(() => {
  nextSlide();
}, 5000);
