// Pega o elemento da nav bar
const navBar = document.getElementById('navbar'); // Substitua pelo ID real da sua nav bar
const SCROLL_AMOUNT = 100; // Define quantos pixels o usuário precisa rolar para a mudança ocorrer
const NORMAL_COLOR = 'rgb(141, 140, 206)'; // Cor normal da navbar
const SCROLLED_COLOR = 'transparent'; // Exemplo de cor para quando estiver rolando (você pode ajustar)

window.addEventListener('scroll', function() {
    if (window.scrollY >= SCROLL_AMOUNT) {
        navBar.style.backgroundColor = SCROLLED_COLOR;
        navBar.style.transition = 'background-color 0.5s ease';
    } else {
        navBar.style.backgroundColor = NORMAL_COLOR;
        navBar.style.transition = 'background-color 0.5s ease';
    }
});
