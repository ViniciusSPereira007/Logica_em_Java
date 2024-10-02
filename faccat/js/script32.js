let time1 = prompt("Digite o nome do primeiro time:");
let golsTime1 = parseInt(prompt(`Quantos gols o ${time1} marcou?`));

let time2 = prompt("Digite o nome do segundo time:");
let golsTime2 = parseInt(prompt(`Quantos gols o ${time2} marcou?`));

if (golsTime1 > golsTime2) {
    alert(`O vencedor é: ${time1}`);
} else if (golsTime2 > golsTime1) {
    alert(`O vencedor é: ${time2}`);
} else {
    alert("EMPATE");
}