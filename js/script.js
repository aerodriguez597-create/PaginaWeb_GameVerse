// MENÚ HAMBURGUESA

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll("#nav a");

if (toggle && nav) {
    toggle.addEventListener("click", () => {nav.classList.toggle("active");
    });
}

if (nav) {
    navLinks.forEach(link => {
        link.addEventListener("click", () => {nav.classList.remove("active");
        });
    });
}

// CERRAR MENÚ AL VOLVER A ESCRITORIO

window.addEventListener("resize", () => {
    if (nav && window.innerWidth > 768) {
        nav.classList.remove("active");
    }
});

// MENÚS DESPLEGABLES EN CELULAR

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(drop => {
    drop.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            drop.classList.toggle("active");
        }
    });
});

// ANIMACIÓN AL HACER SCROLL

const elementos = document.querySelectorAll(".caja, .beneficio, .banner");
function mostrarElementos() {
    const trigger = window.innerHeight * 0.85;
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);

// BASE DE DATOS DE VIDEOJUEGOS

const videojuegos = [
    {
        nombre: "Elden Ring",
        precio: 229.90,
        plataforma: "PC",
        genero: "RPG",
        imagen: "../img/Elden Ring.png"
    },

    {
        nombre: "Hollow Knight: Silksong",
        precio: 149.90,
        plataforma: "PC",
        genero: "Aventura",
        imagen: "../img/Silksong.png"
    },

    {
        nombre: "Rain World",
        precio: 89.90,
        plataforma: "PC",
        genero: "Supervivencia",
        imagen: "../img/Rain World.png"
    },

    {
        nombre: "Super Meat Boy",
        precio: 49.90,
        plataforma: "PC",
        genero: "Plataformas",
        imagen: "../img/Meat Boy.png"
    },

    {
        nombre: "Red Dead Redemption 2",
        precio: 199.90,
        plataforma: "PlayStation",
        genero: "Acción",
        imagen: "../img/Red Dead Redemption 2.jpeg"
    },

    {
        nombre: "God of War Ragnarök",
        precio: 249.90,
        plataforma: "PlayStation",
        genero: "Acción",
        imagen: "../img/God of War Ragnarok.jpeg"
    },

    {
        nombre: "The Last of Us Part I",
        precio: 239.90,
        plataforma: "PlayStation",
        genero: "Acción",
        imagen: "../img/The Last Of us 1.jpg"
    },

    {
        nombre: "Spider-Man 2",
        precio: 259.90,
        plataforma: "PlayStation",
        genero: "Acción",
        imagen: "../img/Spider Man 2.jpeg"
    },

    {
        nombre: "Halo Infinite",
        precio: 159.90,
        plataforma: "Xbox",
        genero: "Shooter",
        imagen: "../img/Halo Infinite.jpeg"
    },

    {
        nombre: "Forza Horizon 5",
        precio: 189.90,
        plataforma: "Xbox",
        genero: "Carreras",
        imagen: "../img/Forza Horizon 5.jpeg"
    },

    {
        nombre: "Crash Bandicoot 4: It's About Time",
        precio: 119.90,
        plataforma: "Xbox",
        genero: "Aventura",
        imagen: "../img/Crash Bandicoot 4.jpg"
    },

    {
        nombre: "Persona 5 Royal",
        precio: 139.90,
        plataforma: "Xbox",
        genero: "Acción",
        imagen: "../img/Persona 5.png"
    },

    {
        nombre: "The Legend of Zelda: Tears of the Kingdom",
        precio: 259.90,
        plataforma: "Nintendo",
        genero: "Aventura",
        imagen: "../img/The Legend of Zelda.jpeg"
    },

    {
        nombre: "Super Mario Odyssey",
        precio: 199.90,
        plataforma: "Nintendo",
        genero: "Plataformas",
        imagen: "../img/Super Mario Odyssey.png"
    },

    {
        nombre: "Mario Kart 8 Deluxe",
        precio: 219.90,
        plataforma: "Nintendo",
        genero: "Carreras",
        imagen: "../img/Mario Kart 8.png"
    },

    {
        nombre: "Pokémon Legends: Arceus",
        precio: 229.90,
        plataforma: "Nintendo",
        genero: "RPG",
        imagen: "../img/Pokemon Arceus.png"
    },

    {
        nombre: "Lies of P",
        precio: 169.90,
        plataforma: "PC",
        genero: "RPG",
        imagen: "../img/Lies of P.png"
    },

    {
        nombre: "Resident Evil 4",
        precio: 199.90,
        plataforma: "PC",
        genero: "Terror",
        imagen: "../img/Resident Evil 4.png"
    },

    {
        nombre: "Black Myth: Wukong",
        precio: 259.90,
        plataforma: "PC",
        genero: "Acción",
        imagen: "../img/Black Myth Wukong.jpeg"
    },

    {
        nombre: "Doom Eternal",
        precio: 239.90,
        plataforma: "PC",
        genero: "RPG",
        imagen: "../img/Doom Eternal.png"
    }

];

