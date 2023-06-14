let firstNumber = prompt('Digite o primeiro número : ')
let secondNumber = prompt('Digite o segundo número : ')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('A soma dos dois números: ' + sum)
alert('A subtração dos dois números: ' + sub)
alert('A multiplicação dos dois números: ' + mult)
alert('A divisão dos dois números: ' + div.toFixed(2))
alert('O Resto da divisão dos dois números: ' + restDiv)

if (sum % 2 == 0) {
    alert("A soma dos dois números é Par: " + sum)
} else {
    alert("A soma dos dois números é Ímpar: " + sum)
}

if (firstNumber === secondNumber){
    alert("Os números inseridos são iguais.")
} else {
    alert("Os números inseridos são diferentes.")
}