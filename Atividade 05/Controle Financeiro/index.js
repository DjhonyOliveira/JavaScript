alert("Bem vindo ao controle financeiro!!")

let dinheiro = prompt("Qual valor você tem disponivel atualmente?")
let movimentacao = prompt("Você tem: " + dinheiro + " R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")


let dinheiroNumber = parseFloat(dinheiro);
let dinheiroCalculado = [];

do {
    switch (movimentacao) {
        case "a" :
            let soma = prompt("Qual valor deseja adicionar?")
            let somaNumber = parseFloat(soma)
            alert("Agora você tem o valor de: " + (dinheiroNumber + somaNumber) + " R$")
            dinheiroCalculado.push(dinheiroNumber + somaNumber)
            movimentacao = prompt("Você tem: " + final + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")
        break
        case "b" :
            let subtracao = prompt("Qual valor deseja subtrair?")
            let subtracaoNumber = parseFloat(subtracao)
            alert("Agora você tem o valor de: " + (dinheiroCalculado - subtracaoNumber) + " R$")
            dinheiroCalculado.push(dinheiroNumber - subtracaoNumber)
            movimentacao = prompt("Você tem: " + final + "R$ Qual operação deseja realizar?\nAdiciona digite 'a'\nRemover um valor X digite 'b'\nRemover total digite 'c'")
        break
    }
} while (movimentacao != "c")
alert("Você removeu todo seu dinheiro")



// corrigido



let saldo = prompt("Informe o valor inicial")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt(
        "Saldo Disponivel: R$ " + saldo +
        "\n1. Adicionar dinheiro" +
        "\n2. Remover dinheiro" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("informe o valor a ser adicionado"))
            break
        case "2":
            saldo -= prompt("informe o valor a ser adicionado")
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida!")
    }
} while (opcao !== "3")