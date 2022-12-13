/*
// 1) Написать функцию, которая принимает 2 параметра (числа) и возвращает в консоли самый минимальный из них.

var numA=Number(prompt('Введите первое число'))
var numB=Number(prompt('Введите второе число'))
function min(a, b) { 
  if(a <= b) 
    return alert (a)
  else 
    return alert (b)
}
min(numA, numB)

*/

/*
// 2) Написать функцию которая принимает 1 параметр в который попадает promt() и вернуть длину строки в консоли.

var x =(prompt('Введите строку')) 
alert('Это слово занимает ' + x.length +  ' кодовых значений ')

*/


// Написать простой калькулятор при помощи функции и его параметров. Функция должна уметь вычислять: деление "/",  умножение "*", вычитание "-", сложение "+"
/*
var num1=Number(prompt('Введите первое число'))
var oper=(prompt('Введите  оператор'))
var num2=Number(prompt('Введите второе число'))
function calc(num1, num2, oper) {
    switch (oper) {
      case "*":
        return alert (num1 * num2)
      case "+":
        return alert (num1 + num2)
      case "-":
        return alert (num1 - num2)
      case "/":
        if (num2 !== 0) {
          return alert (num1 / num2)
        } else {
          return alert ('не делится на ноль');
        }
    }
}
calc(num1,num2,oper)
*/

