var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");


function setGradient() {
    body.style.background = "linear-gradient(to right, "+colorInput1.value+" ,"+colorInput2.value+")";
    // body.style.setProperty("background","linear-gradient(to right, "+colorInput1.value+" ,"+colorInput2.value+")");
    css.textContent = body.style.background + ";";
}

setGradient();
colorInput1.addEventListener("input",setGradient);
colorInput2.addEventListener("input",setGradient);