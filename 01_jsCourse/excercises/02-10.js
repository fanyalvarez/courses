/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
export const wordInvert = (word) => {
    word === ''
    ? console.warn('No haz ingresado el texto')
    : console.log(word.split('').reverse().join(''));
}
// wordInvert('Hola Mundo')



/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
export const wordRepit = (text, word) => {
    if (!text) return console.warn('No haz ingresado el texto')
    if (word === '') return console.warn('No haz ingresado la palabra a buscar')

    let contador = ""
    text.split(' ').forEach(element => {
        element === word ? contador++ : false;
    });
    return console.log(contador)
}
// wordRepit("hola mundo adios mundo", "mundo")



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
export const wordPolindro = (word) => {
    if (word === '') return console.warn('No haz ingresado el texto')
    let wordRevers = word.toLowerCase().split(' ').join('').split('').reverse().join('')
    let wordCompare = word.toLowerCase().split(' ').join('').split('').join('')

    wordRevers === wordCompare
        ? console.log(true)
        : console.log(false)
}
// wordPolindro('A luna ese anula')

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

export const wordsReplace = (text, word) => {
    let newArray = []
    text.split(',').forEach(element => {
        newArray.push(element.replaceAll(word, ''))
    })
    return console.log(newArray.join(''))
}
// wordsReplace("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


const eliminarCaracter = (text, word) => {
    !text || !word
        ? console.warn("La informacion del texto o la palabra esta vacio")
        : console.log(text.replace(new RegExp(word, "ig"), ''))
}
// eliminarCaracter('xyz1, xyz2, xyz3, xyz4 y xyz5', "xyz")