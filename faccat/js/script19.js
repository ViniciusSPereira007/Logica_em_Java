let horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"))
let salarioPorHora = parseFloat(prompt("Digite o salário por hora:"))

const horasNormaisPorMes = 40 * 4

let salarioTotal;

if (horasTrabalhadas > horasNormaisPorMes) {

    let horasExtras = horasTrabalhadas - horasNormaisPorMes
    let valorHoraExtra = salarioPorHora * 1.5
    salarioTotal = (horasNormaisPorMes * salarioPorHora) + (horasExtras * valorHoraExtra)
} else {

    salarioTotal = horasTrabalhadas * salarioPorHora
}


console.log(`O salário total do funcionário é: R$ ${salarioTotal.toFixed(2)}`)
