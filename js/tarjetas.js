// Variable de control para verificar si la animación ya se ha ejecutado
let animacionEjecutada = false;

// Función para animar las cartas
function animarCartas() {
  // Verificar si es un dispositivo móvil
  const esDispositivoMovil = window.innerWidth <= 768; // Ajusta el ancho según tu criterio

  // Si es un dispositivo móvil, no ejecutar la animación
  if (esDispositivoMovil) {
    return;
  }

  const cartas = document.querySelectorAll('.carta');

  // Define la animación de entrada
  const animacionEntrada = anime.timeline({
    autoplay: false, // La animación no se ejecutará automáticamente
    easing: 'easeOutElastic(1, .5)', // Puedes ajustar la función de aceleración
  });

  // Define la animación para cada carta
  cartas.forEach((carta, index) => {
    animacionEntrada.add({
      targets: carta,
      translateY: [300, 0], // Desplazamiento vertical desde abajo
      opacity: [0, 1], // Cambio de opacidad
      duration: 1500, // Duración de la animación en milisegundos
      delay: index * 15, // Retraso entre cada carta
    });
  });

  // Agrega un evento para activar la animación solo si aún no se ha ejecutado
  const serviciosSection = document.querySelector('.servicios');
  serviciosSection.addEventListener('mouseenter', () => {
    if (!animacionEjecutada) {
      animacionEntrada.play();
      animacionEjecutada = true; // Marca la animación como ejecutada
    }
  });
}

// Llama a la función de animación cuando se carga la página
window.addEventListener('load', animarCartas);





