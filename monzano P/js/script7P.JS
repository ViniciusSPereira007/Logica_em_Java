let potenciasDe3 = "Potências de 3 do expoente 0 ao 15:\n"
let resultado = 1

for (let expoente = 0; expoente <= 15; expoente++) {
    potenciasDe3 += "3^" + expoente + " = " + resultado + "\n"
    resultado *= 3
}

alert(potenciasDe3)