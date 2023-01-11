'use strict'

const btnTema = document.querySelector('.btn');

btnTema.addEventListener('click', function(){
    document.body.classList.toggle('tema-escuro');

    var classeNome = document.body.className;
    if(classeNome == "tema-claro") {
        this.conteudoTexto = "Escuro";
    }
    else {
        this.conteudoTexto = "Claro";
    }
    console.log('Classe Nome Atual: ' + classeNome);
});
