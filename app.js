let numeroSecreto = 0;
let numeroGenerado;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;



function verificarIntento (){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Adivinaste el numero y lo hiciste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } //El usuario no acierta el numero.
    else if (numeroUsuario > numeroSecreto){
        asignarTextoElemento('p',"El numero es menor");
    } else {
        asignarTextoElemento('p',"El numero es mayor");
    } 
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja (){
    let valorCaja= document.getElementById('valorUsuario')
    valorCaja.value = '';
}

function reiniciarJuego (){
    //Limpiar caja
    limpiarCaja();
    /*Indicar mensajes iniciales, generar numeros aleatorios, llevar el
     contador a cero*/
    condicionesIniciales();
    //Deshabilitar el boton de reinicio
    document.getElementById('reiniciar').setAttribute('disabled','treu');
}

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    
    //Compara el largo de la lista con la cantidad de numeros maximos a sortear
    if (listaNumerosSorteados.length == numeroMaximo){
        //Si todos los numeros fueron sorteados muestro mensaje
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Revisa si el nuevo numero esta incluido en la lista SI ESTA INLUIDO en la lista, genera un numero nuevo
        if (listaNumerosSorteados.includes(numeroGenerado)){
            //SI ESTA INLUIDO en la lista, genera un numero nuevo
            return generarNumeroSecreto();
        } else {
            //Si aun hay numeros disponibles, incluye el nuevo numero a la lista y devuelve el numero sorteado
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Adivina el numero secreto...");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

condicionesIniciales();
