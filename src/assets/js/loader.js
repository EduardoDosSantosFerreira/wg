// Início do carregamento
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');

    // Força o loader por 5 segundos
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Tempo da transição de opacidade
    }, 5000); // 5 segundos (5000 milissegundos)
});
