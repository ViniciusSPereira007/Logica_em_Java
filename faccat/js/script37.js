let pedido = (prompt("Digite qual fruta deseja comprar: (Maça ou Morango)"))
let quantKG = parseFloat(prompt("Digite o valor em KG"))
let maca
let morango
let desconto
let valorfinal

if (pedido === 'Morango') {
    if (quantKG <= 5) {
        morango = 2.50
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG <= 7) {
        morango = 2.20
        valorfinal = morango * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG >= 8) {
        morango = 2.20
        desconto = (quantKG * morango) * 0.1
        valorfinal = (quantKG * morango) - desconto
        alert("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    }
}
if (pedido === 'Maca') {
    if (quantKG <= 5) {
        maca = 1.80
        valorfinal = Maca * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG <= 7) {
        maca = 1.50
        valorfinal = mmaca * quantKG
        alert ("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    } else if (quantKG >= 8) {
        maca = 1.50
        desconto = (quantKG * maca) * 0.1
        valorfinal = (quantKG * maca) - desconto
        alert("Seu pedido foi de " + quantKG + "kg de morango" + " e o valor da compra foi de " + valorfinal.toFixed(2))
    }
}