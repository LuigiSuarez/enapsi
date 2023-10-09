function scrollToSection(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute("href").substring(1); // Obtenemos el id del objetivo sin el #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const offset = -80; // Ajusta el valor de compensación aquí
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth" // Animación de desplazamiento suave
        });
    }
}

// Agregamos el evento de clic a los enlaces del menú
const menuLinks = document.querySelectorAll(".menu__item");
menuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});