// CREAR TARJETA DE VIDEOJUEGO

function crearTarjetaJuego(juego) {
    return `
        <div class="caja">

            <img
                src="${juego.imagen}"
                alt="${juego.nombre}"
            >

            <h3>${juego.nombre}</h3>

            <span class="genero">
                ${juego.genero}
            </span>

            <p class="plataforma-juego">
                <i class="fa-solid fa-gamepad"></i>
                ${juego.plataforma}
            </p>

            <p class="precio">
                S/ ${juego.precio.toFixed(2)}
            </p>

            <button
                type="button"
                class="btn-comprar"
                data-juego="${juego.nombre}"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                Comprar
            </button>
        </div>
    `;

}

// RENDERIZAR CATÁLOGO

function renderizarCatalogo(listaJuegos) {
    const catalogo = document.getElementById("catalogo");
    if (!catalogo) {
        return;
    }
    catalogo.innerHTML = listaJuegos.map(juego => crearTarjetaJuego(juego)).join("");

    const contador = document.getElementById("cantidadJuegos");
    if (contador) {
        contador.textContent = `Se encontraron ${listaJuegos.length} videojuegos.`;

    }

}

// INICIALIZAR CATÁLOGO

function inicializarCatalogo() {
    renderizarCatalogo(videojuegos);
    const inputBuscar = document.getElementById("buscar");
    const selectPlataforma = document.getElementById("plataforma");
    const selectOrden = document.getElementById("orden");

    if (inputBuscar) {
        inputBuscar.addEventListener("input",filtrarYMostrar);
    }

    if (selectPlataforma) {selectPlataforma.addEventListener("change",filtrarYMostrar);
    }

    if (selectOrden) {selectOrden.addEventListener("change",filtrarYMostrar);
    }

}

// FILTRAR Y MOSTRAR JUEGOS

function filtrarYMostrar() {
    const busqueda = document.getElementById("buscar")?.value.toLowerCase() || "";
    const plataforma = document.getElementById("plataforma")?.value || "Todos";
    const orden = document.getElementById("orden")?.value || "default";

    let juegosFiltrados = videojuegos.filter(juego => {
        const coincideBusqueda = juego.nombre.toLowerCase().includes(busqueda) || juego.genero.toLowerCase().includes(busqueda);
        const coincidePlataforma = plataforma === "Todos" || juego.plataforma === plataforma;
        return coincideBusqueda && coincidePlataforma;
    });

    if (orden === "menor") {
        juegosFiltrados.sort((a, b) => a.precio - b.precio);
    }

    else if (orden === "mayor") {
        juegosFiltrados.sort((a, b) => b.precio - a.precio);
    }
    renderizarCatalogo(juegosFiltrados);

}

// COMPRAR VIDEOJUEGO
// CATÁLOGO → LOGIN

document.addEventListener("click", function(e) {
    const boton = e.target.closest(".btn-comprar");

    if (!boton) {
        return;
    }

    e.preventDefault();

    const nombreJuego = boton.getAttribute("data-juego");
    const juego = videojuegos.find(
            juego => juego.nombre === nombreJuego
        );

    if (!juego) {
        alert("No se encontró el videojuego.");
        return;
    }

    // Guardar videojuego seleccionado

    localStorage.setItem(
        "juegoCompra",
        JSON.stringify(juego)
    );

    // Verificar si ya existe una sesión
    const sesion = localStorage.getItem("usuarioSesion");

    if (sesion) {
        window.location.href = "Compra.html";

    }

    else {
        window.location.href = "login.html";
    }
});

// REGISTRO DE USUARIO

