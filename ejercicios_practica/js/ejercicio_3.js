"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada
function generarInvitados(){
let invitado1 = prompt('Ingrese el nombre del primer invitado:');
let invitado2 = prompt('Ingrese el nombre del segundo invitado:');
let invitado3 = prompt('Ingrese el nombre del tercer invitado:');
console.log(`Los nombres de los invitados son: ${invitado1}, ${invitado2} y ${invitado3}`);
}
generarInvitados();