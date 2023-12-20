function calcularIMC() {
    // Obtener los valores de peso y altura desde los campos de entrada
    let peso = Number(document.getElementById('p').value);
    let altura = Number(document.getElementById('a').value);

    // Calcular el índice de masa corporal (IMC)
    let masa = peso / (altura * altura);

    // Mostrar el valor de la masa en el campo de resultado
    document.getElementById('res').value = masa.toFixed(2);

    // Crear un mensaje basado en el rango del IMC
    let mensaje = "";

    if (masa < 18.5) {
        mensaje = 'Actualmente estás bajo de peso. Deberías considerar aumentar tu peso para mantener una buena salud.';
    } else if (masa >= 18.5 && masa <= 24.9) {
        mensaje = 'Tu peso es normal. ¡Felicidades! Mantén hábitos saludables.';
    } else if (masa >= 25.0 && masa <= 30) {
        mensaje = 'Tienes sobrepeso. Deberías considerar cambiar tu dieta y aumentar tu actividad física.';
    } else {
        mensaje = 'Tienes obesidad. Es importante que consultes a tu médico para recibir orientación y apoyo.';
    }

    // Llamar a la función hablar para que lea el mensaje en voz alta
    hablar(mensaje);

    // Mostrar un mensaje de alerta con el mismo contenido
    alert(mensaje);
}

// Función para usar la síntesis de voz
function hablar(texto) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(texto);
    synth.speak(utterance);
}
