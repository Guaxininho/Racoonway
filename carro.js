'use strict';

// GERAIS

let larguraDoCarro = 90;
let AlturaDoCarro = 70;

function movimentaCarro() {
  for(let i = 0; i < imagemCarros.length;  i = i + 1){
    xCarros[i] = xCarros[i] -= velocidadeCarros[i];
  }
}

let xCarros = [900,900,900,700,700,700];
let yCarros = [55,140,220,310,470,390];
let velocidadeCarros = [5,8,6,9,3,7];

// CARRO 1
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraDoCarro, AlturaDoCarro);
}
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    if (xCarros[i] < -120){
      xCarros[i] = 900;
    }
  }
}


