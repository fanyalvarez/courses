/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
export const numberBD = (number, type) => {
    let sum = 0
    let index = number.toString().split('').length
    let residuo = []

    if (isNaN(number) || number == '' || Math.sign(number) === -1 || number === 0) console.warn(`El dato requerido debe ser un numero, postivo y diferente a 0`)
    if (type === '' || typeof (type) != 'string' || type.toLowerCase() !== 'binaria') console.warn(`Escriba a que base desea convertir 'binaria' o 'decimal'`)

    if (type.toLowerCase() === 'binaria') {
        while (number > 0) {
            residuo.push(number % 2)
            number = Math.floor(number - number / 2)
        }
        residuo = residuo.reverse().join('')

        console.log(`${residuo} base ${type}`)
    }

    if (type.toLowerCase() === 'decimal') {
        number.toString().split('').forEach(element => {
            index--
            if (element == 1) {
                sum = sum + Math.pow(2, [index])
            }
        });
        console.log(`${sum} base ${type}`)
    }
}
    // numberBD('10', 'binaria')

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800*/
export const numberDiscount = (number, discount) => {
    if (isNaN(discount) || discount > 100) {
        console.log('Colocar el descuento, este debe ser menor al 100%')
    } else if (isNaN(number) || number === '') {
        console.log('Colocar un monto')
    } else {
        console.log(number - (number * discount / 100))
    }
    // if (isNaN(discount) || discount > 100) console.log('Colocar el monto, este debe ser menor al 100%')
    // if (isNaN(number)) console.log('Colocar un monto')

    // if (!isNaN(number) && !isNaN(discount) && discount <= 100) {
    //     console.log(number - (number * discount / 100))
    // }
}
    // numberDiscount(100, 20)

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
export const dateCalc = (year, month, day) => {
    if (year.toString().split('').length != 4) {
        console.log(`coloque el anio con 4 digitos`)
    } else if (!(month > 0 && month <= 12)) {
        console.log('Coloque el mes con digito entre el 1 y 12')
    } else if (!(day > 0 && day <= 31)) {
        console.log('Coloque el dia con digito entre el 1 y 31')
    } else {
        let diferenc = (new Date().getTime() - new Date(year, month - 1, day).getTime())
        let converYears = Math.floor(diferenc / 31556952000)
        return console.log(converYears)
    }
}
    // dateCalc(1991, 11, 1)
// if (year.toString().split('').length != 4) console.log(`coloque el anio con 4 digitos`)
// if (!(month > 0 && month <= 12)) console.log('Coloque el mes con digito entre el 1 y 12')
// if (!(day > 0 && day <= 31)) console.log('Coloque el dia con digito entre el 1 y 31')
// if (year.toString().split('').length === 4 && (month > 0 && month <= 12)) {
//     let calc = (new Date().getTime() - new Date(year, month - 1, day).getTime())
//     let converYears = Math.floor(calc / 31556952000)
//     return console.log(converYears)
// }


