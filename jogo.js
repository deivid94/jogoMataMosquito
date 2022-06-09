///encontrar altura / largura

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;


 var criaMosquitoTempo = 1500

var nivel = window.location.search // recupera o 'nivel do jogo '
nivel= (nivel.replace('?','')) // remove o ponto de interrogacao da string nivel

if (nivel === 'normal' ){
  //1500

  criaMosquitoTempo = 1500
  

}else if(nivel === 'dificil'){
  //1000 
  criaMosquitoTempo = 1000
}else if (nivel === 'expert'){
  //750

  criaMosquitoTempo = 750
}




function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.loglargura, altura;
}

ajustaTamanhoPalcoJogo();


//Cronometro 
var cronometro = setInterval(function(){
tempo -= 1
if (tempo<0){
  clearInterval(cronometro)
  clearInterval(criaMosca)
  window.location.href='vitoria.html' // redireciona  para a pagina de fim de jogo.
} else {
document.getElementById('cronometro').innerHTML = tempo  
}
},1000)

// Criar posicao aleatoria do mosquito na tela
function posicaoAleatoria() {
  //remover o mosquito anterior caso exista
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    // remover vidas 
    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }

  var posicaox = Math.floor(Math.random() * largura) - 90;
  var posicaoy = Math.floor(Math.random() * altura) - 90;

  posicaox = posicaox < 0 ? 0 : posicaox;
  posicaoy = posicaoy < 0 ? 0 : posicaoy;

  console.log(posicaox, posicaoy);

  // CRIAR O ELEMENTO HTML UTILIZANDO O DOM

  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosquito.png";
  mosquito.className = tamanhoALeatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaox + "px";
  mosquito.style.top = posicaoy + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

// gerar tamanho aleatorio do mosquito.
function tamanhoALeatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}
// mudar lado do mosquito
function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";

    case 1:
      return "ladoB";
  }
}
