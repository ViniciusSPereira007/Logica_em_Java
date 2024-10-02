let base = Number(prompt("Digite o valor da base:"))
let expoente = Number(prompt("Digite o valor do expoente:"))

let resultado = 1
let contador = 0

while (contador < expoente) {
    resultado *= base 
    contador++      
  }
  

  alert("A base "+ base + " elevado a " + expoente + " é: " + resultado)