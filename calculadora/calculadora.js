var resultado = document.querySelector("#display")
var anterior = "";
var num1;
var num2;
var total = 0;

function press(element){
    anterior = anterior + element;
    resultado.innerHTML = anterior;
    num2 = parseFloat(resultado.innerHTML);
    console.log(anterior)
}


function setOP(x){
    num1 = parseFloat(resultado.innerHTML);
    anterior = "";
    operador = x;
}

function calculate(){
    if(operador == "+"){
        resultado.innerHTML = num1 + num2;
    } else if(operador == "-"){
        resultado.innerHTML = num1 - num2;
    } else if(operador == "/"){
        resultado.innerHTML = num1 / num2;
    } else if(operador == "*"){
        resultado.innerHTML = num1 * num2;
    }
}
function clr(){
    anterior = "";
    resultado.innerHTML = 0;
}
