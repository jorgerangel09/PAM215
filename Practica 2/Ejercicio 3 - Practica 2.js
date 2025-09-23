const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28},
];
const personanombreluis = personas.find(persona => persona.nombre == "Luis");
console.log(personanombreluis);
const personaEdad = personas.forEach(persona => {
    console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad);
});
const sumaedades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma de edades es: " + sumaedades);