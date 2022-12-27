var cuadro = document.getElementById("area_de_dibujo"); 
var papel = cuadro.getContext("2d"); 
cuadro.addEventListener("mousedown", lineaInicial); 
cuadro.addEventListener("mouseup", finLinea); 
cuadro.addEventListener("mousemove", lineaMovimiento); 

var colorPincel = "#000"; 
let mouse = false; 

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){ //Esta es la función base del dibujo.
    lienzo.beginPath();
    lienzo.strokeStyle= colorPincel; //Cambié esta variable por otro nombre
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


function lineaInicial(){ //Linea inicial me cambia el false por defecto a true.
    mouse = true;
}

function finLinea(){ //Esta función me vuelve a poner al mouse como nulo, es decir false.
    mouse = false;
}
function lineaMovimiento(event){ //Esta función dice 
    if(mouse == true){ //Si mouse es true -es decir si está siendo mousedown, va a dibujar.
        dibujarLinea("colorPincel", event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    } //Como dibujará
}