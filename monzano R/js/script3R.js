let contador = 1 
let resultados = '' 

do {
  if (contador % 4 === 0) { 
    resultados += contador + '\n' 
  }
  contador++ 
} while (contador < 200)

alert("Números divisíveis por 4 menores que 200:\n" + resultados) 
