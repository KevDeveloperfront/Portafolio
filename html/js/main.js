// 1. Seleccionar el botón del menú hamburguesa y el menú
const boton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu"); // Cambiado de getElementById a querySelector con clase

// 2. Cuando se hace clic en el botón, mostrar u ocultar el menú
boton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// 3. Manejar clics en enlaces con anclaje (#) para desplazamiento suave
const enlaces = document.querySelectorAll('a[href^="#"]');
enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el salto instantáneo del navegador
        const targetId = enlace.getAttribute("href"); // Obtiene el ID (ej. #resources)
        const targetElement = document.querySelector(targetId); // Busca el elemento con ese ID

        if (targetElement) {
            const offset = 80; // Ajusta según la altura de tu barra de navegación
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset, // Desplaza al elemento, compensando la navbar
                behavior: "smooth" // Hace el desplazamiento suave
            });
        }

        // Cierra el menú en móviles después de hacer clic en un enlace
        menu.classList.remove("active");
    });
});