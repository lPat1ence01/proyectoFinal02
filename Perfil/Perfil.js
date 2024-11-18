document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos del usuario
    function cargarDatosUsuario() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            // Actualizar la información del perfil
            document.querySelector('.perfil-info h2').textContent = userData.nombre || 'Usuario';
            document.querySelector('.perfil-info p:nth-child(2)').innerHTML = 
                `<i class="fas fa-map-marker-alt"></i> Dirección: ${userData.direccion || 'No especificada'}`;
            document.querySelector('.perfil-info p:nth-child(3)').innerHTML = 
                `<i class="fas fa-phone"></i> Celular: ${userData.celular || 'No especificado'}`;
            document.querySelector('.perfil-info p:nth-child(4)').innerHTML = 
                `<i class="fas fa-envelope"></i> Email: ${userData.email || 'No especificado'}`;

            // Si hay una imagen de perfil guardada, mostrarla
            if (userData.profileImage) {
                document.querySelector('.perfil-imagen').src = userData.profileImage;
            }
        }
    }

    // Cargar los datos al iniciar
    cargarDatosUsuario();

    // Función para manejar la navegación del slider
    function handleSliderNavigation(container, direction) {
        const scrollAmount = 300;
        if (direction === 'next') {
            container.scrollLeft += scrollAmount;
        } else {
            container.scrollLeft -= scrollAmount;
        }
    }

    // Configurar los botones de navegación para cada slider
    document.querySelectorAll('.seccion').forEach(section => {
        const slider = section.querySelector('.card-slider');
        const prevBtn = section.querySelector('.prev-btn');
        const nextBtn = section.querySelector('.next-btn');
        const prevBtn2 = section.querySelector('.prev-btn-2');
        const nextBtn2 = section.querySelector('.next-btn-2');

        if (slider) {
            if (prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
            if (prevBtn2 && nextBtn2) {
                prevBtn2.addEventListener('click', () => handleSliderNavigation(slider, 'prev'));
                nextBtn2.addEventListener('click', () => handleSliderNavigation(slider, 'next'));
            }
        }
    });

    // Funcionalidad de favoritos con animación
    document.querySelectorAll('.favorito-btn, .favorito-evento').forEach((btn, index) => {
        // Crear un ID único para cada botón basado en su contexto
        const cardSection = btn.closest('.card, .card-comida, .evento-card');
        const cardTitle = cardSection?.querySelector('h3')?.textContent || '';
        const favoriteId = `favorite-${cardTitle.replace(/\s+/g, '-').toLowerCase()}`;
        
        // Asignar el ID al elemento padre
        if (cardSection) {
            cardSection.dataset.id = favoriteId;
        }

        // Recuperar el estado guardado
        if (localStorage.getItem(favoriteId) === 'true') {
            const icon = btn.querySelector('i');
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.classList.add('active');
        }

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            
            // Toggle de clases
            this.classList.toggle('active');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');

            // Guardar estado en localStorage
            const isActive = icon.classList.contains('fas');
            localStorage.setItem(favoriteId, isActive);

            // Efecto de animación
            icon.style.animation = 'none';
            icon.offsetHeight; // Trigger reflow
            icon.style.animation = 'favorito-animation 0.3s ease';
        });
    });

    // Funcionalidad para la cámara del perfil
    const cameraIcon = document.querySelector('.camera-icon');
    if (cameraIcon) {
        cameraIcon.addEventListener('click', function() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.style.display = 'none';
            
            fileInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const imageUrl = event.target.result;
                        document.querySelector('.perfil-imagen').src = imageUrl;
                        
                        // Actualizar la imagen en los datos del usuario
                        const userData = JSON.parse(localStorage.getItem('userData')) || {};
                        userData.profileImage = imageUrl;
                        localStorage.setItem('userData', JSON.stringify(userData));
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            fileInput.click();
        });
    }

    // Smooth scrolling para los sliders
    document.querySelectorAll('.card-slider').forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });

    // Funcionalidad para los botones "Ver carta"
    document.querySelectorAll('.ver-carta-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const restaurantName = this.closest('.card-content').querySelector('h3').textContent;
            window.location.href = `../Locales/Local${restaurantName.replace(/\s+/g, '')}.html`;
        });
    });

    // Manejar cambios de tamaño de ventana
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            document.querySelectorAll('.seccion').forEach(section => {
                const slider = section.querySelector('.card-slider');
                if (slider) {
                    slider.scrollLeft = 0;
                }
            });
        }, 250);
    });
});