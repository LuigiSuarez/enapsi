
const imagen = document.getElementById('header__imagen');
const imagenArriba = document.getElementById('header__imagen-arriba');
const imagenArribaDerecha = document.getElementById('header__imagen-arriba-derecha');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;
    const move = (mouseX / windowWidth - 0.5) * 30;

    // Aplica el desplazamiento a la imagen principal
    imagen.style.transform = `translateX(${move}px)`;

    // Aplica el desplazamiento opuesto a la imagen arriba
    imagenArriba.style.transform = `translateX(${-move}px)`;

    // Aplica el desplazamiento opuesto a la imagen arriba derecha
    imagenArribaDerecha.style.transform = `translateX(${-move}px)`; // Puedes ajustar esto según tus necesidades
});

document.addEventListener('mouseleave', () => {
    imagen.style.transform = 'translateX(0)';
    imagenArriba.style.transform = 'translateX(0)';
    imagenArribaDerecha.style.transform = 'translateX(0)';
});