document.addEventListener("DOMContentLoaded", function() {
    const targetId = window.location.hash.substring(1); // Obtén el id del objetivo desde el hash de la URL
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const offset = -80; // Ajusta el valor de compensación aquí
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Realiza el desplazamiento al cargar la página con la compensación
        window.scrollTo({
            top: targetPosition - offset,
            behavior: "smooth" // Animación de desplazamiento suave
        });
    }
});