// VARIAVEIS DO OPONENTE
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;
let chanceErro = 75;

                                  //FUNCTION
function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - hRaquete/2;
  yRaqueteOponente += velocidadeyOponente + chanceDeErrar;
  calculaChanceDeErrar()
}

function calculaChanceDeErrar(){
  if (pontosOponente >= meuspontos){
    chanceDeErrar += 1
  if (chanceDeErrar >= 39){
    chanceDeErrar = 60}
  } else {chanceDeErrar -= 1
if (chanceDeErrar <= 35) {chanceDeErrar = 35}
         }
}

function movimentaRaqueteOponenteMultiplayer(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;
  }
}

function colisaoRaqueteOponente(){
  colidiu = 
collideRectCircle(xRaquete,yRaquete,wRaquete,hRaquete,xBolinha,yBolinha,raio)
  if (colidiu){
    velocidadexBolinha *= -1}
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente &&
      yBolinha + raio < yRaqueteOponente + hRaquete &&
      yBolinha + raio > yRaqueteOponente){ 
    velocidadexBolinha *= -1;}
}