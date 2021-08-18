window.addEventListener("load", () => {
	const inputText = document.getElementById("input-text");
    const pText = document.getElementById("p-text");
    const BotonError = document.getElementById("boton.error");
    const BotonWarning = document.getElementById("boton.warning");
    const BotonSucces = document.getElementById("boton.succes");
    const BotonDefault = document.getElementById("boton.default");
    
    inputText.addEventListener("keyup", (ev) => {
	pText.innerText = ev.target.value;
    });

    BotonError.addEventListener("click", () => {
        pText.className = "error"
    });
    BotonWarning.addEventListener("click", () => {
        pText.className = "warning"
    });
    BotonSucces.addEventListener("click", () => {
        pText.className = "succes"
    });
    BotonDefault.addEventListener("click", () => {
        pText.className = "default"
    });

});