const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) {
                menu.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
                menu.style.backdropFilter = 'blur(10px)';
            } else {
                menu.style.backgroundColor = 'transparent'; // Restablece el fondo cuando se cierra el menú
            }
});