// VARIÁVEIS DA BOLINHA
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

                            //FUNCIONS
function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoborda() {
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){ 
    velocidadexBolinha *= -1
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1
  }  
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 15
    }

}

