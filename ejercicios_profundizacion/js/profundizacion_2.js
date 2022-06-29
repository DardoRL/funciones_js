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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
"use strict";

let cantInvitados;
let invitados;
let invitado1;
let invitado2;
let invitado3
function generarInvitados(){
    cantInvitados = prompt('Ingrese la cantidad de invitados:');
    if (cantInvitados==1){
        invitado1 = prompt('Ingrese el nombre del invitado:');
        invitados = `${invitado1}`;
    }
    else if (cantInvitados==2){
        invitado1 = prompt('Ingrese el nombre del primer invitado:');
        invitado2 = prompt('Ingrese el nombre del segundo invitado:');
        invitados = `${invitado1} y ${invitado2}`;
    }
    else if (cantInvitados==3) {
        invitado1 = prompt('Ingrese el nombre del primer invitado:');
        invitado2 = prompt('Ingrese el nombre del segundo invitado:');
        invitado3 = prompt('Ingrese el nombre del tercer invitado:');
        invitados = `${invitado1}, ${invitado2} y ${invitado3}`;
    }  
    return invitados;
    }

// Definir y crear la función antes de esta llamada
invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)