
/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
export const numRandom = () => {
    console.log(Math.random() * (600 - 501) + 501)
}
// numRandom()

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
export const numberCapicua = (number) => {

    if (isNaN(number) || !number) {
        return console.warn('EL dato ingresado no es un numero o esta vacio')
    } else {
        const numberConver = number.toString().split('').reverse().join('')
        numberConver == number ? console.log(true) : console.log(false)
    }
}
// numberCapicua(101)

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 12*/

export const numbFact = (number) => {
    let fact = 1
    if (Math.sign(number) === -1 || number == 0 || isNaN(number)) {
        console.warn('El dato tiene que ser un numero y no puede ser 0 o negativo')
    } else {
        do {
            fact = fact * number
            number--
        } while (number > 0);
        console.log(`El factorial es ${fact} `)
    }
}
// numbFact('4')

