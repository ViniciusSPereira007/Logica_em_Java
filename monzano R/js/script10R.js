let dividendo
let divisor
let quociente = 0

do {
    dividendo = Number(prompt("Digite o dividendo: "))
    divisor = Number(prompt("Digite o divisor: "))
    
    if (divisor === 0) {
        alert("Divisão por zero não é permitida")
    } else {
        while (dividendo >= divisor) {
            dividendo -= divisor
            quociente++
        }
        alert("O resultado da divisão é: " + quociente)
    }
} while (divisor === 0)






