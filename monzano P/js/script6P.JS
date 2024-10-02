let divisiveisPor4 = "Números divisíveis por 4 menores que 200:\n"

for (let i = 1; i < 200; i++) {
    if (i % 4 === 0) {
        divisiveisPor4 += i + "\n"
    }
}

alert(divisiveisPor4)