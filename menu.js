const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContainer = document.querySelector('.menu-container');

hamburgerMenu.addEventListener('click', function () {
    menuContainer.classList.toggle('show');
});