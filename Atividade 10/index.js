let candidatosVagas = []
let vagas =[]


function criarVaga() {
    let nomeVaga = prompt("Qual o nome da vaga?")
    let descricaoVaga = prompt("Descrição da Vaga:")
    let dataLimite = prompt("Qual a data máxima da vaga?")

    let confirmacao = confirm(
        'Você confirma os seguintes dados?\n' +
        '\nNome da Vaga: ' + nomeVaga +
        '\nDescrição da Vaga: ' + descricaoVaga +
        '\nData Limite de Inscrição: ' + dataLimite
    )


    var vagaCriada = {}
    vagaCriada.nome = nomeVaga
    vagaCriada.descricao = descricaoVaga
    vagaCriada.data = dataLimite

    for (i = -1 ; i < vagas.length; i++) {
        vagaCriada.indice = i + 1
    }
    
    if (confirmacao) {
        vagas.push(vagaCriada)      
    }
          
}

function listasVagas() {
    const nomeVagas = vagas.map(function(nomeVaga){
        return nomeVaga.nome
    })

    
    for(i = 0; i < nomeVagas.length; i++) {
        alert(i + 1 + ")" + 
        "\nVaga de: " + nomeVagas[i])       
    }
}

function visualizarVaga(i) {

    // revalidar, esta pegando incoreto, pega apenas a prieira letra de cada .map

    const nome = vagas.map(function (nomeVaga){
        return nomeVaga.nome[i]
    })
    const descricao = vagas.map(function (descricaoVaga){
        return descricaoVaga.nome[i]
    })
    const tempo = vagas.map(function (tempoVaga){
        return tempoVaga.nome[i]
    })

    alert("Nome da vaga: " + nome + ";" + 
        "\nDescrição: " + descricao + ";" +
        "\nData Limite de Inscrição: " + tempo
    )

}








let menu = ""

do {

    menu = prompt(
        'Bem vindo a seleção de vagas!!' +
        '\nA seguir escolha uma das opções para dar sequencia:\n' +
        '\nListas vagas disponiveis, opção(1);' +
        '\nCriar nova vaga, opção(2);' +
        '\nVisualizar vagas, opção(3);' +
        '\nInscrever candidato, opção(4);' +
        '\nExcluir vaga, opção(5);' +
        '\nSair, opção(6)'
    )

    switch (menu) {
        case "1":
            listasVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
            const i = parseFloat(prompt("Qual o numero da vaga?"))
            visualizarVaga(i)
            break
        case "4":

            break
        case "5":

            break
        case "6":
            alert("Saindo...")
            break
        default :
            alert("Opção errada, tente novamente!!!")
    }

} while (menu != "6")