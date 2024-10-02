let fibo1 = 1
let fibo2 = 1
let fibonacci = "Série de Fibonacci até o 15º termo:\n" + fibo1 + "\n" + fibo2 + "\n"

for (let i = 3; i <= 15; i++) {
    let proximo = fibo1 + fibo2
    fibonacci += proximo + "\n"
    fibo1 = fibo2
    fibo2 = proximo
}

alert(fibonacci)