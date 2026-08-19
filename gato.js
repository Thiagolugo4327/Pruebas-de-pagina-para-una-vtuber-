function mostrarBanderas() {

    for (let i = 0; i < 15; i++) {

        const bandera = document.createElement("div");

        bandera.classList.add("bandera-trans");
        bandera.textContent = "🏳️‍⚧️";

        bandera.style.left = Math.random() * 100 + "vw";
        bandera.style.animationDuration = (3 + Math.random() * 3) + "s";
        bandera.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(bandera);

        setTimeout(() => {
            bandera.remove();
        }, 6000);
    }
}