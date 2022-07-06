'use strict';

let xAtor = 95;
let yAtor = 552;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 40, 40 );
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor = yAtor += 3;}
    
  }
}
function podeSeMover(){
return yAtor < 552;
}

function verificaColisao() {
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraDoCarro, AlturaDoCarro, xAtor, yAtor, 15)
    if(colisao){
      somDaColisao.play();
      voltainicio();
      checandoPontos();
    }
  }
}

function voltainicio(){
  yAtor= 552;
}

function incluipontos() {
  textAlign(CENTER);
  textSize(27);
  fill(color(255,240,100))
  text(pontos, width / 8, 35)
}

function marcaPonto(){
  if(yAtor < 0){
    pontos = pontos + 1;
    somDoPonto.play();
    voltainicio();
  }
}

function checandoPontos(){
  if(pontos === 0){
    pontos -= 0;} else {
      pontos -=1;
    }
}