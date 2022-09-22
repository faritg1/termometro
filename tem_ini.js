let boton=document.getElementById("calcular");
function conversion(){
    let grados = document.getElementById("num").value
    let celcius = ((grados-32)*5/9).toFixed(1)

    document.getElementById("rel").innerHTML = celcius
    document.getElementById("liquid").style.height= celcius+"%"

    let llenar = 248 

}

boton.addEventListener('click',conversion)