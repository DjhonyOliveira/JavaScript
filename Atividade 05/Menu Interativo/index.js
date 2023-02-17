alert("Bem vindo ao menu interativo")

let menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")


do {
    switch (menu) {
        case "A" :
            alert("Você entrou no sistema!")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "B" :
            alert("Usuário Criado!")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "C" :
            alert("Esta liberado a navegação pelo sistema!")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "D" :
            alert("Chat Web Liberado!")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
    }
} while (menu != "E")
    alert("Sistema Encerado!")


// corrigido

let opcao = "5"

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nEscolha uma das opções a baixo:" +
        "\n1. Opção um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Opção Cinco"
    )

    switch (opcao) {
        case "1" :
            alert("Você escolheu a opção 1")
            break
        case "2" :
            alert("Você escolheu a opção 2")
            break
        case "3" :
            alert("Você escolheu a opção 3")
            break
        case "4" :
            alert("Você escolheu a opção 4")
            break
        case "5" :
            alert("Você escolheu encerarrar.")
            alert("Encerando...")
            break
        default:
            alert("Opção inválida")

    }

} while (opcao !== "5")
