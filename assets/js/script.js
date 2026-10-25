// Fonction pour ouvrir/fermer le menu mobile
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Fermer le menu quand on clique sur un lien (pour mobile)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const menu = document.getElementById('menu');
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menu && menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
});