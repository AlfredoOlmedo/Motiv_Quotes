
// Funcion para obtener la frase del dia Lista
//const frasesEstoicas = ["We suffer more often in imagination than in reality. - Seneca,", "You have power over your mind – not outside events. Realize this, and you will find strength. - Marcus Aurelius,", "We have two ears and one mouth, so we should listen more than we say. - Zeno of Citium,"]

// obtener las frases desde el quotes.json
fetch('quotes.json')
.then(response => {
    if(!response.ok){
        throw new Error('Error, not parsed')
    }
    return response.json() // Convertimos las respuesta a JSON
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error('Error fetching the JSON file:', error)
})





// Funcion para opbtener cuantos dias faltan para terminar el anio
function calcularDiasRestantes(){
    const fechaActual = new Date()
    const finDeAnio = new Date(fechaActual.getFullYear(), 11, 31)
    const diferencia = finDeAnio - fechaActual
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24))
    return diasRestantes
}

// Funcion para obtener la frase del dia
function obtenerFraseDelDia(){
    const fechaActual = new Date()
    const diaDelAnio = Math.floor(
        (fechaActual - new Date(fechaActual.getFullYear(), 0, 0)) /
        (1000 * 60 * 60 * 24)
    )
    return frasesEstoicas[diaDelAnio - 1]
}

// Funcion principal para mostrar la informacion
function mostrarInformacion(){
    const fraseDelDia = obtenerFraseDelDia()
    const horaActual = obtenerHoraActual()
    const fechaActual = obtenerFechaActual()
    const diasRestantes = calcularDiasRestantes()

// Manipulacion del Dom
const h1 = document.querySelector('h1');



const h2 = document.querySelector('h2');
const hours = document.getElementById('hour_dom');
const currentDate = document.getElementById('curDate_dom');
const daysLeft = document.getElementById('daysLeft_dom');


}

// Ejecucion del programa
mostrarInformacion()
