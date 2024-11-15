document.getElementById("loginForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var gmail = document.getElementById("gmail").value;
    var contraseña = document.getElementById("password").value;

    var user = localStorage.getItem(gmail);

    if (user){
        var parsedUser = JSON.parse(user);
        if(parsedUser.contraseña == contraseña){
            localStorage.setItem("user", JSON.stringify(parsedUser));
            window.location.href ="../Principal/index.html"
        } else {
            alert("Contraseña Incorrecta")
        }
    } else {
        alert("Usuario no existe")
    }
})