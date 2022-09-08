var like = document.querySelector(".like1");
var like2 = document.querySelector(".like2");
var like3 = document.querySelector(".like3");
var count1 = 9;
var count2 = 12;
var nuevo = [9, 12, 9];
var likes = [like, like2, like3]


function nuevaFuncion(index){
    nuevo[index] += 1;
    likes[index].innerText = `${nuevo[index]} likes(s)`
}

function subir(){
    count1++;
    like.innerText = `${count1} like(s)`
}
function subir2(){
    count2++;
    like2.innerText = `${count2} like(s)`
}
function subir3(){
    count1++;
    like3.innerText = `${count1} like(s)`
}
