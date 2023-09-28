const saludar = () => {
    console.log('hola')
}


const saludar1 = () => console.log('hola')

const saludar2 = (nombre) => console.log(`hola soy ${nombre}`)
// const saludar2 = nombre => console.log(`hola soy ${nombre}`)  //in parametro
saludar2('Irma')

const sumar = function (a, b) {
    return a + b
}

const sumar1 = (a, b) => a + b   // cambia con la arrow


console.log(sumar(8, 9))
console.log(sumar1(8, 9))

const funcionDeVariasLineas = () => {
    console.log('uno')
    console.log('dos')
    console.log('tres')
}
funcionDeVariasLineas()

const numeros = [1, 2, 3, 4, 5]
numeros.forEach(
    function (ele, index) {
        console.log(`el elemento ${ele} esta en la posicion ${index}`)
    })

numeros.forEach((ele, index) => console.log(`el elemento ${ele} esta en la posicion ${index}`))


// function perro() {
//     console.log(this)
// }
// perro()

const perro = {
    nombre: 'kenai',
    ladrar: () => {
        console.log(this)
    },
    ladrar2() { console.log(this) }
}


perro.ladrar()   //no es conveniente   ignora el contexto del objeto y se va a donde se encuentra
perro.ladrar2()  
