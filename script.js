
// MENU PARA CELULARES

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// CERRAR MENU AL SELECCIONAR UNA OPCION

const enlaces = document.querySelectorAll(".nav-links a");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// TEXTO AUTOMATICO

const palabras = [
    "Desarrollador web.",
    "Creativo digital.",
    "Apasionado por la tecnología.",
    "Futuro ingeniero de software."
];

let palabraActual = 0;
let letraActual = 0;
let borrando = false;

const typing = document.getElementById("typing");

function escribirTexto() {

    const palabra = palabras[palabraActual];

    if (borrando) {

        typing.textContent = palabra.substring(0, letraActual - 1);
        letraActual--;

    } else {

        typing.textContent = palabra.substring(0, letraActual + 1);
        letraActual++;

    }

    let velocidad = borrando ? 45 : 90;

    if (!borrando && letraActual === palabra.length) {

        borrando = true;
        velocidad = 1500;

    } else if (borrando && letraActual === 0) {

        borrando = false;
        palabraActual++;

        if (palabraActual >= palabras.length) {
            palabraActual = 0;
        }

        velocidad = 400;

    }

    setTimeout(escribirTexto, velocidad);

}

escribirTexto();


// AÑO AUTOMATICO DEL FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();


// ICONOS

if (window.lucide) {
    lucide.createIcons();
}
