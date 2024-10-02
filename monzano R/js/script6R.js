let somatorio = 0 
let contador = 0 
let valor 

do {
    valor = Number(prompt("Digite um valor positivo (ou um valor negativo para sair):")) 

    if (valor >= 0) { 
        somatorio += valor 
        contador++ 
    }
} while (valor >= 0) 


let media = (contador > 0) ? (somatorio / contador) : 0


alert("Total do somatório: " + somatorio + 
      "\nMédia aritmética: " + media + 
      "\nTotal de valores lidos: " + contador)
