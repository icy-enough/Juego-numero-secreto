// Juego número secreto


// Inicializando las variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Asignando texto a nuestra etiqueta de HTML
function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML =  texto;
   return;
}

// Verificando el intento del usuario
function verificarIntento() {
   let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   // En caso de que el usuario acierte
   console.log(intentos)
   if (numerosDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');

   // En caso de que el usuario no acierte
   } else {
      if (numerosDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El número secreto es menor');
      } else {
         asignarTextoElemento('p', 'El número secreto es mayor');
      }
      intentos++;
      limpiarCaja();
      
   }
   return;
}

// Limpiar caja de ingresar el número a adivinar
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   
}

/* Generando un número aleatorio para adivinar
   con una función */
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   // Si ya se sortearon todos los números
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
   } else
      // Si el numero generado está incluido en la lista
      if (listaNumerosSorteados.includes(numeroGenerado)) {
         return generarNumeroSecreto();
      } else {
         listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
      }
         
}

// Asignando texto a nuestras etiquetas del HTML
function condicionesIniciales(){
   asignarTextoElemento('h1', 'Juego del número secreto');
   asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
}

function reiniciarJuego(){
   // Limpiar la caja 
   limpiarCaja();
   /* Indicar mensaje de intervalo de números
   Generar el número aleatorio
   Inicializar el número de intentos */
   condicionesIniciales();

   // Deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
};

condicionesIniciales();

