const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const iva = x => x*0.21;

let pelotaMolten = 6000;
let descuento = 2000;

let producto = prompt("Ingrese un producto");
let precioFinal = resta (suma(pelotaMolten, iva(pelotaMolten)), descuento)
let mensaje = `El precio final es ${precioFinal}`;

alert(mensaje);