/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
"use strict";
function promedio(numero1, numero2, numero3, numero4, numero5) {
    console.log("Funcion promedio");
    let promedio = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
    console.log (`Los numeros ingresados fueron: ${numero1}, ${numero2} , ${numero3} , ${numero4} y ${numero5}`);
    alert(`Los numeros ingresados fueron: ${numero1}, ${numero2}, ${numero3}, ${numero4} y ${numero5} `)
    console.log ("El promedio de los 5 numeros ingresados es: " + promedio);
    alert(`El promedio de los 5 numeros ingresados es: ${promedio}`)
    
}

promedio(10, 5, 3, 8, 21);
