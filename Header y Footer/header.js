document.addEventListener("DOMContentLoaded", function() {
    const user = localStorage.getItem("user");
    const headerElement = document.getElementById("header");

    if (user) {
        const parsedUser = JSON.parse(user);
        headerElement.innerHTML = `
            <div id="header">
                <div class="Logo">
                    <img src="../imagenes/Logo_ruta6.png" class="logo_ruta">
                </div>
                <div class="menu-container">
                    <input type="checkbox" id="check">
                    <label for="check" class="mostrar-menu">&#8801</label>
                    <nav class="menu">
                        <a href="../Principal/index.html">Inicio</a>
                        <a href="../Nosotros/nosotros.html">Nosotros</a>
                        <a href="../Eventos/Eventos.html">Eventos</a>
                        <a href="#">Locales</a>
                        <a href="../Contactanos/contacto.html">Contactanos</a>
                        <div class="submenu-container">
                            <a href="#" class="Ingresar">Hola, ${parsedUser.nombre}!</a>
                            <ul class="submenu">
                                <li><a href="#" id="perfil">Mi Perfil</a></li>
                                <li><a href="#" id="config">Configuración</a></li>
                                <li><a href="#" id="logout">Cerrar Sesión</a></li>
                            </ul>
                        </div>
                        <div class="carrito-compras">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>S/.0.00</p>
                        </div>
                        <label for="check" class="esconder-menu">&#215</label>
                    </nav>
                </div>
            </div>
        `;

        // Cerrar sesión
        document.getElementById("logout").addEventListener("click", function() {
            localStorage.removeItem("user");
            window.location.href = "../Principal/index.html";
        });

    } else {
        headerElement.innerHTML = `
            <header>
                <div class="Logo">
                    <img src="../imagenes/Logo_ruta6.png" class="logo_ruta">
                </div>
                <div class="menu-container">
                    <input type="checkbox" id="check">
                    <label for="check" class="mostrar-menu">&#8801</label>
                    <nav class="menu">
                        <a href="../Main/index.html">Inicio</a>
                        <a href="../Nosotros/nosotros.html">Nosotros</a>
                        <a href="../Eventos/Eventos.html">Eventos</a>
                        <a href="#">Locales</a>
                        <a href="../Contactanos/contacto.html">Contactanos</a>
                        <div class="submenu-container">
                            <a href="#" class="Ingresar">Ingresar</a>
                            <ul class="submenu">
                                <li><a href="../Login y Register/login.html">Iniciar Sesión</a></li>
                                <li><a href="../Login y Register/register.html">Registrarse</a></li>
                            </ul>
                        </div>
                        <div class="carrito-compras">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>S/.0.00</p>
                        </div>
                        <label for="check" class="esconder-menu">&#215</label>
                    </nav>
                </div>
            </header>
        `;
    }
});

