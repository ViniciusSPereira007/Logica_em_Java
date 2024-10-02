let anoAtual = Number(prompt("Digite o ano atual: "))
let anoNasc = Number(prompt("Digite o ano de nascimento: "))
let votar = anoAtual - anoNasc

if(votar >= 18){
    alert("Voce pode votar" )
}
else{
    alert("Voce nao pode votar")
}