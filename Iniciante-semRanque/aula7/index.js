const nome ="Arthur Murakami"
const sobrenome = "Santos"
const idade = 22
const peso = 84;
const alturaEmM = 1.85
let imc;

imc = peso / (alturaEmM * alturaEmM)

console.log( nome, sobrenome, 'tem', idade, 'pesa', peso, 'kg')
console.log(`tem, ${alturaEmM} de altura e seu imc é de, ${imc}`)//template string

