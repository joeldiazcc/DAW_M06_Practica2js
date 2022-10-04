let result = document.getElementById("result");

result.addEventListener("click", function(){
    let color = document.getElementById("colors").value;
    let fons = document.getElementsByTagName("div");

    fons[0].style.background = color;
});