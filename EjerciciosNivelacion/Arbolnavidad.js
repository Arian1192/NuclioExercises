// Crea un arbol de navidad
const Arbolnavidad = (filasArbol) => {
    // El primer for recorre las filas del arbol de arriba abajo
    for (let i = filasArbol; i > 0; i--) {
        let contenidoFila = '';
        // Este for coloca un espacio en blanco hasta que el valor de la variable j 
        // Sea igual que el valor de la variable i, que sera el valor de las filas
        for (let j = 0; j <= i; j++) {
            contenidoFila += " ";
        }
        // Este for coloca un asterisco y le resta 1 al valor x por lo que se igual a la variable filas arbol
        // Cuando eso pasa sale del bucle y imprime el arbol.
        for (let x = (filasArbol + 1); x > i; x--) {
            contenidoFila += " *";
        }
        console.log(contenidoFila);
    }
}


Arbolnavidad(5);


// let lines = 10;

// for (let i = 0; i <= lines; i++) {
//     let contenido = '';
//     for (let x = i; x < lines; x++) {
//         contenido += ' ';
//     }
//     for (let j = 0; j < i; j++) {
//         contenido += ' *';
//     }

//     console.log(contenido);
// }

// Crea un arbol de 10 lineas con asteriscos.
// let lines = 10;
// for (let i = 0; i <= lines; i++) {
//     let contenido = '';
//     for (let x = i; x < lines; x++) {
//         contenido += ' ';
//     }
//     for (let j = 0; j < (2 * i) - 1; j++) {
//         contenido += '*';
//     }
//     console.log(contenido);
// }