function registrarUsuario() {
    let nombres = document.getElementById("nombres")?.value.trim();
    let apellidos = document.getElementById("apellidos")?.value.trim();
    let usuario = document.getElementById("usuarioRegistro")?.value.trim();
    let correo = document.getElementById("correo")?.value.trim();
    let password = document.getElementById("passwordRegistro")?.value;
    let confirmar = document.getElementById("confirmarPassword")?.value;
    let resultado = "";

    // Patrones
    const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const patronUsuario = /^[A-Za-z0-9_]+$/;
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validaciones

    if (nombres === "") {
        resultado = "Ingrese sus nombres.";

    }

    else if (!patronNombre.test(nombres)) {
        resultado = "Los nombres solo deben contener letras.";

    }

    else if (apellidos === "") {
        resultado = "Ingrese sus apellidos.";

    }

    else if (!patronNombre.test(apellidos)) {
        resultado = "Los apellidos solo deben contener letras.";

    }

    else if (usuario === "") {
        resultado = "Ingrese un nombre de usuario.";

    }

    else if (!patronUsuario.test(usuario)) {
        resultado = "El usuario solo puede contener letras, números y guion bajo.";

    }

    else if (correo === "") {
        resultado = "Ingrese su correo electrónico.";

    }

    else if (!patronCorreo.test(correo)) {
        resultado = "Ingrese un correo electrónico válido.";

    }

    else if (password === "") {
        resultado = "Ingrese una contraseña.";

    }

    else if (password.length < 6) {
        resultado = "La contraseña debe tener al menos 6 caracteres.";

    }

    else if (confirmar === "") {
        resultado = "Confirme su contraseña.";

    }

    else if (password !== confirmar) {
        resultado = "Las contraseñas no coinciden.";

    }

    const resultadoElemento = document.getElementById("resultadoRegistro");

    if (resultado !== "") {
        if (resultadoElemento) {
            resultadoElemento.textContent = resultado;
            resultadoElemento.style.color = "#E11D48";
        }
        alert(resultado);
        return;
    }

    // Guardar usuario

    const usuarioRegistrado = {
        nombres: nombres,
        apellidos: apellidos,
        usuario: usuario,
        correo: correo,
        password: password

    };

    localStorage.setItem(
        "usuarioGameVerse",
        JSON.stringify(usuarioRegistrado)
    );

    if (resultadoElemento) {
        resultadoElemento.textContent = "Cuenta registrada correctamente.";
        resultadoElemento.style.color = "#38BDF8";

    }

    alert("Cuenta registrada correctamente.");

    // Volver al login
    setTimeout(function() {
        window.location.href = "login.html";
    }, 1500);

}

// BOTÓN CREAR CUENTA

document.addEventListener("click", function(e) {
    const boton = e.target.closest(".btn-registro");

    if (!boton) {
        return;
    }

    e.preventDefault();
    registrarUsuario();

});

// LOGIN → COMPRA

function iniciarSesion() {
    const usuario = document.getElementById("usuario")?.value.trim();
    const password = document.getElementById("password")?.value;
    const resultadoElemento = document.getElementById("resultadoLogin");
    const usuarioGuardado = localStorage.getItem("usuarioGameVerse");

    if (!usuarioGuardado) {
        const mensaje = "No existe una cuenta registrada. Primero debes crear una cuenta.";
        if (resultadoElemento) {
            resultadoElemento.textContent = mensaje;
        }

        alert(mensaje);
        return;
    }


    const datosUsuario = JSON.parse(usuarioGuardado);

    if (usuario === "") {
        alert("Ingrese su usuario o correo.");
        return;
    }

    if (password === "") {
        alert("Ingrese su contraseña.");
        return;
    }

    const usuarioCorrecto = usuario === datosUsuario.usuario || usuario === datosUsuario.correo;
    if (!usuarioCorrecto) {
        alert(
            "El usuario o correo electrónico no es correcto."
        );
        return;

    }

    if (password !== datosUsuario.password) {
        alert("La contraseña es incorrecta.");
        return;
    }

    // Crear sesión
    localStorage.setItem(
        "usuarioSesion",
        JSON.stringify({
            usuario: datosUsuario.usuario,
            nombres: datosUsuario.nombres
        })
    );

    if (resultadoElemento) {
        resultadoElemento.textContent = "Inicio de sesión correcto.";
        resultadoElemento.style.color = "#38BDF8";

    }
    alert("Inicio de sesión correcto.");

    // Ir a compra
    setTimeout(function() {
        window.location.href = "Compra.html";
    }, 1000);
}

// CARGAR JUEGO SELECCIONADO

function cargarCompra() {
    const datos = localStorage.getItem("juegoCompra");

    if (!datos) {
        console.warn("No existe un videojuego seleccionado.");
        return;
    }

    const juego = JSON.parse(datos);
    const imagen = document.getElementById("imagenProducto");
    const nombre = document.getElementById("nombreProducto");
    const plataforma = document.getElementById("plataformaProducto");
    const genero = document.getElementById("generoProducto");
    const precio = document.getElementById("precioProducto");
    const resumen = document.getElementById("resumenProducto");
    const total = document.getElementById("totalCompra");

    if (imagen) {
        imagen.src = juego.imagen;
        imagen.alt = juego.nombre;
    }

    if (nombre) {
        nombre.textContent = juego.nombre;
    }

    if (plataforma) {
        plataforma.textContent = juego.plataforma;
    }

    if (genero) {
        genero.textContent = juego.genero;
    }

    if (precio) {
        precio.textContent = juego.precio.toFixed(2);
    }

    if (resumen) {
        resumen.textContent = juego.nombre;
    }

    if (total) {
        total.textContent = juego.precio.toFixed(2);
    }

    // CARGAR CUPÓN GUARDADO
    const cuponGuardado = localStorage.getItem("cuponCompra");
    if (cuponGuardado) {
        const cupon = JSON.parse(cuponGuardado);
        const input = document.getElementById("codigoCuponCompra");

    if (input) {
        input.value = cupon.codigo;
        descuentoAplicado = cupon.descuento;
        codigoCuponAplicado = cupon.codigo;
        actualizarTotalCompra(juego);
        }
    }

    }

