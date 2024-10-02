let salarioAtual = Number(prompt("Digite o salario atual: "))
let percentualReajuste = Number(prompt("Digite o percentual de reajuste "))
let salarioFinal =  salarioAtual + (salarioAtual * percentualReajuste / 100)

alert("O novo salário do funcionário é: " +salarioFinal)