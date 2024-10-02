let totalEleitores = Number(prompt("Digite o total de elitores: "))
let votosBrancos = Number(prompt("Digite o número de votos brancos: "))
let votosNulos = Number(prompt("Digite o número de votos nulos: "))
let votosValidos = Number(prompt("Digite o número de votos válidos: "))
let percBrancos = (votosBrancos * 100) / totalEleitores
let percNulos = (votosNulos * 100) / totalEleitores
let percValidos = (votosValidos * 100) / totalEleitores
 
alert("Percentual de votos brancos: " + percBrancos + "%  Percentual de votos nulos: " + percNulos + "% Percentual de votos válidos: " + percValidos + "%" )