// APLICAR CUPÓN

function aplicarCupon() {

    // Obtener código ingresado
    const codigo = document.getElementById("codigoCupon")?.value .trim().toUpperCase();

    // Verificar que exista un juego seleccionado
    const datosJuego = localStorage.getItem("juegoCompra");

    if (!datosJuego) {
        alert("No se encontró el videojuego seleccionado.");
        return;
    }

    // Convertir los datos del juego
    const juego = JSON.parse(datosJuego);

    // DETERMINAR DESCUENTO

    let descuento = 0;

    if (codigo === "GAME10") {
        descuento = 10;
    }

    else if (codigo === "GAME20") {
        descuento = 20;
    }

    else if (codigo === "GAMER30") {
        descuento = 30;
    }

    else {
        alert("Cupón no válido.");
        return;
    }

    // CALCULAR PRECIO FINAL

    const precioFinal = juego.precio - (juego.precio * descuento / 100);

    // GUARDAR CUPÓN

    const datosDescuento = {
        codigo: codigo,
        porcentaje: descuento,
        precioFinal: precioFinal
    };


    localStorage.setItem(
        "descuentoGameVerse",
        JSON.stringify(datosDescuento)

    );


    // MOSTRAR RESULTADO
    const resultado =  document.getElementById("resultadoCupon");
    if (resultado) {
        resultado.innerHTML = "Cupón aplicado: " + codigo + " (-" + descuento + "%)<br>" + "Nuevo precio: S/ " + precioFinal.toFixed(2);
        resultado.style.color ="#38BDF8";
    }

    // ACTUALIZAR TOTAL
    const total = document.getElementById("totalCompra");
    if (total) {
        total.textContent =  precioFinal.toFixed(2);

    }

}

// CONFIRMAR COMPRA

function confirmarCompra() {

    // OBTENER MÉTODO DE PAGO

    const metodo = document.getElementById("metodoPago")?.value;

    // VALIDAR MÉTODO DE PAGO

    if (metodo === "") {
        alert("Seleccione un método de pago.");
        return;
    }

    // OBTENER VIDEOJUEGO

    const datosJuego = localStorage.getItem("juegoCompra");


    if (!datosJuego) {
        alert(
            "No se encontró el videojuego seleccionado."
        );
        return;
    }

    const juego = JSON.parse(datosJuego);

    // OBTENER USUARIO
    const datosUsuario = localStorage.getItem( "usuarioGameVerse"
        );

    let usuario = null;
    if (datosUsuario) {
        usuario =  JSON.parse(datosUsuario);

    }

    // =====================================================
    // OBTENER CUPÓN
    // =====================================================

    const datosCupon = localStorage.getItem("cuponCompra");
    let precioFinal = Number(juego.precio);
    let codigoCupon = "Sin cupón";
    let porcentajeDescuento = 0;

    if (datosCupon) {
        const cupon = JSON.parse(datosCupon);
        codigoCupon = cupon.codigo;
        porcentajeDescuento = Number(cupon.descuento);

        precioFinal =
            Number(juego.precio) -
            (
                Number(juego.precio) *
                porcentajeDescuento /
                100
            );
    }

    // CREAR COMPROBANTE

    const compra = {
        numero: "GV-" + Date.now(),
        fecha: new Date() .toLocaleDateString("es-PE"),
        cliente: usuario ? usuario.nombres + " " + usuario.apellidos : "Cliente GameVerse",
        usuario: usuario ? usuario.usuario : "Usuario",
        nombre: juego.nombre,
        imagen: juego.imagen,
        plataforma: juego.plataforma,
        genero: juego.genero,

        // PRECIO FINAL
        precio: precioFinal,

        // DATOS DEL CUPÓN
        cupon: codigoCupon,
        descuento:  porcentajeDescuento,
        metodoPago: metodo

    };

    // GUARDAR COMPROBANTE

    localStorage.setItem( "compraGameVerse", JSON.stringify(compra));


    // MENSAJE EN LA PÁGINA

    const resultado = document.getElementById( "resultadoCompra");

    if (resultado) {

        resultado.textContent = "Compra realizada correctamente.";


        resultado.style.color = "#38BDF8";

    }

    // MENSAJE DE COMPRA

    alert(
        "Compra realizada correctamente.\n\n" + "Videojuego: " + juego.nombre + "\n" + "Método de pago: " + metodo + "\n" +"Cupón: " + codigoCupon + "\n" + "Descuento: " + porcentajeDescuento + "%" + "\n" + "Total: S/ " + precioFinal.toFixed(2)
    );

    // IR AL COMPROBANTE

    setTimeout(function() {

        window.location.href = "Comprobante.html";

    }, 1000);

}

