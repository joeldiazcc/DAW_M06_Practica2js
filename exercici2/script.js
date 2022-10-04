function childColor() {
    let num = document.getElementById("number").value;
    let color = document.getElementsByTagName("div");

    for ( let i = 0; i < color.length; i++) {
        if(color[i].style.background == "red") {
            color[i].style.background = "none";
        }
    }
    color[num].style.background = "red";
};