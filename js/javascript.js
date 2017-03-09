var casas = [
  [0, 2, 5, 6],
  [10, 4, 3, 15],
  [14, 8, 9, 7],
  [13, 1, 11, 12]
];

function atualiza(){
  for (var l = 0; l < casas.length; l++) {
    var linha = casas[l];
    for (var c = 0; c < linha.length; c++) {
      casa = linha[c];
      var divAtual = divCasas.children[casa];
      divAtual.style.left=c*150 + "px";
      divAtual.style.top=l*150 + "px";
    }
  }
}

var divCasas = document.getElementById("tabuleiro");

for (var i = 0; i < 16; i++) {
  var novoDiv = document.createElement('div');
  divCasas.appendChild(novoDiv);
  novoDiv.setAttribute("id", "casa-" + i);
  novoDiv.style.left = (i%4 * 150) + "px";
  novoDiv.innerText = i;
  novoDiv.style.top = (Math.floor(i/4) * 150) + "px";
  novoDiv.addEventListener("click", (function(x, novoDivx){
    return function(){
            console.dir("clicou em "+ x);
            jogada(x);
            atualiza();
            novoDivx.style.backgroundColor = "lightgreen";
    }
  })(i, novoDiv)
  );
}

function troca(linha, coluna, l, c){
  if (linha < 0 || coluna < 0 || linha > 3 || coluna > 3 || casas [linha][coluna] != 0) return false;
  console.log(casas);
  casas[linha][coluna]=casas[l][c];
  casas[l][c] = 0;
  console.log(casas);
  return true;
}

function jogada(x){
  for (l=0; l<4; l++){
    for (c=0; c<4; c++){
      if (casas[l][c]==x){
        if (troca(l, c-1, l, c)) return;
        if (troca(l-1, c, l, c)) return;
        if (troca(l, c+1, l, c)) return;
        if (troca(l+1, c, l, c)) return;
      }
    }
  }
}
