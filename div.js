// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = this.getAttribute('href'); // Obtiene el ID de la sección
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    const carruselSlides = document.querySelectorAll('.carrusel-slide');
    const prevBtn = document.querySelector('.carrusel-btn-prev');
    const nextBtn = document.querySelector('.carrusel-btn-next');
    const indicadores = document.querySelectorAll('.indicador');

    let currentIndex = 0;

    function updateCarrusel() {
        const offset = -currentIndex * 100;
        carruselContenedor.style.transform = `translateX(${offset}%)`;

        // Actualizar indicadores
        indicadores.forEach((indicador, index) => {
            if (index === currentIndex) {
                indicador.classList.add('active');
            } else {
                indicador.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = carruselSlides.length - 1;
        }
        updateCarrusel();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carruselSlides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrusel();
    });

    // Navegación por indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            currentIndex = index;
            updateCarrusel();
        });
    });

    // Opcional: Auto-play del carrusel
    setInterval(() => {
        if (currentIndex < carruselSlides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarrusel();
    }, 5000); // Cambia de imagen cada 5 segundos

    // Inicializar el primer indicador como activo
    updateCarrusel();
});
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
});
