"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

// En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola

function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor");
    
    if (numero1>numero2){
        console.log ("El mayor numero es :" + numero1);
    }
    else{
        console.log ("El mayor numero es :" + numero2);
    }
}
imprimirMayor(2, 10);