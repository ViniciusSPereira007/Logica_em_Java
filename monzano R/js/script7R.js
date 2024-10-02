let contadora = 1
let resultado = ""

do {
    if (contadora % 2 !== 0) {
        let fatorial = 1
        let contador = 1

        do {
            fatorial *= contador
            contador++
        } while (contador <= contadora)

        resultado += "Fatorial de " + contadora + " é: " + fatorial + "\n"
    }
    contadora++
} while (contadora <= 10)

alert(resultado)
