
/* ------------ CARTA ---------------- */


class Carta{
    constructor(id,seccion,nombre,precio){
        this.id = id;
        this.seccion= seccion;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const productos = [];
    productos.push(new Carta(1,"entradas" ,"Matambre Arrollado", 400));
    productos.push(new Carta(2,"entradas" ,"Ensalada Rusa", 350));
    productos.push(new Carta(3,"entradas" ,"Berenjenas al Escabeche", 400));
    productos.push(new Carta(4,"entradas" ,"Ensalada Rusa", 650));
    productos.push(new Carta(5,"entradas" ,"Picada", 450));
    productos.push(new Carta(6,"entradas" ,"Bastones de Muzzarella ", 450));
    productos.push(new Carta(7,"entradas" ,"Bocadillos de Acelga", 250));
    productos.push(new Carta(8,"entradas" ,"Empanadas", 250));
    productos.push(new Carta(9,"entradas" ,"picada x5", 1000));
    productos.push(new Carta(10,"entradas" ,"Ensalada de Papa",300));

    productos.push(new Carta(11,"parrilla", "Parrilla p/1",890 ));
    productos.push(new Carta(12,"parrilla", "Parrilla p/2",1650 ));
    productos.push(new Carta(13,"parrilla", "Asado ",850 ));
    productos.push(new Carta(14,"parrilla", "Vacio",950 ));
    productos.push(new Carta(15,"parrilla", "Entraña ",950 ));
    productos.push(new Carta(16,"parrilla", "Lechon",750 ));
    productos.push(new Carta(17,"parrilla", "Mollejas",900 ));
    productos.push(new Carta(18,"parrilla", "Bife de chorizo",650 ));
    productos.push(new Carta(19,"parrilla", "Bondiola",670 ));
    productos.push(new Carta(20,"parrilla", "Pollo",500 ));

    productos.push(new Carta(21,"pastas","Sorrentinos ",450 ));
    productos.push(new Carta(22,"pastas","Ravioles ", 500));
    productos.push(new Carta(23,"pastas","Canelones",400 ));
    productos.push(new Carta(24,"pastas","Farafale", 300));
    productos.push(new Carta(25,"pastas","Fideos",350 ));
    productos.push(new Carta(26,"pastas","Rigatoni",240 ));
    productos.push(new Carta(27,"pastas","Penne Rigate", 300));
    productos.push(new Carta(28,"pastas","Tallarines",400 ));
    productos.push(new Carta(29,"pastas","Canelones jyq", 500 ));
    productos.push(new Carta(30,"pastas","Sorrentinos verdura", 480 ));


let productoSeleccion= [];

/* --------------------NOMBRE USUARIO --------------------- */

/* function nn(){
    return prompt("Ingrese su Nombre")
}

let nombre= nn();

function validarNombre(){
    while (nombre === null || nombre === ""){
        alert("Por Favor ingrese un nombre")
        nombre= nn();
    }
}

validarNombre();

document.getElementById("name").innerHTML = nombre;


 */

/* --------------Activar Pedidos -------------------- */

document.getElementById("pedido").onclick = function(){
    initSeleccion()
    suma();
    check();
    check2();

}

/* -------------Activar VER PEDIDO------------------- */

document.getElementById("lista").onclick = function(){
    document.getElementById("listpedidos").style.display="block";
    document.getElementById("lista").style.display="none";
    document.getElementById("pedido").style.display="none";
    document.getElementById("container").style.display="none";
    document.getElementById("img").style.display="none";
    document.getElementById("finalizar").style.display="none";
    document.getElementById("main").style.height="100vh";
    document.getElementById("main").style.overflow="hidden";

    mostrarArray();
}

document.getElementById("Agregar").onclick = function(){
    initSeleccion();
    mostrarArray();
    suma();
    check2();

}


document.getElementById("Vaciar").onclick = function(){
    eliminarList();
    mostrarArray();
    check2();
    check();
}



document.getElementById("iconX").onclick = function(){
    document.getElementById("listpedidos").style.display="none";
    document.getElementById("lista").style.display="block";
    document.getElementById("pedido").style.display="block";
    document.getElementById("img").style.display="inline-block";
    document.getElementById("container").style.display="block";
    document.getElementById("finalizar").style.display="block";
    document.getElementById("main").style.height="";
    document.getElementById("main").style.overflow="auto";
}





/* -----------------------PEDIDO------------------------- */

let pedido;
let elem;
let errorBusq;


function initSeleccion(){

    function seleccion(){
        return parseInt(prompt("Seleccione el NUMERO de su pedido!"));
    }

    pedido = seleccion() ;
    

    /* ---------------BUSCAR y crear nuevo array ---------------- */

    
    function buscar(){

        elem = productos.find(elemento => elemento.id === pedido);
        errorBusq = valuBuscar();

        productoSeleccion.push(elem.nombre)
        
        console.log(productoSeleccion.join("\n"))
    }

    buscar();



    /* ------- Captar el error en la busqueda -------------- */

    function valuBuscar(){
        while(elem == undefined){
            alert("Seleccion Incorrecta")
            pedido = seleccion() ;
            elem = productos.find(elemento => elemento.id === pedido)
        }
        return pedido
    }

    errorBusq = valuBuscar()
    

}

/* -----------MOSTRAR ARRAY-------------- */
let listP="";

function mostrarArray(){

    for(let i=0; i < productoSeleccion.length; i++){
        listP += i+1 + "-" + productoSeleccion[i] + "<br>";
    }
    document.getElementById("mostrarLista").innerHTML =  listP; 
    vaciarLista()
} 



function vaciarLista(){
    listP = " "
}

function eliminarList(){
    productoSeleccion = [];
    total =  [];
    sumaTot = 0;
    document.getElementById("suma").innerHTML = sumaTot;
}




/* --------------- SUMA ----------------- */



let x;
let sumaTot=0;


function suma(){

    let total = []

    x = productos.find(elemento => elemento.id === pedido);

    total.push(x.precio)

    for(let i= 0; i < total.length; i++){
        sumaTot+= total[i]
    }

    document.getElementById("suma").innerHTML = sumaTot;
    LocalStorage()

}


/* -------------------LocalStorage--------------------- */

function LocalStorage(){
    localStorage.setItem("pagar", sumaTot)
}


function check(){
    if(isNaN(sumaTot)){
        document.getElementById("finalizar").style.pointerEvents="none";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem red";
    }else{
        document.getElementById("finalizar").style.pointerEvents="auto";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem green";
    }
    if(sumaTot== 0){
        document.getElementById("finalizar").style.pointerEvents="none";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem red";

    }else{
        document.getElementById("finalizar").style.pointerEvents="auto";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem green";
    }
    if(sumaTot== ""){
        document.getElementById("finalizar").style.pointerEvents="none";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem red";

    }else{
        document.getElementById("finalizar").style.pointerEvents="auto";
        document.getElementById("finalizar").style.boxShadow=" 0 0 0.4rem green";
    }
}

check();

function check2(){
    if(isNaN(sumaTot)){
        document.getElementById("fin").style.pointerEvents="none";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem red";
    }else{
        document.getElementById("fin").style.pointerEvents="auto";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem green";
    }
    if(sumaTot === 0){
        document.getElementById("fin").style.pointerEvents="none";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem red";
    }else{
        document.getElementById("fin").style.pointerEvents="auto";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem green";
    }
    if(sumaTot== ""){
        document.getElementById("fin").style.pointerEvents="none";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem red";
    }else{
        document.getElementById("fin").style.pointerEvents="auto";
        document.getElementById("fin").style.boxShadow=" 0 0 0.4rem green";
    }
    check();
}
check2();
