// Crea una variable con una cesta de la compra que contenga almenos 5 elementos .

const Productos = ["Leche", "Huevos", "Pan", "Arroz", "Aceite"];

// Utilizando un bucle muestra por pantalla un mensaje por cada elemento de la cesta.
Productos.forEach(element => console.log(`La cesta de la compra contiene: ${element}`));

// Utilizando bucles, muestra por consola un medio arbol de navidad con la siguiente forma.
// let filasArbol = 10;
// for (i = 0; i < filasArbol; i++) {
//     let contenidoFila = '';
//     for (j = 0; j <= i; j++) {
//         contenidoFila += "*";
//     }
//     console.log(contenidoFila);
// }

// lo hago una funcion para que se pueda pedir el numero de filas

const filasArbol = (filasArbol) => {
    for (i = 0; i < filasArbol; i++) {
        let contenidoFila = '';
        for (j = 0; j <= i; j++) {
            contenidoFila += "* ";
        }
        console.log(contenidoFila);
    }
}
filasArbol(5);

// Utilizando bucles, muestra por consola un medio arbol de navidad con la siguiente forma.
// let filasArbol = prompt("Cuantas filas quieres en el arbol? ");
// for (i = 0; i < filasArbol; i++) {
//     let contenidoFila = '';
//     for (j = 0; j <= i; j++) {
//         contenidoFila += "*";
//     }
//     console.log(contenidoFila);
// }

// el reto final esta en el archivo ArbolNavidad.js


