function limitarDigitos(input) {
    // Limita la longitud a 16 caracteres
    if (input.value.length > 16) {
        input.value = input.value.slice(0, 16);
    }
}

function limitarDigitos2(input) {
    if(input.value.length > 3) {
        input.value = input.value.slice(0,3);
    }
}