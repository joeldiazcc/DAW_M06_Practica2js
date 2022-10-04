function childColor() {
    // Seleccionar numero
    let num = document.getElementById("number").value;
    let color = document.getElementsByTagName("div");
    // Treure fons de si hi ha algun.
    for ( let i = 0; i < color.length; i++) {
        if(color[i].style.background == "red") {
            color[i].style.background = "none";
        }
    }
    // Cambiar color fons
    color[num].style.background = "red";
};
function esborrar() {
    // Seleccionar numero
    let num = document.getElementById("number").value;
    // Treure el fons
    document.getElementById("llista").children[--num].style.background = "none";
}