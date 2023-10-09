const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item'); // Obtén todos los elementos del menú

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Agregar evento de clic a cada elemento del menú
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.classList.remove('active'); // Cierra el menú al hacer clic en un elemento del menú
    });
});