alert(
    "Seja bem vindo ao Meu Imovel!!" +
    "\nPara começar siga os passos a seguir:"
    )

const imoveis =  []
let menu = ""

do {
    
    menu = prompt(
        "Atualmente temos um total de " + imoveis.length + " imoveis cadastrados em nosso sistema!\n" +
        "\nEscolha entre as 3 opções a baixo usando apenas o digito 1, 2 ou 3\n " +
        "\nPara visualizar os imoveis já registrados, digite 1;" +
        "\nPara anuncias seu imovel, digite 2;" +
        "\nPara sair do serviço, digite 3"
    )

    switch (menu) {
        case "1" :

            if (imoveis.length > 0) {

            } else {
                alert("Não temos imoveis registrados até o momento")
            }

            break
        case "2" :
            
            break
        case "3" :
            alert("Serviço Encerado...")        
            break
        default :
            alert("Opção inválida, tente novamente.")
    }


} while (menu !== 3)
    