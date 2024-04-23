// Mensaje de bienvenida
let msjBienvenida = "¡Bienvenido al juego de trivia de MotoGP!";
let instrucciones = "Responde las siguientes preguntas sobre el MotoGP.";

// Mostrar mensaje de bienvenida y solicitar nombre y edad
alert(msjBienvenida);
let nombre = prompt ("Ingresa tu nombre");
let edad;

while (true) {
    edad = prompt("Hola " + nombre + "! Por favor, ingresa tu edad:");
    
    // Verifica si el valor ingresado es un número
    if (!isNaN(edad)) {
        break; // Sale del bucle si es un número válido
    } else {
        alert("Por favor, ingresa una edad válida."); // Muestra un mensaje de error
    }
}

jugar ();
function jugar () {
    
// Mostrar instrucciones y confirmar para comenzar el juego
let confirmacion = confirm(instrucciones + "\n\n¿Estás listo para comenzar?\nIndica la respuesta con el numero correcto");
if (!confirmacion) {
    alert("¡Quizás la próxima vez! ¡Adiós, " + nombre + "!");
} else {
    // Definir las preguntas y respuestas
    const questions = [
        "¿Quién fue el campeón del mundo de MotoGP en la temporada 2021?\n1)Fabio Quartararo\n2)Marc Marquez\n3)Jorge Martin",
        "¿Qué equipo ganó el campeonato de constructores en la temporada 2021 de MotoGP?\n1)Honda\n2)Ducati\n3)Yamaha",
        "¿En qué circuito se celebra el Gran Premio de Italia en MotoGP?\n1)Montmelo\n2)Mugello\n3)Cheste",
        "¿En qué circuito se celebra el Gran Premio de Catalunya en MotoGP?\n1)Jerez\n2)Losail\n3)Montmelo",
        "¿Quién es el piloto más joven en ganar un Gran Premio de MotoGP?\n1)Jorge Martin\n2)Pedro Acosta\n3)Marc Marquez"
    ];

    const answers = [
        "1",
        "3",
        "2",
        "3",
        "3"
    ];

    // Variables para almacenar el puntaje y las respuestas del usuario
    let score = 0;

    // Ciclo de iteración para preguntar y validar las respuestas del usuario
    for (let i = 0; i < questions.length; i++) {
        let respuesta = prompt(questions[i]);
        console.log (respuesta)
        if (respuesta != answers[i]) {
            alert("Respuesta Incorrecta")
        } else {
            alert("Correcto, sumaste un punto")
            score++
        }
    }

    // Mostrar las respuestas del usuario
    let confirmaRespuestas = confirm("¿Quieres ver las respuestas correctas?");
    if (confirmaRespuestas) {
        alert(`Respuestas correctas:\n Fabio Quartararo \n Yamaha \n Mugello \n Montmelo \n Marc Marquez \n Tu puntaje: ${score}`)
    }
} 
    let seguirJugando = prompt("Queres seguir jugando? Ingresa SI o NO");
    if (seguirJugando === "SI") {
        jugar ();
    } else {
        alert ("Gracias por jugar");
    }
}
