
const num = Number(prompt('Digite um numero: '))//number converte string para numero
const numero = document.getElementById('numero') //manipulando DOM
const texto = document.getElementById('texto') //manipulando DOM
numero.innerHTML = num  
texto.innerHTML = `<p>Raiz Quadrada <strong>${Math.sqrt(num)} </strong>. <br/></p>`
texto.innerHTML += `<p>Seu numero + 2 é: <strong>${num + 2} </strong>. <br/></p>`
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)} <br/></p>`
texto.innerHTML += `<p>É NaN:  ${Number.isNaN(num)}<br/> <p>`
texto.innerHTML += `<p>Arredondado para baixo ${Math.floor(num)}<br/> <p>`
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(num)}<br/> <p>`
texto.innerHTML += `<p>Seu numero com duas casas decimais ${num.toFixed(2)}<br/> <p>`