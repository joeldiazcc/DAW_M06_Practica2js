function childColor() {
    let num = document.getElementById("number").value;
    let color = document.getElementsByTagName("div");

    for ( let i = 0; i < color.length; i++) {
        if(color[i].style.background == "red") {
            // Cambiar el fons del número corresponent a la llista.
            color[i].style.background = "none";
        }
    }
    // Cambiar color del div en la posició del número seleccionat.
    color[num].style.background = "red";
};
function esborrar() {
    // Seleccionar numero
    let num = document.getElementById("number").value;
    // Treure el fons
    document.getElementById("llista").children[--num].style.background = "none";
};
function minim(){
    // Seleccionar tots els child de la llista
    let minichild = document.getElementById("llista").children;
    let color = document.getElementsByTagName("div");
    let min = 9999; // Declarem un numero molt gran per calcular el numero minim
    let posLocal = 0; // Variable per emmagatzemar la pos

    // Recorreguem la llista
    for ( let pos = 0; pos < minichild.length; pos++){
        // Convertir text a int
        let text = parseInt(minichild[pos].innetHTML);
        // Trobar numero min de la llista
        if(text <= min) {
            min = text;
            posLocal = pos;
        }
        if(color[pos].style.background == "red"){
            color[pos].style.backgroud = "none";
        }
    }
    // Pintar la posició mes petita de la llista
    minichild[posLocal].style.backgroud = "red";
};
function maxim(){
    // Seleccionar tots els child de la llista
    let maxchild = document.getElementById("llista").children;
    let color = document.getElementsByTagName("div");
    let max =-1; // Declarem un numero molt petit per calcular el numero maxim
    let posLocal = 0; // Variable per emmagatzemar la pos

    // Recorreguem la llista
    for ( let pos = 0; pos < maxchild.length; pos++){
        // Convertir text a int
        let text = parseInt(maxchild[pos].innetHTML);
        // Trobar el numero max de la llista
        if(text >= max) {
            max = text;
            posLocal = pos;
        }
        if(color[pos].style.background == "red"){
            color[pos].style.backgroud = "none";
        }
    }
    // Pintar la posició mes gran de la llista
    maxchild[posLocal].style.backgroud = "red";
}