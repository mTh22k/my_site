// Função para alternar a visibilidade do texto adicional com transição suave ao entrar
function toggleText(container) {
  // Encontra o próximo elemento com a classe 'toggle-text'
  const textElement = container.nextElementSibling;
  const iconElement = container.querySelector(".toggle-icon");

  // Se o texto estiver visível, adiciona a classe 'hide' para ocultá-lo
  if (textElement.classList.contains("show")) {
    textElement.classList.remove("show");
    textElement.classList.add("hide");
    iconElement.innerHTML = "&#9660;"; // Ícone de seta para baixo
  } else {
    // Caso contrário, adiciona a classe 'show' para exibi-lo
    textElement.classList.remove("hide");
    textElement.classList.add("show");
    iconElement.innerHTML = "&#9650;"; // Ícone de seta para cima
  }
}
