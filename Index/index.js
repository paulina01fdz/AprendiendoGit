let modal = document.getElementById("ModalIniciarSesion");
let iniciarSesion = document.getElementById("iniciarSesion");

let span = document.getElementsByClassName("cerrar")[0];

iniciarSesion.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function paginaSesion() {
    console.log("hola");

    let usuario = document.getElementById("inputUsuario").value;
    let contrasena = document.getElementById("inputContrasena").value;

    if (usuario == "Hola" && contrasena == "123H") {
        window.open("http://127.0.0.1:5500/ejercicios/registro.html", "_blank");
    } else {
        alert("Usuario incorrecto");
        }
}
