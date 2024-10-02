let fatorialResultado = "Fatorial dos valores ímpares de 1 a 10:\n"

for (let i = 1; i <= 10; i += 2) {
    let fatorial = 1
    for (let j = 1; j <= i; j++) {
        fatorial *= j
    }
    fatorialResultado += i + "! = " + fatorial + "\n"
}

alert(fatorialResultado)