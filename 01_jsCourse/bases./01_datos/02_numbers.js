
let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b);
console.log(c.toFixed(1));                  // 7.2 determina cuantos decimales tendra
console.log(c.toFixed(5));                  // 7.19000
console.log(parseInt(c));                   // 7 solo el entero
console.log(parseFloat(c));                 // 7.19 te da los decimales
console.log(typeof c, typeof d);            // number, string  --- muestra tipo de dato es 
console.log(a + b);                         // 3  suma, ambos son numeros
console.log(c + d);                         // 7.195.6 concatena los dos datos
console.log(c + parseInt(d));               // 12.1900000001  el d lo convierte a numero
console.log(c + parseFloat(d));             // 12.79  el d toma los decimales
console.log(c + Number.parseInt(d));        // 
console.log(c + Number.parseFloat(d));      // 
console.log(Math.acosh(3));                 // 1.7627471740390859
console.log(Math.asinh(2));                 // 1.4436354751788103
console.log(Math.atanh(1));                 // Infinity
console.log(Math.cbrt(4));                  // 1.5874010519681996
console.log(Math.clz32(5));                 // 29
console.log(Math.cosh(7));                  // 548.317035155212
console.log(Math.expm1(8));                 // 2979.9579870417283
console.log(Math.fround(9.56789));          // 9.567890167236328
console.log(Math.hypot(11, 23));            // 25.495097567963924
console.log(Math.imul(13, 3));              // 39
console.log(Math.log10(54));                // 1.7323937598229686
console.log(Math.log1p(34));                // 3.5553480614894135
console.log(Math.log2(100));                // 6.643856189774724
console.log(Math.sign(46));                 // 1
console.log(Math.sinh(22));                 // 1792456423.065796
console.log(Math.tanh(19));                 // 0.9999999999999999
console.log(Math.trunc(40.56));             // 40

