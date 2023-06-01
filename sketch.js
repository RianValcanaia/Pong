let chanceDeErrar = 0;

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
                  //BOLINHA
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoborda();
  bolinhaNaoFicaPresa()
  
                  //RAQUETE
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  colisaoRaquetebiblioteca(xRaquete, yRaquete);
  
                  //OPONENTE
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
  //verificaColisaoRaqueteOponente();
  colisaoRaquetebiblioteca (xRaqueteOponente, yRaqueteOponente);
  //verificaColisaoRaquete(); 
  //movimentaRaqueteOponenteMultiplayer() 
 
                  //PLACAR
  incluiPlacar()
  marcaponto()
}