let impares = "Números ímpares de 0 a 20:\n"

for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        impares += i + "\n"
    }
}

alert(impares)