let base = Number(prompt("Digite a base:"))
let expoente = Number(prompt("Digite o expoente:"))
let potencia = 1

for (let i = 1; i <= expoente; i++) {
    potencia *= base
}

alert(base + " elevado a " + expoente + " é: " + potencia)