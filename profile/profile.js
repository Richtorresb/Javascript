var changeName = document.querySelector("#nombre");
var quitar1 = document.querySelector(".conex1");
var quitar2 = document.querySelector(".conex2")
var conreq = document.querySelector(".conexion h3 span");
var tuConexion = document.querySelector(".tuconexion h3 span")
var contador = 2;
var contador2 = 418;


function change(){
    changeName.innerText = prompt("Ingresa nuevo Nombre:")
}

function add(){
    contador--
    contador2++
    quitar1.remove()
    conreq.innerText = contador;
    tuConexion.innerText = contador2;
}
function remove(){
    contador--
    quitar1.remove()
    conreq.innerText = contador;
}

function add1(){
    contador--
    contador2++
    quitar2.remove()
    conreq.innerText = contador;
    tuConexion.innerText = contador2;
}
function remove2(){
    contador--
    quitar2.remove()
    conreq.innerText = contador;
}