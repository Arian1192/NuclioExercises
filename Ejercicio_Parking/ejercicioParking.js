let plazaPequeña = 10;
let plazaGrande = 14;

// let arrayPlazasPequeñas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arrayPlazasPequeñas = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// let arrayPlazasGrandes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let arrayPlazasGrandes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


let cochePequeño = "coche pequeño";
let cocheGrande = "coche grande";
let counter = 0;
let counter2 = 0;



// Función Aparcar
const carPark = (tipoDeCoche) => {
    if (tipoDeCoche == cochePequeño && counter < 10) {
        let indiceArrayPequeño = Math.floor((Math.random() * 9 + 1));
        if (arrayPlazasPequeñas[indiceArrayPequeño] == 0) {
            arrayPlazasPequeñas[indiceArrayPequeño] = 1;
            console.log(`El ${cochePequeño} está en la plaza ${indiceArrayPequeño + 1} del parking para coches pequeños`);
            console.log(arrayPlazasPequeñas);
            counter += 1;
            return;


        } else if (arrayPlazasPequeñas[indiceArrayPequeño] == 1) {
            counter += 1;
            if (counter == 10) {
                let indiceArrayGrande = Math.floor((Math.random() * 13 + 1));
                if (arrayPlazasGrandes[indiceArrayGrande] == 0) {
                    arrayPlazasGrandes[indiceArrayGrande] = 1;
                    console.log(`El ${cocheGrande} está en la plaza ${indiceArrayGrande + 1} del parking para coches grandes`);
                    console.log("Coche aparcado")
                    console.log(arrayPlazasGrandes);
                    counter += 1;
                    return;
                } else if (arrayPlazasGrandes[indiceArrayGrande] == 1) {
                    while (arrayPlazasGrandes[indiceArrayGrande] != 0) {
                        counter2 += 1;
                        if (counter2 === 14) {
                            console.log("No hay sitio para tu coche");
                            return;
                        }
                    }
                }
            }
            carPark(tipoDeCoche)
            return;
        }
    } else if (tipoDeCoche == cocheGrande && counter2 < 14) {
        let indiceArrayGrande = Math.floor((Math.random() * 13 + 1));
        if (arrayPlazasGrandes[indiceArrayGrande] == 0) {
            arrayPlazasGrandes[indiceArrayGrande] = 1;
            console.log(`El ${cocheGrande} está en la plaza ${indiceArrayGrande} del parking para coches grandes`);
            console.log("Coche aparcado")
            console.log(arrayPlazasGrandes);
            counter2 += 1;
            return;
        } else if (arrayPlazasGrandes[indiceArrayGrande] == 1) {
            while (arrayPlazasGrandes[indiceArrayGrande] != 0) {
                counter2 += 1;
                if (counter2 == 14) {
                    console.log("No hay sitio para tu coche");
                    return;
                }
            }
        }
        carPark(tipoDeCoche)
        return;
    }
}

// Funcion Desaparcar
const carUnpark = (tipoDeCoche, indice) => {
    if (tipoDeCoche == cochePequeño && arrayPlazasGrandes[indice] == 1 || arrayPlazasPequeñas[indice] == 1) {
        arrayPlazasPequeñas[indice] = 0;
        console.log(`El ${cochePequeño} ha salido del parking de la plaza ${indice + 1}`);
        console.log("Coche retirado. Gracias por usar el parking");
        console.log(arrayPlazasPequeñas);

        return;
    } else if (tipoDeCoche == cocheGrande && arrayPlazasGrandes[indice] == 1) {
        arrayPlazasGrandes[indice] = 0;
        console.log(`El ${cocheGrande} ha salido del parking de la plaza ${indice + 1}`);
        console.log("Coche retirado. Gracias por usar el parking");
        console.log(arrayPlazasGrandes);
        return;
    } else {
        console.log("Esa plaza no existe o no hay coche en ella");
    }


}

// Comprobar el estado del Parking ( falta hacerlo mas elegante )
const showParkingStatus = () => {
    console.log(arrayPlazasGrandes);
    console.log(arrayPlazasPequeñas);
}


// carPark(cochePequeño);
// carPark(cochePequeño);
// carPark(cochePequeño);
// carPark(cochePequeño);
carPark(cochePequeño);
carUnpark(cochePequeño, 2);

// showParkingStatus();



// crear clase concepto coche 

