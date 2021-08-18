const imprimir = (mensaje) => {
    console.log(mensaje);
};

const realizarAccion = (mensaje, callback) => {
    callback(mensaje);
};

realizarAccion("Hola Callback", imprimir);
