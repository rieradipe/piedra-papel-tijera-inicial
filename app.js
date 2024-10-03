//Piedra papel tijeras para principiantes
//2.1 creamos Dom y seleccionamos los elementos del Dom
const eleccionComputadoraDisplay = document.getElementById('eleccionComputadora')
const eleccionUsuarioDisplay = document.getElementById('eleccionUsuario')
const resultadoDisplay = document.getElementById('resultado')
//2.3 añadimos evento a los botones
const posiblesElecciones = document.querySelectorAll('button')
//2.2 preparamos las variables vacias
let eleccionUsuario
let resultados
let eleccionComputadora

//2.4 añadimos evento clic a todos los botones
//2.7 implementamos la logica del juego
posiblesElecciones.forEach(posiblesEleccione => posiblesEleccione.addEventListener('click', (e) => {
//obtenemos eleccion usuario
eleccionUsuario = e.target.id
//generamos y enseñamos la eleccion computadora
eleccionUsuarioDisplay.innerHTML = eleccionUsuario
generarOpcionComputadora () 
//mostramos los resultados
getResultados()
}))
//2.5 definimos funciones auxiliares
//funcion generar opcion computador aleatoria, con Match.floor para redondear
function generarOpcionComputadora() {
   const randomNumero = Math.floor(Math.random() * 3) + 1 //podemos usar tb posiblesElecciones.length
   console.log(randomNumero)
   if (randomNumero === 1) {
    eleccionComputadora = 'piedra'
   }
   if (randomNumero === 2) {
    eleccionComputadora = 'tijera'
   }
   if (randomNumero === 3) {
    eleccionComputadora = 'papel'
   }
   //2.6 actualizamos e Dom con la eleccion de la computadora
   eleccionComputadoraDisplay.innerHTML = eleccionComputadora

}
//2.5 otra funcion auxiliar
//funcion resultados
function getResultados() {
    if (eleccionComputadora === eleccionUsuario) {
        resultados = 'Empate!!!'
    }
    if (eleccionComputadora === 'piedra' && eleccionUsuario === 'papel') {
        resultados = 'Ganas!!!'
    }
    if (eleccionComputadora === 'piedra' && eleccionUsuario === 'tijera') {
        resultados = 'Perdite!!!'
    }
    if (eleccionComputadora === 'papel' && eleccionUsuario === 'tijera') {
        resultados = 'Ganaste!!!'
    }
    if (eleccionComputadora === 'papel' && eleccionUsuario === 'piedra') {
        resultados = 'Perdite!!!'
    }
    if (eleccionComputadora === 'tijera' && eleccionUsuario === 'piedra') {
        resultados = 'Ganaste!!!'
    }
    if (eleccionComputadora === 'tijera' && eleccionUsuario === 'papel') {
        resultados = 'Perdiste!!!'
    }
    //2.6 actualizamos el Dom con los resultados
    resultadoDisplay.innerHTML = resultados
}