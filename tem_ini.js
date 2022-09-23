let boton=document.getElementById("calcular");

function conversion(){
    let grados = document.getElementById("num").value
    let celcius = ((grados-32)*5/9).toFixed(1)

    document.getElementById("rel").innerHTML = celcius
    document.getElementById("liquid").style.height= celcius+"%"


}

boton.addEventListener('click',conversion)


function reiniciar(){

    document.getElementById("num").value = ""
    document.getElementById("rel").innerHTML = ""
    document.getElementById("liquid").style.height= 0+"%"

}

let boton2=document.getElementById("reiniciar");
boton2.addEventListener('click',reiniciar)