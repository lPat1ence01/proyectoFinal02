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
                        <a href="../Locales/Locales.html">Locales</a>
                        <a href="../Contactanos/contacto.html">Contactanos</a>
                        <div class="submenu-container">
                            <a href="#" class="Ingresar">Hola, ${parsedUser.nombre}!</a>
                            <ul class="submenu">
                                <li><a href="../Perfil/Perfil.html" id="perfil">Mi Perfil</a></li>
                                <li><a href="../Pago/pago.html" id="config">Carrito</a></li>
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
            <!--Mini Pnatalla del carrito-->
            <div class="contenedor-carrito oculto" id="carrito-modal">
                <div class="encabezado-carrito">
                    <h1>CARRITO DE COMPRAS</h1>
                    <button class="cerrar-carrito" id="cerrar-carrito">&times;</button> <!-- Botón de cierre -->
                </div>
                <div class="barra-informacion">
                    <span>Items: <span id="cantidad-items">2</span></span>
                    <button class="boton-borrar-todo">
                        <img src="../imagenes/Ico_Eliminar.png" alt="icono borrar" class="icono-borrar"> Borrar todo
                    </button>
                </div>
                <div class="productos-carrito">
                    <div class="producto" data-precio="1.50">
                        <div class="contenido-producto">
                            <img src="../imagenes/restaurantes/Platos/Saiko/MakiFurai.jpeg" alt="Producto" class="imagen-producto">
                            <div class="informacion-producto">
                                <h2>Salsa Shoyu</h2>
                                <p class="enlace-informacion">Ver información</p>
                                <p class="precio-producto">S/ <span class="precio">1.50</span></p>
                                <div class="descripcion" style="display: none;">Esta es una salsa de soja japonesa utilizada comúnmente en la cocina asiática.</div>
                            </div>
                            <div class="cantidad-producto">
                                <button class="boton-disminuir">-</button>
                                <span class="cantidad">0</span>
                                <button class="boton-aumentar">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="producto" data-precio="21.50">
                        <div class="contenido-producto">
                            <img src="../imagenes/CarritoCompras/Makis_Cabanossi.jpg" alt="Producto" class="imagen-producto">
                            <div class="informacion-producto">
                                <h2>Makis Cabanossi</h2>
                                <p class="enlace-informacion">Ver información</p>
                                <p class="precio-producto">S/ <span class="precio">21.50</span></p>
                                <div class="descripcion" style="display: none;">Makis de salchicha Cabanossi, deliciosos y fáciles de disfrutar.</div>
                            </div>
                            <div class="cantidad-producto">
                                <button class="boton-disminuir">-</button>
                                <span class="cantidad">0</span>
                                <button class="boton-aumentar">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="pie-carrito">
                    <div class="subtotal">
                        <span>Subtotal</span>
                        <span>S/ <span id="subtotal">66.00</span></span>
                    </div>
                    <p class="informacion-descuento">Los descuentos se aplican automáticamente</p>
                    <button class="boton-comprar" id="continuar-compra">CONTINUAR CON LA COMPRA</button>
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
                        <a href="../Principal/index.html">Inicio</a>
                        <a href="../Nosotros/nosotros.html">Nosotros</a>
                        <a href="../Eventos/Eventos.html">Eventos</a>
                        <a href="../Locales/Locales.html">Locales</a>
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
            <!--Mini Pnatalla del carrito-->
            <div class="contenedor-carrito oculto" id="carrito-modal">
                <div class="encabezado-carrito">
                    <h1>CARRITO DE COMPRAS</h1>
                    <button class="cerrar-carrito" id="cerrar-carrito">&times;</button> <!-- Botón de cierre -->
                </div>
                <div class="barra-informacion">
                    <span>Items: <span id="cantidad-items">2</span></span>
                    <button class="boton-borrar-todo">
                        <img src="../imagenes/Ico_Eliminar.png" alt="icono borrar" class="icono-borrar"> Borrar todo
                    </button>
                </div>
                <div class="productos-carrito">
                    <div class="producto" data-precio="1.50">
                        <div class="contenido-producto">
                            <img src="../imagenes/restaurantes/Platos/Saiko/MakiFurai.jpeg" alt="Producto" class="imagen-producto">
                            <div class="informacion-producto">
                                <h2>Salsa Shoyu</h2>
                                <p class="enlace-informacion">Ver información</p>
                                <p class="precio-producto">S/ <span class="precio">1.50</span></p>
                                <div class="descripcion" style="display: none;">Esta es una salsa de soja japonesa utilizada comúnmente en la cocina asiática.</div>
                            </div>
                            <div class="cantidad-producto">
                                <button class="boton-disminuir">-</button>
                                <span class="cantidad">0</span>
                                <button class="boton-aumentar">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="producto" data-precio="21.50">
                        <div class="contenido-producto">
                            <img src="../imagenes/CarritoCompras/Makis_Cabanossi.jpg" alt="Producto" class="imagen-producto">
                            <div class="informacion-producto">
                                <h2>Makis Cabanossi</h2>
                                <p class="enlace-informacion">Ver información</p>
                                <p class="precio-producto">S/ <span class="precio">21.50</span></p>
                                <div class="descripcion" style="display: none;">Makis de salchicha Cabanossi, deliciosos y fáciles de disfrutar.</div>
                            </div>
                            <div class="cantidad-producto">
                                <button class="boton-disminuir">-</button>
                                <span class="cantidad">0</span>
                                <button class="boton-aumentar">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="pie-carrito">
                    <div class="subtotal">
                        <span>Subtotal</span>
                        <span>S/ <span id="subtotal">66.00</span></span>
                    </div>
                    <p class="informacion-descuento">Los descuentos se aplican automáticamente</p>
                    <button class="boton-comprar" id="continuar-compra">CONTINUAR CON LA COMPRA</button>
                </div>
            </div>
        `;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Redirigir a pago.html cuando se haga clic en el botón "CONTINUAR CON LA COMPRA"
    const continuarCompraBtn = document.getElementById('continuar-compra');
    
    if (continuarCompraBtn) {
        continuarCompraBtn.addEventListener('click', function() {
            // Redirigir a la página de pago en una nueva pestaña
            window.location.href = "../Pago/pago.html";
        });
    }

    // El resto de tu código sigue igual...
    const carritoIcono = document.querySelector('.carrito-compras'); // Ícono del carrito
    const carritoModal = document.getElementById('carrito-modal');  // Mini pantalla del carrito
    const cerrarCarritoBtn = document.getElementById('cerrar-carrito'); // Botón de cierre

    // Mostrar el carrito al hacer clic en el ícono
    carritoIcono.addEventListener('click', () => {
        carritoModal.classList.add('mostrar');
    });

    // Ocultar el carrito al hacer clic en la "X"
    cerrarCarritoBtn.addEventListener('click', () => {
        carritoModal.classList.remove('mostrar');
    });

    // Funcionalidad existente (actualizar subtotal y cantidad)
    const productos = document.querySelectorAll(".producto");
    const subtotalElemento = document.getElementById("subtotal");
    const cantidadItemsElemento = document.getElementById("cantidad-items");
    const botonBorrarTodo = document.querySelector(".boton-borrar-todo");

    function actualizarSubtotal() {
        let subtotal = 0;
        let cantidadItems = 0;

        productos.forEach(producto => {
            const precio = parseFloat(producto.getAttribute("data-precio"));
            const cantidad = parseInt(producto.querySelector(".cantidad").textContent);
            subtotal += precio * cantidad;
            cantidadItems += cantidad;
        });

        subtotalElemento.textContent = subtotal.toFixed(2);
        cantidadItemsElemento.textContent = cantidadItems;
    }

    productos.forEach(producto => {
        const botonAumentar = producto.querySelector(".boton-aumentar");
        const botonDisminuir = producto.querySelector(".boton-disminuir");
        const cantidadElemento = producto.querySelector(".cantidad");
        const enlaceInformacion = producto.querySelector(".enlace-informacion");
        const descripcion = producto.querySelector(".descripcion");

        botonAumentar.addEventListener("click", () => {
            let cantidad = parseInt(cantidadElemento.textContent);
            cantidad++;
            cantidadElemento.textContent = cantidad;
            actualizarSubtotal();
        });

        botonDisminuir.addEventListener("click", () => {
            let cantidad = parseInt(cantidadElemento.textContent);
            if (cantidad > 0) {
                cantidad--;
                cantidadElemento.textContent = cantidad;
                actualizarSubtotal();
            }
        });

        enlaceInformacion.addEventListener("click", () => {
            if (descripcion.style.display === "none") {
                descripcion.style.display = "block";
                enlaceInformacion.textContent = "Ocultar información";
            } else {
                descripcion.style.display = "none";
                enlaceInformacion.textContent = "Ver información";
            }
        });
    });

    botonBorrarTodo.addEventListener("click", () => {
        productos.forEach(producto => {
            const cantidadElemento = producto.querySelector(".cantidad");
            cantidadElemento.textContent = 0;
        });
        actualizarSubtotal();
    });

    actualizarSubtotal();
});


