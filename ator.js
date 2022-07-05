'use strict';

let xAtor = 80;
let yAtor = 552;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 40, 40 );
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
    yAtor = yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor = yAtor += 3
  }
}

