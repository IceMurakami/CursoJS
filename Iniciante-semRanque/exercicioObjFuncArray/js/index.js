function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function eventoF(e){
        e.preventDefault(); //Cancela  o envento
        
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value   
        })

        resultado.innerHTML +=  `<p>Nome: ${nome.value} ${sobrenome.value}, Peso:${peso.value} Altura:${altura.value}<br/></p>`
        
    }
    
    //cancela o submit
    form.addEventListener('submit',eventoF);  
}
meuEscopo();