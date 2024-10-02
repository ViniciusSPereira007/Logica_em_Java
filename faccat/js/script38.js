let codigoUsuario = parseInt(prompt("Digite o código do usuário:"))

if (codigoUsuario !== 1234) {
    alert("Usuário inválido!")
} else {

    let senha = parseInt(prompt("Digite a senha:"))
    

    if (senha === 9999) {
        alert("Acesso permitido")
    } else {
        alert("Senha incorreta")
    }
}
