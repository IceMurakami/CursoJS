//criando obejto com variavel
const pessoa1 = { 
    nome: 'Arthur',
    sobrenome: 'Murakami',
    idade: 23,

    //função
    fala(){
        console.log(`Minha idade é ${this.idade}`)
    },

    //função dentro do objeto
    incrementaIdade(){
         this.idade++ //altera o valor dentro da variavel.
    }

};
/*
//criando obejto com variavel
const pessoa2 = {
    nome: 'Nicolle',
    sobrenome: 'Monteiro',
    idade: 21
}

//função criando um objeto
function criarPessoa(nome,sobrenome,idade){
    return { nome,sobrenome,idade}
}

const pessoa3 = criarPessoa('nomeTeste', 'sobrenomeTeste', 10)
*/
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

