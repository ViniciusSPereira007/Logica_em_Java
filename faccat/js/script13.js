let numeroMacas = Number(prompt("Digite o número de maçãs compradas:"))


let precoPorUnidade;


if (numeroMacas < 12) {
    precoPorUnidade = 1.30
} else {
    precoPorUnidade = 1.00
}

let custoTotal = numeroMacas * precoPorUnidade


alert("O custo total da compra é: R$ " + custoTotal.toFixed(2))
