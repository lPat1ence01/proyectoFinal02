document.addEventListener("DOMContentLoaded", function() {
    const eventosPorFecha = {
        "2024-06-21": ["evento01", "evento02"],
        "2024-08-24": ["eventoC", "eventoD"]
    };

    // Selecciona todos los botones de fecha dentro del contenedor con ID "fechas"
    const botonesFecha = document.querySelectorAll("#fechas button");

    // Selecciona el contenedor donde se mostrarán los eventos
    const contenedorEventos = document.getElementById("eventos-container");

    // Agrega un evento "click" a cada botón de fecha
    botonesFecha.forEach(boton => {
        boton.addEventListener("click", function() {
            const fecha = boton.getAttribute("data-fecha");
            mostrarEventos(fecha);
        });
    });

    // Función que muestra los eventos según la fecha seleccionada
    function mostrarEventos(fecha) {
        const todosEventos = contenedorEventos.querySelectorAll(".evento01, .evento02");
        todosEventos.forEach(evento => evento.style.display = "none");

        if (eventosPorFecha[fecha]) {
            eventosPorFecha[fecha].forEach(eventoId => {
                const eventoElemento = document.getElementById(eventoId);
                if (eventoElemento) {
                    eventoElemento.style.display = "block";
                }
            });
            contenedorEventos.innerHTML = "<p>No hay eventos para esta fecha.</p>";
        }
    }
});


