//quando clicar no botao opcoes, vai exibir ou ocultar a div com as opçẽos
/*
const opcoes_btn = document.getElementById('opcoes_btn');

var visibilidade = false; //Variável que vai manipular o botão Exibir/ocultar

opcoes_btn.addEventListener('click', function(){

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("div_opcoes").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("div_opcoes").style.display = "block";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }

});
*/

//quando clicar no botao opcoes, vai exibir ou ocultar a div com as opçẽos

var visibilidade = false; //Variável que vai manipular o botão Exibir/ocultar
var visibilidade2 = false; //Variável que vai manipular o botão Exibir/ocultar
var rotacionado = false;

$(document).ready(function(){

    $("#notas-btn").mousedown(function(){   
        if (visibilidade) {//Se a variável visibilidade for igual a true, então...
            
                $('[id=nota-branca-nome]').css({
                    display: 'none'
                });

                $('[id=nota-preta-nome]').css({
                    display: 'none'
                });

                $('#notas-btn').text('Notas (Mostrar)');
            
            visibilidade = false;//alteramos o valor da variável para falso.
        } else {//ou se a variável estiver com o valor false..
            
            $('[id=nota-branca-nome]').css({
                display: 'block'
            });

            $('[id=nota-preta-nome]').css({
                display: 'block'
            });

            $('#notas-btn').text('Notas (Esconder)');

            visibilidade = true;//Alteramos o valor da variável para true.
        }
    }); 

    $("#controle-btn").mousedown(function(){   
        if (visibilidade2) {//Se a variável visibilidade2 for igual a true, então...
            
                $('[id=controles-brancas]').css({
                    display: 'none'
                });

                $('[id=controles-pretas]').css({
                    display: 'none'
                });

                $('#controle-btn').text('Controles (Mostrar)');
            
            visibilidade2 = false;//alteramos o valor da variável para falso.
        } else {//ou se a variável estiver com o valor false..
            
            $('[id=controles-brancas]').css({
                display: 'block'
            });

            $('[id=controles-pretas]').css({
                display: 'block'
            });

            $('#controle-btn').text('Controles (Esconder)');

            visibilidade2 = true;//Alteramos o valor da variável para true.
        }
    });

    //rotacionar
    $("#rotacionar-btn").mousedown(function(){   
        if (rotacionado) {//Se a variável rotacionado for igual a true, então...
            
                $('[class=piano-fora]').css({
                    transform: 'rotate(90deg)',
                    marginTop: '38%'
                });

                $('#card-cinza').css({
                    height: '400px'
                });

            rotacionado = false;//alteramos o valor da variável para falso.
        } else {//ou se a variável estiver com o valor false..
            
            $('[class=piano-fora]').removeAttr( 'style' );

            $('.tecla-branca').removeAttr( 'style' );

            $('#card-cinza').removeAttr( 'style' );

            rotacionado = true;//Alteramos o valor da variável para true.
        }
    });

});

function random_lateral(){
    return Math.floor(Math.random() * 4);
}

function random_rodape(){
    return Math.floor(Math.random() * 3);
}

window.onload = carrega_anuncio_lateral();
function carrega_anuncio_lateral(){
    const img_lateral = document.getElementById('img_anuncio_lateral');

    random_lateral();

    if (random_lateral() == 0){
        img_lateral.src = 'anuncios/laterais/bannergi1.webp';
    } else if (random_lateral() == 1){
        img_lateral.src = 'anuncios/laterais/bannergi2.webp';
    } else if (random_lateral() == 2){
        img_lateral.src = 'anuncios/laterais/bannergi3.webp';
    } else if (random_lateral() == 3){
        img_lateral.src = 'anuncios/laterais/bannergi4.webp';
    } else {
        img_lateral.src = 'anuncios/laterais/bannergi1.webp';
    }
}

window.onload = carrega_anuncio_rodape();
function carrega_anuncio_rodape(){
    const img_rodape = document.getElementById('img_anuncio_rodape');

    random_rodape();

    if (random_rodape() == 0){
        img_rodape.src = 'anuncios/rodape/bannergi1.webp';
    } else if (random_rodape() == 1){
        img_rodape.src = 'anuncios/rodape/bannergi2.webp';
    } else if (random_rodape() == 2){
        img_rodape.src = 'anuncios/rodape/bannergi3.webp';
    } else {
        img_rodape.src = 'anuncios/rodape/bannergi1.webp';
    }
}

//button menu-mobile

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

//tooltip
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

//scrollpsy
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
});   