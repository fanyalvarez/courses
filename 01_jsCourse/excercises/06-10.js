
/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
export const wordVocal = (word) => {
    const vowels = /[a,e,i,o,u]/ig
    const consonants = /[(B,C,D,F,G,H,J,K,L,M,N,Ñ,P,Q,R,S,T,V,W,X,Y,Z)]/ig
    const matchVowels = word.match(vowels).length
    const matchConsonants = word.match(consonants).length
    word === ''
        ? console.warn('Ingresa un texto')
        : console.log(`El texto cuenta con ${matchConsonants} consonantes y ${matchVowels} vocales`)
}
//wordVocal("Hola Mundo")


/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
export const validacion = (word) => {
    console.log(isNaN(word))
}
//validacion("Jonathan MirCha")


/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
export const validEmail = (word) => {
    const contentCom = /.com$/ig.test(word)
    const contentAt = word.match(/@/ig).length

    if (word == '') {
        console.log('Ingresa tu correo')
    } else {
        contentAt === 1 && contentCom === true
            ? console.log('true')
            : console.log('fasle')
    }
}
//validEmail("jonmircha@gmail.com")