// FORMULARIO DE SOPORTE

const formularioSoporte =
    document.querySelector(".contactar-soporte form");

if (formularioSoporte) {

    formularioSoporte.addEventListener(
        "submit",
        function(e) {

            e.preventDefault();

            // LECTURA DE DATOS

            let nombre = document.getElementById("nombre").value.trim();
            let correo = document.getElementById("correo").value.trim();
            let tipo = document.getElementById("tipo-problema").value;
            let mensaje = document.getElementById("mensaje").value.trim();
            let terminos =  document.getElementById("terminos").checked;

            // PATRONES

            const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
            const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            let resultado = "";

            // VALIDACIÓN

            if (nombre === "") {
                resultado = "Ingrese su nombre completo.";
            }

            else if (!patronNombre.test(nombre)) {
                resultado = "El nombre solo debe contener letras.";
            }

            else if (correo === "") {
                resultado = "Ingrese su correo electrónico.";
            }

            else if (!patronCorreo.test(correo)) {
                resultado = "Ingrese un correo electrónico válido.";
            }

            else if (tipo === "") {
                resultado = "Seleccione una opción.";
            }

            else if (mensaje === "") {
                resultado = "Ingrese un mensaje.";
            }

            else if (mensaje.length < 10) {
                resultado = "El mensaje debe tener al menos 10 caracteres.";
            }

            else if (!terminos) {
                resultado =  "Debe aceptar los términos y condiciones.";
            }


            // MOSTRAR ERROR

            if (resultado !== "") {
                alert(resultado);
                return;
            }


            // GRABAR EN LOCALSTORAGE

            let ls = localStorage;
            let arreglo;

            if (ls.getItem("arregloSoporte") == null) {

                arreglo = [
                    {
                        nombre: nombre,
                        correo: correo,
                        tipo: tipo,
                        mensaje: mensaje
                    }

                ];

                ls.setItem(
                    "arregloSoporte",
                    JSON.stringify(arreglo)
                );

            }

            else {
                arreglo = JSON.parse( ls.getItem("arregloSoporte")
                    );

                arreglo.push(
                    {
                        nombre: nombre,
                        correo: correo,
                        tipo: tipo,
                        mensaje: mensaje
                    }

                );

                ls.setItem(
                    "arregloSoporte",
                    JSON.stringify(arreglo)
                );

            }


            // MENSAJE CORRECTO
            alert(
                "Mensaje registrado correctamente."
            );

            // BOTÓN

            const boton = document.querySelector(".btn-enviar-soporte");
            boton.disabled = true;
            boton.innerHTML =
                '<i class="fa-solid fa-spinner"></i> Enviando...';

            // TEMPORIZADOR

            setTimeout(function() {

                alert(
                    "Tu mensaje ha sido enviado correctamente. " +
                    "Nos pondremos en contacto contigo."
                );

                formularioSoporte.reset();

                boton.disabled = false;

                boton.innerHTML =
                    '<i class="fa-solid fa-paper-plane"></i> Enviar consulta';

            }, 3000);
        }
    );

}


// REPORTE DE SOPORTE
function cargarReporteSoporte() {
    const tabla = document.querySelector("#tablaSoporte tbody");

    if (!tabla) {
        return;
    }

    let datos = localStorage.getItem("arregloSoporte");

    // Si no existen registros
    if (datos == null) {

        tabla.innerHTML = `
            <tr>
                <td colspan="4">
                    No existen mensajes registrados.
                </td>
            </tr>
        `;

        return;
    }


    // Convertir JSON a arreglo
    let arreglo = JSON.parse(datos);

    // Recorrer registros
    for (
        let i = 0;
        i < arreglo.length;
        i++
    ) {
        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");

        let celdaCorreo = document.createElement("td");

        let celdaTipo = document.createElement("td");

        let celdaMensaje = document.createElement("td");


        // Crear textos
        let textoNombre =
            document.createTextNode(
                arreglo[i].nombre
            );

        let textoCorreo =
            document.createTextNode(
                arreglo[i].correo
            );

        let textoTipo =
            document.createTextNode(
                arreglo[i].tipo
            );

        let textoMensaje =
            document.createTextNode(
                arreglo[i].mensaje
            );

        // Agregar texto a celdas
        celdaNombre.appendChild(
            textoNombre
        );

        celdaCorreo.appendChild(
            textoCorreo
        );

        celdaTipo.appendChild(
            textoTipo
        );

        celdaMensaje.appendChild(
            textoMensaje
        );

        // Agregar celdas a fila
        fila.appendChild(
            celdaNombre
        );

        fila.appendChild(
            celdaCorreo
        );

        fila.appendChild(
            celdaTipo
        );

        fila.appendChild(
            celdaMensaje
        );

        // Agregar fila a tabla
        tabla.appendChild(fila);
    }

}

