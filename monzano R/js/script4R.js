let quadrado = 1
let grains = 0
let contadora = 1

do {
    grains += quadrado 
    quadrado *= 2 
    contadora++ 
} while (contadora <= 64) 

alert("Total de grãos de trigo no tabuleiro: " + grains)