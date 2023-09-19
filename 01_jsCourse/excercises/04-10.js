/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

export const numbPrimo = (number) => {

    let divisible = false

    if (isNaN(number) || !number || Math.sign(number) === -1 || number === 0) console.warn('El dato requerido debe ser un numero, postivo y diferente a 0 y 1')
    if (number == 4) divisible = false

    for (let x = 2; x < number; x++) {
        if (number % x == 0) divisible = true
    }
    return divisible ? console.log('no es primo') : console.log('es primo')

}
// numbPrimo(4)


/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
export const numbParImp = (number) => {
    if (isNaN(number) || !number) {
        console.warn('El dato requerido esta vacio o no es un numero')
    } else {
        number % 2 === 0 ? console.log(true) : console.log(false)
    }
}
// numbParImp(7)


/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

export const converTemp = (number, temp) => {

    if (isNaN(number) || !number) console.warn('El dato requerido esta vacio o no es un numero')
    if (!temp) console.warn('Debe colocar "F" si los grados son Fahrenheit o "C" si son Celsius')

    temp.toLowerCase() === 'f'
        ? console.log(((number - 32) * 5 / 9).toFixed(2) + ' °C')
        : console.log(((number * 9 / 5) + 32).toFixed(2) + ' °F')
}
// converTemp(100, 'f')