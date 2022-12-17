// 1 Дз)
/*
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");

let a = 0;

plus.addEventListener("click", ()=>{
a++;
num.innerText = a;
num.style.color="green"
});

minus.addEventListener("click", ()=>{
    if (a>0){
    a--;
    num.innerText = a;
    num.style.color="red"
}
});
*/

/*
// 2 Дз) 
const box =document.querySelector('.box');
const X =document.querySelector('#x');
const Y =document.querySelector('#y');
box.addEventListener('mousemove',event =>{
    let x = event.screenX
    let y = event.screenY
    X.innerHTML = x
    Y.innerHTML = y
})
*/

// 3 Дз)
/*
const circles = document.querySelectorAll(".circle");
let choiseColor = prompt('Введите цвет (красный,желтый,зеленый)').toLowerCase().trim()
let colors={
    red:'красный',
    yellow:'желтый',
    green:'зеленый'
}
switch(choiseColor){
    case colors.red:
        alert('STOP')
        break
    case colors.yellow:
        alert('WAIT')
        break
    case colors.green:
        alert('GO!')
        break
    default:
        alert('ERROR!')      
}
*/