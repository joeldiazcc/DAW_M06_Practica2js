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