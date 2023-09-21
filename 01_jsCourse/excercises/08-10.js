/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

export const sortAsenDes = (numbers) => {
    const formAscend = numbers.map((x) => x).sort((a, b) => a - b)
    const formDescend = numbers.map((x) => x).sort((a, b) => b - a)

    const objAsDes = {
        ascendentes: formAscend,
        descendientes: formDescend
    }
    console.log(objAsDes)
}
// sortAsenDes([7, 5, 7, 8, 6])



/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
export const duplicados = (data) => {
    const dataNew = []
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        // console.log(data.indexOf(element), index)
        if (data.indexOf(element) === index) dataNew.push(element)

    }
    console.log(dataNew)
}
// duplicados(["hola", "x", 10, "x", 2, "10", 10, true, true])



/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
export const average = (numbers) => {
    let amount = 0
    numbers.forEach(element => {
        amount = amount + element
    });
    console.log(amount / numbers.length)
}
// average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])