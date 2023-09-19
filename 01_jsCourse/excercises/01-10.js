/*--1  Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

export function numCaracteres2(word) {
    // opcion validando si hay texto o no
    word == "" ? console.warn('no hay cadena') : console.log(word.length);
    console.log(word.length);
}

// convirtiendo a array con return implicito
export const numCaracteres = (word) => console.log(word.length);

// numCaracteres('fany  hey!')



/*-2 Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/
export function recortWord(word, long) {
    word == ""
        ? console.warn('no hay cadena')
        : console.log(word.slice(0, long));
}
export const recortWord2 = (word, long) =>
    word == ""
        ? console.warn('no hay cadena')
        : console.log(word.slice(0, long));

// recortWord('fany', 2)



/*--3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/
export function returnArray(word) {
    word == ""
        ? console.warn('no hay cadena')
        : console.log(word.split(' '));
}
// returnArray('hola como estas')



/*-- 4 Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/
export function repitWord(word, repit) {

    if (repit === 0) return console.error("EL numero de veces no puede ser 0");
    if (Math.sign(repit) === -1) return console.error("EL numero de veces no puede negativo");

    // let contador = 1
    // let newWord = word
    // if (word == "") {
    //     console.warn('no hay cadena')
    // } else {
    //     while (contador !== repit) {
    //         contador++
    //         newWord = newWord + " " + word
    //     }
    // }
    // return console.log(newWord);

    //usando metodo repeat
    return console.log(word.repeat(repit))
}
// repitWord('hola 1 ',3)




