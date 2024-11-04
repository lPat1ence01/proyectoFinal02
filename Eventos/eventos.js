// Espera a que todo el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Definición de eventos por fecha en un objeto
    // Cada fecha es una clave con un array de IDs de eventos como valor
    const eventosPorFecha = {
        "2024-06-21": ["evento01", "evento02"],
        "2024-08-24": ["eventoC", "eventoD"] // Puedes añadir más fechas y eventos
    };

    // Selecciona todos los botones de fecha dentro del contenedor con ID "fechas"
    const botonesFecha = document.querySelectorAll("#fechas button");

    // Selecciona el contenedor donde se mostrarán los eventos
    const contenedorEventos = document.getElementById("eventos-container");

    // Agrega un evento "click" a cada botón de fecha
    botonesFecha.forEach(boton => {
        boton.addEventListener("click", function() {
            // Obtiene la fecha del atributo data-fecha del botón
            const fecha = boton.getAttribute("data-fecha");
            // Llama a la función para mostrar eventos según la fecha seleccionada
            mostrarEventos(fecha);
        });
    });

    // Función que muestra los eventos según la fecha seleccionada
    function mostrarEventos(fecha) {
        // Primero, oculta todos los eventos de manera que no haya eventos visibles al cambiar de fecha
        const todosEventos = contenedorEventos.querySelectorAll(".evento01, .evento02");
        todosEventos.forEach(evento => evento.style.display = "none");

        // Comprueba si hay eventos para la fecha seleccionada
        if (eventosPorFecha[fecha]) {
            // Si hay eventos, itera sobre cada ID de evento en la fecha
            eventosPorFecha[fecha].forEach(eventoId => {
                // Obtiene el elemento del evento correspondiente usando su ID
                const eventoElemento = document.getElementById(eventoId);
                if (eventoElemento) {
                    // Si el elemento existe, lo muestra cambiando el estilo a "block"
                    eventoElemento.style.display = "block";
                }
            });
        } else {
            // Si no hay eventos para la fecha, muestra un mensaje en el contenedor de eventos
            contenedorEventos.innerHTML = "<p>No hay eventos para esta fecha.</p>";
        }
    }
});


