
function calificar() {

    let punto = 0;
    let incorrectas = 0;

    let respuesta1 = document.querySelector('input[name="p1"]:checked');
    let respuesta2 = document.querySelector('input[name="p2"]:checked');
    let respuesta3 = document.querySelector('input[name="p3"]:checked');

    if (respuesta1 == null || respuesta2 == null || respuesta3 == null) {
        alert("Debes responder todas las preguntas");
    } else {

        if (respuesta1.value == "C") {
            punto += 1;
        } else {
            incorrectas += 1;
        }

        if (respuesta2.value == "B") {
            punto += 1;
        } else {
            incorrectas += 1;
        }

        if (respuesta3.value == "A") {
            punto += 1;
        } else {
            incorrectas += 1;
        }

        document.getElementById("resultado").innerHTML =
            "Respuestas correctas: " + punto +
            "<br>Respuestas incorrectas: " + incorrectas +
            "<br>Tu puntuación es: " + punto + " de 3";
    }
}
