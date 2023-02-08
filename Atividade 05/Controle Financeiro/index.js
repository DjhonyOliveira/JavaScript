alert("Bem vindo ao controle financeiro!!")

let dinheiro = prompt("Qual valor você tem disponivel atualmente?")
let movimentacao = prompt("Você tem: " + dinheiro + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")


let dinheiroNumber = parseFloat(dinheiro)
let dinheiroCalculado = []

do {
    switch (movimentacao) {
        case "a" :
            let soma = prompt("Qual valor deseja adicionar?")
            let somaNumber = parseFloat(soma)
            alert("Agora voê tem o valor de: " + (dinheiroNumber + somaNumber) + " R$")
            dinheiroCalculado.push(dinheiroNumber + somaNumber)
            movimentacao = prompt("Você tem: " + dinheiroCalculado + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")
        break
        case "b" :
            let subtracao = prompt("Qual valor deseja subtrair?")
            let subtracaoNumber = parseFloat(subtracao)
            alert("Agora voê tem o valor de: " + (dinheiroNumber - subtracaoNumber) + " R$")
            dinheiroCalculado.push(dinheiroNumber + subtracaoNumber)
            movimentacao = prompt("Você tem: " + dinheiroCalculado + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")
        break
    }
} while (movimentacao != "c")
alert("Você removeu todo seu dinheiro")