// EJECUTAR AL CARGAR

document.addEventListener(
    "DOMContentLoaded",
    function() {
        cargarReporteSoporte();
    }
);

// FORMULARIO DE CONTACTO

const formularioContacto = document.getElementById("formulario-contacto")?.querySelector("form");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", function(e) {
        // Evitar que la página se recargue
        e.preventDefault();

        // DECLARACIÓN DE VARIABLES

        let nombre;
        let correo;
        let asunto;
        let tipo;
        let mensaje;
        let terminos;
        let resultado = "";

        // PATRONES

        // Solo letras, espacios y caracteres del español
        const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        // Formato básico de correo
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // LECTURA DE DATOS
        nombre = document.getElementById("contacto-nombre").value.trim();
        correo = document.getElementById("contacto-correo").value.trim();
        asunto = document.getElementById("contacto-asunto").value.trim();
        tipo = document.getElementById("contacto-tipo").value;
        mensaje = document.getElementById("contacto-mensaje").value.trim();
        terminos = document.getElementById("contacto-terminos").checked;

        // VALIDACIÓN

        if (nombre === "") {
            resultado ="Ingrese su nombre completo.";

        }

        else if (!patronNombre.test(nombre)) {
            resultado ="El nombre solo debe contener letras.";

        }

        else if (correo === "") {
            resultado ="Ingrese su correo electrónico.";

        }

        else if (!patronCorreo.test(correo)) {
            resultado ="Ingrese un correo electrónico válido.";

        }

        else if (asunto === "") {
            resultado ="Ingrese el asunto del mensaje.";

        }

        else if (tipo === "") {
            resultado = "Seleccione el motivo de contacto.";

        }

        else if (mensaje === "") {
            resultado ="Ingrese un mensaje.";
        }

        else if (mensaje.length < 10) {
            resultado ="El mensaje debe tener al menos 10 caracteres.";
        }

        else if (!terminos) {
            resultado = "Debe aceptar los términos y condiciones.";
        }


        // MOSTRAR ERROR

        if (resultado !== "") {
            alert(resultado);
            return;

        }

        // GUARDAR REGISTRO

        const registroContacto = {
            nombre: nombre,
            correo: correo,
            asunto: asunto,
            tipo: tipo,
            mensaje: mensaje,
            fecha:new Date().toLocaleDateString("es-PE")
        };


        // Obtener registros existentes
        let registrosContacto =JSON.parse(localStorage.getItem("registrosContacto"));


        // Si todavía no existe el arreglo
        if (!registrosContacto) {
            registrosContacto = [];
        }


        // Agregar nuevo registro
        registrosContacto.push(registroContacto);

        // Guardar nuevamente
        localStorage.setItem("registrosContacto",JSON.stringify(registrosContacto));


        // DATOS CORRECTOS

        alert(
            "Mensaje registrado correctamente."
        );

        // BOTÓN

        const boton =
            document.querySelector( ".btn-enviar-contacto"
            );

        boton.disabled = true;

        boton.innerHTML = '<i class="fa-solid fa-spinner"></i> Enviando...';

        // TEMPORIZADOR

        setTimeout(function() {
            alert(
                "Tu mensaje ha sido enviado correctamente. " + "Nos pondremos en contacto contigo."
            );


            // Limpiar formulario
            formularioContacto.reset();

            // Restaurar botón
            boton.disabled = false;
            boton.innerHTML ='<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';}, 3000);
    });

}

// REPORTE DE CONTACTO

function cargarRegistrosContacto() {
    const cuerpo = document.getElementById("cuerpoContactos");
    if (!cuerpo) {
        return;
    }
    const registros = JSON.parse(localStorage.getItem("registrosContacto"));

    // No existen registros
    if (!registros || registros.length === 0) {
        const fila = document.createElement("tr");
        const celda =  document.createElement("td");
        celda.colSpan = 6;
        celda.textContent = "No existen registros de contacto.";
        fila.appendChild(celda);
        cuerpo.appendChild(fila);
        return;
    }

    // CREAR FILAS

    registros.forEach(function(registro) {
        const fila = document.createElement("tr");
        const nombre = document.createElement("td");
        const correo = document.createElement("td");
        const asunto = document.createElement("td");
        const tipo =  document.createElement("td");
        const mensaje = document.createElement("td");
        const fecha = document.createElement("td");

        // ASIGNAR DATOS

        nombre.textContent = registro.nombre;
        correo.textContent = registro.correo;
        asunto.textContent = registro.asunto;
        tipo.textContent = registro.tipo;
        mensaje.textContent = registro.mensaje;
        fecha.textContent = registro.fecha;

        // AGREGAR CELDAS

        fila.appendChild(nombre);
        fila.appendChild(correo);
        fila.appendChild(asunto);
        fila.appendChild(tipo);
        fila.appendChild(mensaje);
        fila.appendChild(fecha);
        cuerpo.appendChild(fila);

    });

}

