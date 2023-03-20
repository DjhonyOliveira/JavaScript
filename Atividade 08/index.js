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
        "\nPara anunciar seu imovel, digite 1;" +
        "\nPara visualizar os imoveis já registrados, digite 2;" +
        "\nPara sair do serviço, digite 3"
    )

    switch (menu) {
        case "1" :
            const novoImovel = {}

            novoImovel.nome = prompt("Informe o nome do proprietário:")
            novoImovel.quarto = prompt("Quantos quartos possui?")
            novoImovel.banheiro = prompt("Quantos banheiros possui?")
            novoImovel.garagem = prompt("Possui garragem?")

            const confirmacao = confirm(
                "Salvar este Imovel?\n" +
                "\nProsprietário: " + novoImovel.nome +
                "\nQuantidade de quartos: " + novoImovel.quarto +
                "\nQuantidade de banheiros: " + novoImovel.banheiro +
                "\nPossui Garagem: " + novoImovel.garagem
            )

            if (confirmacao) {
                imoveis.push(novoImovel)
                alert("Imovel salvo com sucesso!!!")
            } else {
                alert("Voltando ao Menu...")
            }

            break
        case "2" :
            if (imoveis.length > 0) {
               for(let i = 0; i < imoveis.length; i++) {
                    alert(
                        "imovel:" + (i + 1) +
                        "\nProprietário: " + imoveis[i].nome +
                        "\nQuartos: " + imoveis[i].quarto +
                        "\nBanheiros: " + imoveis[i].banheiro +
                        "\nGaragem: " + imoveis[i].garagem
                    )
               }
            } else {
                alert("Não temos imoveis registrados até o momento!")
            }
            
            break
        case "3" :
            alert("Serviço Encerado...")        
            break
        default :
            alert("Opção inválida, tente novamente!")
    }


} while (menu != 3)
    