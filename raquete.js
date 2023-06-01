// VARIAVEIS DA RAQUETE 
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10; //largura ralativo ao x
let hRaquete = 90; //altura relativo ao y 
let curva = 20;
let colidiu = false;

                                //FUNCTIONS
function mostraRaquete(x,y){
  rect (x,y,wRaquete,hRaquete,curva)
}

function movimentaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + wRaquete && 
      yBolinha - raio < yRaquete + hRaquete && 
      yBolinha + raio > yRaquete) {
    velocidadexBolinha *= -1;
  }
}

function colisaoRaquetebiblioteca(x,y){
  colidiu = 
collideRectCircle(x,y,wRaquete,hRaquete,xBolinha,yBolinha,raio)
  if (colidiu){
    velocidadexBolinha *= -1
  raquetada.play();
  }
}