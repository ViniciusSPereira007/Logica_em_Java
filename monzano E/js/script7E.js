let contadora = 1
let soma = 1
let resultado = 1

while (contadora <=6) {
    soma += resultado
    resultado += soma
    contadora++
}
alert(resultado)