document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("continuarBtn").addEventListener("click", function () {
        document.getElementById("portada").style.display = "none";
        document.getElementById("tarjetas").style.display = "flex";
    });
});

// Función para mostrar/ocultar la descripción de las tarjetas
function mostrarDescripcion(elemento) {
    const descripcion = elemento.querySelector(".descripcion");
    descripcion.style.display = descripcion.style.display === "block" ? "none" : "block";
}
