document.getElementById("registerForm").addEventListener("submit", function (event){
    event.preventDefault();
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellidos").value;
    var gmail = document.getElementById("Email").value;
    var contraseña = document.getElementById("Contraseña").value;
    var confir_contraseña = document.getElementById("Confirmar-contraseña").value;
    var fecha = document.getElementById("Fecha").value;
    var celular = document.getElementById("Celular").value;
    var direccion = document.getElementById("direccion").value;

    if (contraseña !== confir_contraseña){
        alert("Las contraseñas son diferentes");
        return
    }

    // Validar el formato del correo electrónico (ejemplo básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(gmail)) {
        alert("Por favor, ingresa un correo electrónico válido");
        return;
    }

    // Validar la longitud de la contraseña (ejemplo mínimo de 6 caracteres)
    if (contraseña.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    const user = {
        nombre: nombre,
        apellido: apellido,
        gmail: gmail,
        contraseña: contraseña,
        fecha: fecha,
        celular: celular,
        direccion: direccion,
    };

    localStorage.setItem(gmail, JSON.stringify(user));
    alert("¡Registro exitoso! Por favor inicia sesión")
    window.location.href="login.html"
})