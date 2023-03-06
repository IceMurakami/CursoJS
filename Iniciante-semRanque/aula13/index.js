//string indexada
//           01234567891011
let string ='um "texto"'


console.log(string.charAt(0))//pegar um index e retorna string nela
console.log(string.concat(' em um lindo dia'))//concatenado valores
console.log(`${string} em um lindo dia`)//concatenando com template string
console.log(string.indexOf('texto'))//encontrar apartir de qual index a palavra começa.
console.log(string.lastIndexOf('u',2))//encontrar index de trás para frente.
console.log(string.match(/[a-z]/g))//expressão regular (encontra um array por causa da flag 'g')
console.log(string.search('u'))// quando retonar -1 é porque ele não encontrou nada.
console.log(string.replace(/um/, 'Outro'))//substituir texto "replace"
console.log(string.length)//retorna o tamanha do variável declarada
console.log(string.slice(-3))//trás o texto apartir do indice declarado por parametro.
console.log(string.slice(7))//trás o texto apartir do indice declarado por parametro.
console.log(string.slice(' ', -3))//a propriedade (lenght -1) esta removendo um indice da string
console.log(string.substring(string.length -3))
console.log(string.split(' ', 1))//dividi  o texto com o paramatro declarado.
console.log(string.toUpperCase())//imprimir tudo em maiusculo.
console.log(string.toLowerCase())//imprime tudo em minusculo.