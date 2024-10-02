let horaInicio = Number(prompt("Digite a hora de início do jogo (0 a 23):"));
let horaFim = Number(prompt("Digite a hora de fim do jogo (0 a 23):"));

let duracao;


if (horaInicio < horaFim) {
    duracao = horaFim - horaInicio; 
} else {
    duracao = (24 - horaInicio) + horaFim; 
}


alert("A duração do jogo foi de " + duracao + " hora(s).");
