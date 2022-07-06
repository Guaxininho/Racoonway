'use strict';

// IMAGENS
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;
let imagemCarros;

// SONS
let somDaTrilha;
let somDaColisao = new Audio('sons/colidiu.mp3')
let somDoPonto = new Audio('sons/pontos.wav');

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png")
  imagemDoCarro2 = loadImage("imagens/carro-2.png")
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarro4 = loadImage("imagens/carro-4.png");
  imagemDoCarro5 = loadImage("imagens/carro-5.png");
  imagemDoCarro6 = loadImage("imagens/carro-6.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro4, imagemDoCarro5, imagemDoCarro6];
}