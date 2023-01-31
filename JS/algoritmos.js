

let demo = document.getElementById("demo");

let otrosDatos = document.getElementById("otrosDatos");



otrosDatos.addEventListener("click", ocultarText)

function ocultarText() {
    demo.classList.toggle("showText");
}
