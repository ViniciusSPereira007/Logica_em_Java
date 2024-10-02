let nome = prompt("Digite o seu nome:");
let altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.75):"));
let sexo = prompt("Digite o seu sexo (M para masculino ou F para feminino):").toUpperCase();


let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    alert("Sexo inválido. Por favor, informe 'M' para masculino ou 'F' para feminino.");
}


if (pesoIdeal) {
    alert("Olá, " + nome + " Seu peso ideal é: " +pesoIdeal+ "kg");
}
