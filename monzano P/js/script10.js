let conversao = "Conversão de Celsius para Fahrenheit:\n"

for (let celsius = 10; celsius <= 100; celsius += 10) {
    let fahrenheit = (9 * celsius / 5) + 32
    conversao += celsius + "°C = " + fahrenheit + "°F\n"
}
alert(conversao)