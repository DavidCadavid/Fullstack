const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const Inptarea = document.getElementById("input-tarea");
    const parent = document.querySelector("ul");
    const newElem = document.createElement("li");
    newElem.innerText = Inptarea.value;
    parent.appendChild(newElem);
    Inptarea.value = "";
});