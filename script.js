
const sumaInput1 = document.getElementById('suma-input1');
const restaInput1 = document.getElementById('resta-input1');
const multiplicacionInput1 = document.getElementById('multiplicacion-input1');
const divisionInput1 = document.getElementById('division-input1');

function verificarRespuestas() {
    const sumaCorrecta = 345 + 198;
    const restaCorrecta = 567 - 289;
    const multiplicacionCorrecta = 25 * 4;
    const divisionCorrecta = 72 / 8;

    if (parseInt(sumaInput1.value) === sumaCorrecta && 
        parseInt(restaInput1.value) === restaCorrecta && 
        parseInt(multiplicacionInput1.value) === multiplicacionCorrecta && 
        parseInt(divisionInput1.value) === divisionCorrecta) {
        alert('¡Todas las respuestas son correctas!');
    } else {
        alert('¡Al menos una respuesta es incorrecta!');
    }
}

const botonVerificar = document.getElementById('boton-verificar');
botonVerificar.addEventListener('click', verificarRespuestas);


const capital1 = document.getElementById('capMexico');
const capital2 = document.getElementById('capEspaña');
const capital3 = document.getElementById('capColombia');
const capital4 = document.getElementById('capFrancia');
const capital5 = document.getElementById('capUSA');

function verificarCapitales() {
    const mexicoCorrecto = "mexico";
    const españaCorrecto = "madrid";
    const colombiaCorrecto = "bogota";
    const franciaCorrecto = "paris";
    const usaCorrecto = "washington";

    let incorrectas = [];

    if (capital1.value.toLowerCase() !== mexicoCorrecto) {
        incorrectas.push('México');
    }
    if (capital2.value.toLowerCase() !== españaCorrecto) {
        incorrectas.push('España');
    }
    if (capital3.value.toLowerCase() !== colombiaCorrecto) {
        incorrectas.push('Colombia');
    }
    if (capital4.value.toLowerCase() !== franciaCorrecto) {
        incorrectas.push('Francia');
    }
    if (capital5.value.toLowerCase() !== usaCorrecto) {
        incorrectas.push('EE. UU.');
    }

    if (incorrectas.length === 0) {
        alert('¡Todas las respuestas son correctas!');
    } else {
        alert('¡Las siguientes respuestas son incorrectas: ' + incorrectas.join(', ') + '!');
    }
}

const botonVerificar1 = document.getElementById('boton-verificare');
botonVerificar1.addEventListener('click', verificarCapitales);
