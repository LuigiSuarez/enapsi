const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item'); // Obtén todos los elementos del menú

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Agregar evento de clic al documento para cerrar el menú si se hace clic fuera del menú
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') && event.target !== menu && event.target !== menuToggle) {
        menu.classList.remove('active');
    }
});

// Detener la propagación de clic en el menú para evitar que el evento llegue al documento
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Agregar evento de clic a cada elemento del menú
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        menu.classList.remove('active'); // Cierra el menú al hacer clic en un elemento del menú
    });
});


