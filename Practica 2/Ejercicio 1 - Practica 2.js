const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais:"MX"
    }
};
const {nombre, edad, direccion} = persona;
console.log("Me llamo " + nombre +", tengo " + edad+" años y vivo en " + direccion.ciudad);