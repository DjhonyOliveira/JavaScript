alert("Bem vindo ao menu interativo")

let menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")


do {
    switch (menu) {
        case "A" :
            alert("Você entrou no sistema")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "B" :
            alert("Usuário Criado")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "C" :
            alert("Esta liberado a navegação pelo sistema")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
        case "D" :
            alert("Você entrou no sistema")
            menu = prompt(" Para entrar no sistema digite 'A'\n Para criar um usuário digite 'B'\n Para navegar no site 'C'\n Para conversar com alguém 'D'\n Para sair 'E'")
            break
    }
} while (menu == "E")
    alert("Sistema Encerado!")