// =========================================
// INICIALIZACIÓN
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {
        // Catálogo
        if (document.getElementById("catalogo")) {
            inicializarCatalogo();
        }

        // Página de compra
        if (
            document.getElementById("imagenProducto") ||
            document.getElementById("nombreProducto")
        ) {

            cargarCompra();
        }

        // Reporte de contacto
        if (
            document.getElementById("cuerpoContactos")
        ) {
            cargarRegistrosContacto();
        }

    }
);

// CARGAR VIDEOJUEGO EN LA PÁGINA DE COMPRA

function cargarJuegoCompra() {
    const datosJuego = localStorage.getItem("juegoCompra");
    if (!datosJuego) {
        alert("No se encontró el videojuego seleccionado.");
        return;
    }
    const juego = JSON.parse(datosJuego);

    // Imagen
    const imagen = document.getElementById("imagenProducto");
    if (imagen) {
        imagen.src = juego.imagen;
        imagen.alt = juego.nombre;
    }

    // Nombre
    const nombre = document.getElementById("nombreProducto");
    if (nombre) {
        nombre.textContent = juego.nombre;
    }

    // Plataforma
    const plataforma = document.getElementById("plataformaProducto");
    if (plataforma) {
        plataforma.textContent = juego.plataforma;
    }

    // Género
    const genero = document.getElementById("generoProducto");
    if (genero) {
        genero.textContent = juego.genero;
    }

    // Precio
    const precio = document.getElementById("precioProducto");
    if (precio) {
        precio.textContent = Number(juego.precio).toFixed(2);
    }

    // Resumen
    const resumen = document.getElementById("resumenProducto");
    if (resumen) {
        resumen.textContent = juego.nombre;
    }

    // Total inicial
    actualizarTotalCompra(juego);

    // =====================================================
    // CARGAR CUPÓN GUARDADO
    // =====================================================

    const cuponGuardado = localStorage.getItem("cuponCompra");
    if (cuponGuardado) {
        const cupon = JSON.parse(cuponGuardado);
        const input = document.getElementById("codigoCuponCompra");

        if (input) {
            input.value = cupon.codigo;
        }
        descuentoAplicado = cupon.descuento;
        codigoCuponAplicado = cupon.codigo;

        actualizarTotalCompra(juego);
    }
}

// COMPROBANTE DE COMPRA

function cargarComprobante() {
    const compraGuardada = localStorage.getItem("compraGameVerse");


    if (!compraGuardada) {
        console.warn(
            "No existen datos de compra."
        );
        return;
    }
    const compra = JSON.parse(compraGuardada);

    // DATOS DEL COMPROBANTE

    const numero = document.getElementById("numeroComprobante");

    const fecha = document.getElementById("fechaCompra");

    if (numero) {
        numero.textContent = compra.numero;
    }

    if (fecha) {
        fecha.textContent = compra.fecha;
    }

    // CLIENTE
    const cliente = document.getElementById("clienteCompra");
    const usuario = document.getElementById("usuarioCompra");


    if (cliente) {
        cliente.textContent = compra.cliente;

    }

    if (usuario) {
        usuario.textContent = compra.usuario;
    }

    // VIDEOJUEGO
    const imagen = document.getElementById("imagenComprobante");
    const nombre = document.getElementById("nombreComprobante");
    const plataforma = document.getElementById("plataformaComprobante");
    const genero = document.getElementById("generoComprobante");

    if (imagen) {
        imagen.src = compra.imagen;
        imagen.alt = compra.nombre;
    }

    if (nombre) {
        nombre.textContent = compra.nombre;
    }

    if (plataforma) {
        plataforma.textContent = compra.plataforma;
    }

    if (genero) {
        genero.textContent = compra.genero;
    }

    // PAGO
    const metodo = document.getElementById("metodoComprobante");
    const total = document.getElementById("totalComprobante");

    if (metodo) {
        metodo.textContent = compra.metodoPago;
    }

    if (total) {
        total.textContent = Number(compra.precio).toFixed(2);
    }

    // =====================================================
    // CUPÓN
    // =====================================================

    const cupon = document.getElementById( "cuponComprobante");
    const descuento =document.getElementById("descuentoComprobante");

    if (cupon) {
        cupon.textContent = compra.cupon || "Sin cupón";}

    if (descuento) {
        descuento.textContent = (compra.descuento || 0) + "%";
    }

}

// IMPRIMIR COMPROBANTE

