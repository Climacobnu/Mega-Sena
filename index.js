var numerosMegaSena = document.getElementById('divNumerosMegaSena');
var numerosEscolhidos = [];
var botaoJogar = document.getElementById('botaoJogar');
numerosMegaSena.addEventListener('click', function(corDefundo){
    corDefundo.target.style.background = "#eb160e";
    numerosEscolhidos.push(corDefundo.target.innerHTML);
    if(numerosEscolhidos.length > 6){
        alert('Você pode escolher no máximo 6 números');
        corDefundo.target.style.background = "#bbbbbb";
        botaoJogar.disable = false;
        return;
        
    }
    validaNumerosEscolhidos();

});

function validaNumerosEscolhidos(){
    if(numerosEscolhidos.length == 6){
        botaoJogar.disabled = false;

    }
}
var numerosSelecionados  = [];
var resultado = "";
var numerosSorteados = document.getElementById('numerosSorteados');
botaoJogar.addEventListener('click', numero_aleatorio);

function numero_aleatorio(){
    if(resultado != "");
    resultado = "";
    while(numerosSelecionados.length < 6){
        var aleatorio = Math.floor(Math.random()*60 + 1);
        
        if(numerosSelecionados.indexOf(aleatorio) == -1){
            resultado+= aleatorio + " ";
            numerosSelecionados.push(aleatorio);

        }
    }

    numerosSorteados.innerHTML = "Os números <strong> sorteados </strong> foram: " +"<b>" + resultado +  "</b>";
    verificaNumerosAcertados();

}

var contador;
var acertos = document.getElementById('acertos');

function verificaNumerosAcertados(){
    for(var i = 0; i < 6; i++){

        for(var j = 0; j < 6; j++ ){
            if(numerosEscolhidos[j] == numerosSelecionados[i]){
                    contador = contador + 1;

            }

        }
    }

    
    if(contador == 0){
        acertos.innerHTML = "Infelizmente, você perdeu!";
        return;
    }else if(contador == 6){
        acertos.innerHTML = "Parabéns você é o <strong>SORTUDO</strong> que ganhou na MEGA SENA!";
        return;
    }else if(contador != 1)
    {
        acertos.innerHTML = "Você acertou <strong> 1</strong> número, continue tentando";
    }else if (contador >1){
        acertos.innerHTML = "Você acertou <strong>" + contador + "</strong> números, continue tentando";
        return;
    }

}

var botaoLimpar = document.getElementById('botaoLimpar');
var span = document.getElementsByClassName('numeros');
botaoLimpar.addEventListener('click', limparDadosdaTela);

function limparDadosdaTela(){
    for(var i = 0; i < span.length; i++){
     span[i].style.backgroundColor = '#bbbbbb';

    }
    numerosSorteados.innerHTML= "";
    resultado = "";
    acertos.innerHTML = "";
    numerosEscolhidos.length = "";

}