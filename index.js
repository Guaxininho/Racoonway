'use strict';

function setup() {
  createCanvas(900,600);
}
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
}




// x é 900
// y é 600