function imprimirComprobante() {
    window.print();

}

// EJECUTAR AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", function() {
    // Página de compra
    if (document.getElementById("imagenProducto")) {
        cargarJuegoCompra();
    }

    // Página de comprobante
    if (document.getElementById("numeroComprobante")) {
        cargarComprobante();
    }
});

// CUPONES DE DESCUENTO

function validarCupon() {

    // Obtener código ingresado
    let codigo = document.getElementById("codigoCupon").value.trim().toUpperCase();

    let resultado = document.getElementById("resultadoCupon");

    // VALIDACIÓN

    if (codigo === "") {
        resultado.textContent ="Ingrese un código de cupón.";
        resultado.style.color = "#E11D48";
        return;
    }

    // CUPONES DISPONIBLES

    let descuento = 0;
    switch (codigo) {
        case "GAMEVERSE10":descuento = 10;break;
        case "GAMER20":descuento = 20;break;
        case "LEVELUP25":descuento = 25;break;
        default:descuento = 0;
    }

    // RESULTADO

    if (descuento > 0) {
        resultado.textContent = "¡Cupón válido! Has obtenido un " + descuento + "% de descuento.";
        resultado.style.color = "#38BDF8";
    } else {
        resultado.textContent = "El código ingresado no es válido.";
        resultado.style.color = "#E11D48";
    }
}

// CUPONES DE DESCUENTO

let descuentoAplicado = 0;
let codigoCuponAplicado = "";

// APLICAR CUPÓN EN LA PÁGINA DE COMPRA

function aplicarCuponCompra() {

    const input = document.getElementById("codigoCuponCompra");
    const resultado = document.getElementById("resultadoCuponCompra");
    const datosJuego = localStorage.getItem("juegoCompra");

    if (!datosJuego) {
        if (resultado) {
            resultado.textContent ="No se encontró el videojuego.";
            resultado.style.color = "#E11D48";
        }

        return;
    }
    const juego = JSON.parse(datosJuego);
    if (!input) {
        return;
    }

    // Obtener código
    const codigo = input.value.trim().toUpperCase();
    // Validar campo vacío
    if (codigo === "") {
        if (resultado) {
            resultado.textContent ="Ingrese un código de cupón.";resultado.style.color = "#E11D48";
        }

        return;
    }

    // VALIDAR CUPÓN

    let porcentaje = 0;
    switch (codigo) {
        case "GAMEVERSE10":porcentaje = 10;break;
        case "GAMER20":porcentaje = 20;break;
        case "LEVELUP25": porcentaje = 25; break;
        default:  porcentaje = 0;
    }

    // CUPÓN INVÁLIDO

    if (porcentaje === 0) {
        descuentoAplicado = 0;
        codigoCuponAplicado = "";
        localStorage.removeItem("cuponCompra");
        if (resultado) {
            resultado.textContent ="El código ingresado no es válido.";
            resultado.style.color = "#E11D48";
        }
        actualizarTotalCompra(juego);
        return;
    }

    // CUPÓN VÁLIDO

    descuentoAplicado = porcentaje;
    codigoCuponAplicado = codigo;

    if (resultado) {
        resultado.textContent ="¡Cupón válido! Se aplicó un " +porcentaje +"% de descuento.";
        resultado.style.color = "#38BDF8";
    }

    // Guardar cupón
    localStorage.setItem("cuponCompra",
        JSON.stringify({codigo: codigo,descuento: porcentaje})
    );

    // Actualizar precio
    actualizarTotalCompra(juego);
}

// VALIDAR CUPÓN - PÁGINA OFERTAS

function validarCupon() {

    // Obtener código ingresado
    const input = document.getElementById("codigoCupon");
    const resultado = document.getElementById("resultadoCupon");

    if (!input || !resultado) {
        return;
    }

    let codigo = input.value.trim().toUpperCase();

    // VALIDAR CAMPO VACÍO

    if (codigo === "") {
        resultado.textContent = "Ingrese un código de cupón.";
        resultado.style.color = "#E11D48";
        return;
    }

    // CUPONES DISPONIBLES

    let descuento = 0;

    switch (codigo) {
        case "GAMEVERSE10": descuento = 10; break;
        case "GAMER20": descuento = 20; break;
        case "LEVELUP25": descuento = 25; break;
        default:  descuento = 0;
    }

    // CUPÓN VÁLIDO

    if (descuento > 0) {

        resultado.textContent = "¡Cupón válido! Has obtenido un " +descuento +
            "% de descuento.";
        resultado.style.color = "#38BDF8";

    }

    // CUPÓN INVÁLIDO

    else {
        resultado.textContent = "El código ingresado no es válido.";
        resultado.style.color = "#E11D48";
    }
}

//Por si se quiere borrar nuevamente el login
/*localStorage.removeItem("usuarioSesion");*/