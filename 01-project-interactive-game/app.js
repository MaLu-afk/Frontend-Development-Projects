let numeroSecreto;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'intento': 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // En caso no se acierte
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor!');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor!');
        }
        intentos++;
        limpiarCaja();       
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) +1;

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    // Si ya sorteamos todos los números
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon los números posibles!');
    } else {
        // Si el númerp generado está en la lista
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicioinesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicioinesIniciales();
    // Desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicioinesIniciales();