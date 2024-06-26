let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10
let intentos_1 = 1
let cantidadDeJuegos = 3
// agregar textos
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// interacciones con botones
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'vez': 'veces'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else {
        // el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');

        } else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarcaja();
    }
    return;
}
// numero aleatorio
function numeroAleatorio(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si ya soteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo || intentos_1 == cantidadDeJuegos){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    }else{
    // Si el numero generado esta incluido en la lista


        if (listaNumeroSorteados.includes(numeroGenerado)){
            return numeroAleatorio();

        } else{
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    
    }
}

function limpiarcaja(){
    document.querySelector('#valorUsuario').value='';
   
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', `Pon un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;

}
function reiniciarjuego(){
    // limpiar caja
    limpiarcaja();
    // indicar mensaje de intervalos de números
    condicionesIniciales();
    // desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','True');
    intentos_1 ++;
}

condicionesIniciales();

