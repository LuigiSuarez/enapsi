function scrollToSection(event) {
    event.preventDefault();

    const targetHref = this.getAttribute("href");
    const targetId = targetHref.split('#')[1];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const offset = -80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
}

// Agrega el evento de clic a los enlaces del menú
const menuLinks = document.querySelectorAll(".menu__item");
menuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});