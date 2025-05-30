document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
  
    // Transição mais lenta para o efeito de entrada
    navbar.style.transition = 'top 0.8s ease, opacity 0.8s ease';
  
    // Começa escondida
    navbar.classList.add('hidden');
  
    // Remove a classe para fazer aparecer com animação suave
    setTimeout(() => {
      navbar.classList.remove('hidden');
  
      // Depois do efeito inicial, volta para a transição padrão de scroll
      setTimeout(() => {
        navbar.style.transition = 'top 0.3s ease-in-out, opacity 0.3s ease-in-out';
      }, 800); // mesmo tempo da transição lenta
    }, 100); // delay para garantir que a transição seja aplicada
  });
  
  // Variáveis para armazenar a posição anterior do scroll e a barra de navegação
  let prevScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navbar');
  
  // Função para controlar o scroll
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
  
    // Se o usuário rolar para baixo, a navbar desaparece com fade
    if (prevScrollPos < currentScrollPos) {
      navbar.style.top = "-100px"; // ou "-300px" se quiser mais para cima
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
    } else {
      navbar.style.top = "0";
      navbar.style.opacity = "1";
      navbar.style.pointerEvents = "auto";
    }
  
    prevScrollPos = currentScrollPos;
  };
  