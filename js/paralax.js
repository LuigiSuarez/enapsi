const imagen = document.getElementById('header__imagen');
const imagenArriba = document.getElementById('header__imagen-arriba');
const imagenArribaDerecha = document.getElementById('header__imagen-arriba-derecha');

function handleMouseMove(e) {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;
    const move = (mouseX / windowWidth - 0.5) * 30;

    // Aplica el desplazamiento a la imagen principal
    imagen.style.transform = `translateX(${move}px)`;

    // Aplica el desplazamiento opuesto a la imagen arriba
    imagenArriba.style.transform = `translateX(${-move}px)`;

    // Aplica el desplazamiento opuesto a la imagen arriba derecha
    imagenArribaDerecha.style.transform = `translateX(${-move}px)`; // Puedes ajustar esto según tus necesidades
}

function handleMouseLeave() {
    imagen.style.transform = 'translateX(0)';
    imagenArriba.style.transform = 'translateX(0)';
    imagenArribaDerecha.style.transform = 'translateX(0)';
}

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseleave', handleMouseLeave);

// Agregar un listener para verificar el ancho de la ventana cuando cambia
window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    
    // Ocultar las imágenes en modo móvil
    if (windowWidth <= 768) {
        imagenArriba.style.display = 'none';
        imagenArribaDerecha.style.display = 'none';
    } else {
        // Mostrar las imágenes en otros casos
        imagenArriba.style.display = 'block';
        imagenArribaDerecha.style.display = 'block';
    }
});

// Verificar el ancho de la ventana al cargar la página
window.addEventListener('load', () => {
    const windowWidth = window.innerWidth;
    
    // Ocultar las imágenes en modo móvil
    if (windowWidth <= 768) {
        imagenArriba.style.display = 'none';
        imagenArribaDerecha.style.display = 'none';
    }
});