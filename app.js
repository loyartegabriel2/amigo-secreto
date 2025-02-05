// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.agregarAmigo = function () {
        const nombre = input.value.trim();
        if (nombre) {
            amigos.push(nombre);
            const li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
            input.value = "";
        }
    };

    window.sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("Agrega al menos un nombre para realizar el sorteo.");
            return;
        }
        const ganador = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>El ganador es: <strong>${ganador}</strong></li>`;
    };
});