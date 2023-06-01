//PLACAR DO JOGO
let meuspontos = 0 ;
let pontosOponente = 0;


function incluiPlacar(){
  stroke (250)
  textSize (20)
  textAlign (CENTER)
  fill(color(255,140,0))
  rect (150,10,40,20)
  fill(255)
  text (meuspontos, 170, 26)
  fill(color(255,140,0))
  rect (450,10,40,20) 
  fill(255)
  text (pontosOponente, 470, 26)

}

function marcaponto() {
  if (xBolinha > 591 ){meuspontos += 1;
      ponto.play()
                      }
      
  if (xBolinha < 11){pontosOponente += 1;
      ponto.play()}
}