document.addEventListener("DOMContentLoaded", function () {
    // Mostrar mensaje al hacer clic en el botón
    document.getElementById("btnMensaje").addEventListener("click", function () {
        document.getElementById("mensaje").style.display = "block";
    });

    // Mostrar mensaje bonito al aceptar ser San Valentín
    document.getElementById("btnSi").addEventListener("click", function () {
        document.getElementById("sanValentin").innerHTML = `
            <h2 class="texto-bonito">¡SABIA QUE DIRÍA QUE SI MI AMOR! 💖</h2>
            <p class="mensaje">JAJAJAJ Mañana nos vemos ¡Feliz San Valentín, mi amor, me encantas! 😘</p>
            <img src="snoopy.gif" alt="Snoopy con corazones" class="imagen-sanvalentin">
        `;
    });
});

