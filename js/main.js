let nombre = prompt("Ingrese su nombre:");
let edadTexto = prompt("Ingrese su edad:");
let numeroFavoritoTexto = prompt("Ingrese su numero favorito:");


let edad = parseInt(edadTexto);
let numeroFavorito = parseFloat(numeroFavoritoTexto); 


let suma = edad + numeroFavorito;
let multiplicacion = edad * numeroFavorito;


let mensajeBienvenida = "Hola " + nombre + ", bienvenido a mi primer script.";
let mensajeResultado = "La suma de tu edad (" + edad + ") y tu numero favorito (" + numeroFavorito + ") es: " + suma;
let mensajeMultiplicacion = "Y si los multiplicamos, el resultado es: " + multiplicacion;


alert(mensajeBienvenida);
alert(mensajeResultado);

console.log(mensajeBienvenida);
console.log(mensajeResultado);
console.log(mensajeMultiplicacion);
