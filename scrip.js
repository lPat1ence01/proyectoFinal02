document.addEventListener("DOMContentLoaded", function () {
  const ingresarLink = document.querySelector(".Ingresar");
  const submenu = document.querySelector(".submenu");

  ingresarLink.addEventListener("click", function (event) {
      event.preventDefault(); // Evita que el enlace recargue la página
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
  });

  // Cierra el submenú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
      if (!ingresarLink.contains(event.target) && !submenu.contains(event.target)) {
          submenu.style.display = "none";
      }
  });
});


// Configuración para el primer carrusel (Lo más vendido) - Deslizar hacia la izquierda (predeterminado)
var swiper1 = new Swiper(".swiper-container-1", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: false,
  grabCursor: true,
  loopFillGroupWithBlack: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    }
  }
});

// Configuración para el segundo carrusel (Mira estas opciones) - Deslizar hacia la derecha
var swiper2 = new Swiper(".swiper-container-2", {
  slidesPerView: 5,
  spaceBetween: 25,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  loopFillGroupWithBlack: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true  // Desliza en dirección opuesta
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    }
  }
});



