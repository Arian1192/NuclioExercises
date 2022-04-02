// Crea una variable con el texto.

const quijote = "En un lugar de la Mancha, de cuyo nombre no quierdo acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";

// Haz que se muestre en consola el número de caracteres que tiene la variable quijote.
console.log(quijote.length);

// Muestra en consola la posición en la que comienza la palabra "astillero".
console.log(quijote.indexOf("astillero"));

// Muestra en consola todo el texto en mayusculas
console.log(quijote.toUpperCase());

/**
 * Pide por consola cambiar la ciudad de "la mancha".
 */

// const ciudad = prompt("¿De qué ciudad nació el quijote?");
// console.log(quijote.replace("la Mancha", ciudad));

// Substituye la palabra "hidalgo" por "elfo del bosque".
console.log(quijote.replace("hidalgo", "elfo del bosque"));

// Divide el texto por la mitad y muestra la primera mitad por consola.
console.log(quijote.slice(0, quijote.length / 2));


// Muestra por consola todo el texto en minusculas.
console.log(quijote.toLowerCase());




