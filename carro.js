'use strict';

// GERAIS

let larguraDoCarro = 90;
let AlturaDoCarro = 70;

function movimentaCarro() {
  xCarros[0] = xCarros[0] -= velocidadeCarros[0];
  xCarros[1] = xCarros[1] -= velocidadeCarros[1];
  xCarros[2] = xCarros[2] -= velocidadeCarros[2];
}

let xCarros = [800,900,900];
let yCarros = [55,140,220];
let velocidadeCarros = [5,8,6];

// CARRO 1
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraDoCarro, AlturaDoCarro);
}
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -120){
    xCarros[0] = 900;
  }
  if (xCarros[1] < -120){
    xCarros[1] = 900;
  }
  if (xCarros[2] < -120){
    xCarros[2] = 900;
  }
}


