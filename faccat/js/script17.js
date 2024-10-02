let valor1 = Number(prompt("Digite o primeiro valor:"))
let valor2 = Number(prompt("Digite o segundo valor:"))

if(valor1 > valor2){
    alert("A ordem e: " +valor1+ "," +valor2)
}
else if (valor1 === valor2){
    alert("Os valores sao iguas")
}
else{
    alert("A ordem e: " +valor2+ "," +valor1)
}