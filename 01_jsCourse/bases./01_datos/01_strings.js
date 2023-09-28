
let nombre = "fany";
let apellido = 'alvarez';
let saludo = new String("Hola Mundo");
let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

console.log(nombre, apellido, saludo);
console.log(
    nombre.length,
    apellido.length,
    saludo.length,
    nombre.toUpperCase(),       //covertir a mayusculas
    apellido.toLowerCase(),     //covertir a minusculas
    lorem.includes("amet"),     //saber si incluye la palabra
    lorem.trim(),               //imprime el lorem sin espacios al principio y final
    lorem.split(" "),           //imprime el lorem separado por espacios
    lorem.split(","),           //imprime el lorem separado por comas
    nombre.startsWith('jo'),    //Imprime false
    nombre.endsWith('an'),      //Imprime true
    nombre.includes('th'),      //Imprime true
    nombre.repeat(3),
)
