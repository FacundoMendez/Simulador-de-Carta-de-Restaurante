let suma;
function getStorage(){
    suma= parseInt(localStorage.getItem("pagar"))
    document.getElementById("suma2").innerHTML = suma;
    apli()
}


getStorage()


document.getElementById("volver").onclick = function(){
    localStorage.removeItem("pagar")
}

document.getElementById("Final").onclick = function(){
    localStorage.removeItem("pagar")
}

let x
function iva(){
    x = document.getElementById("menu").value;

    if(x ==1){
        document.getElementById("aviso").innerHTML = " ";
        document.getElementById("suma2").innerHTML = suma;
    }else{
        document.getElementById("aviso").innerHTML = "+ $100 de Envío";
        document.getElementById("suma2").innerHTML = suma + 100;
    }
} 

if (suma == NaN){
    document.getElementById("ok").style.pointerEvents="none";
}

function apli(){
    document.getElementById("menu").onclick = function(){
        iva()
    }
}

function check(){
    if(isNaN(suma)){
        document.getElementById("ok").style.pointerEvents="none";
    }else if(suma == null){
        document.getElementById("ok").style.pointerEvents="none";
    }

    if(suma== 0){
        document.getElementById("ok").style.pointerEvents="none";
    }else if(suma== ""){
        document.getElementById("ok").style.pointerEvents="none";
    }
}
check();

