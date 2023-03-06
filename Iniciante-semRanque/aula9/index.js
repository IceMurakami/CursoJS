//String, number, undefined, null, boolean, symbol
const nome = 'Arthur' //string
const nome1 = "Artur" //string
const nome2= `Arthur` //string
const num1 = 1 //number
const num2 = 1 //number
let nomeAluno; //recebe Valor por padrão undefined -> não aponta  pra local nenhum na memorio. 
let sobrenomeAluno = null //nulo -> não aponta  pra local nenhum na memorio.
const verdadeiro = true // boolean
const falso = false // boolean




//tipo de dado passado por referencia.
const a = [1,2]
const b = a
b.push(3)


console.log(typeof nome, nomeAluno)
console.log( a, b)