alert("Bem vindo ao controle financeiro!!")

let dinheiro = prompt("Qual valor você tem disponivel atualmente?")
let movimentacao = prompt("Você tem: " + dinheiro + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")

if (movimentacao === "a") {
    let soma = prompt("Qual valor deseja adicionar?")
} else if (movimentacao == "b") {
    let subtracao = prompt("Qual valor deseja subtrair?")
}

let somaNumber = parseFloat(soma)
let dinheiroNumber = parseFloat(dinheiro)
let subtracaoNumber = parseFloat(subtracao)


do {
    switch (movimentacao) {
        case "a" :
            alert("Agora voê tem o valor de: " + dinheiroNumber + somaNumber + " R$")
        break
        case "b" :
            alert("Agora voê tem o valor de: " + dinheiroNumber + subtracaoNumber + " R$")
        break
    }
} while (movimentacao != "c")
alert("Você removeu todo seu dinheiro")