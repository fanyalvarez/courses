/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
export const funcElev = (numbers) => {
    let newNumbers = []
    !isNaN(numbers) === true
        ? console.log('Inserta varios numeros diferentes')
        : numbers.forEach(element => {
            newNumbers.push((Math.pow(element, 2)))
        });
    console.log(newNumbers)
}
funcElev([1, 4, 5])


/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
export const minMax = (numbers) => {
    const min = Math.min(...numbers)
    const max = Math.max(...numbers)
    !isNaN(numbers) === true
        ? console.log(console.log('Inserta varios numeros diferentes'))
        : console.log([min, max])
}
minMax([1, 4, 5, 99, -60])


/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
export const objectParImpar = (numbers) => {
    // let par =numbers.filter((element) => element % 2 === 0)
    // let impar =numbers.filter((element) => element % 2 === 1)

    const objParImpar = {
        pares: numbers.filter((element) => element % 2 === 0),
        impares: numbers.filter((element) => element % 2 === 1),
    }
    console.log(objParImpar)
}
objectParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])