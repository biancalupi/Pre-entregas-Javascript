
const ANIO_ACTUAL = 2026;

const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const anioNacimientoIngresado = prompt("¿En que año naciste?");
const precioProductoIngresado = prompt("Ingresa el precio de un producto ($):");

let anioNacimiento = Number(anioNacimientoIngresado);
let precioProducto = Number(precioProductoIngresado);

let edad = ANIO_ACTUAL - anioNacimiento;
let precioConIVA = precioProducto * 1.21;

let mensajeFinal = `Hola ${nombreUsuario}.\nTienes aproximadamente ${edad} años.\nEl precio de tu producto con IVA es: $${precioConIVA.toFixed(2)}`;

alert(mensajeFinal);

console.log("--Resultados del programa--");
console.log(mensajeFinal);
