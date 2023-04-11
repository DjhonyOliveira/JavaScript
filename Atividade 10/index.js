let candidatosVagas = []
let vagas = []


function criarVaga() {
    // informações para cadastro da vaga
    let nomeVaga = prompt("Qual o nome da vaga?")
    let descricaoVaga = prompt("Descrição da Vaga:")
    let dataLimite = prompt("Qual a data máxima da vaga?")
    // confirmação dos dados
    let confirmacao = confirm(
        'Você confirma os seguintes dados?\n' +
        '\nNome da Vaga: ' + nomeVaga +
        '\nDescrição da Vaga: ' + descricaoVaga +
        '\nData Limite de Inscrição: ' + dataLimite
    )
    // objeto separando cada vaga criada
    var vagaCriada = {}

    vagaCriada.nome = nomeVaga
    vagaCriada.descricao = descricaoVaga
    vagaCriada.data = dataLimite

    // validação de push para array "vagas" com a confirmação dos dados criados       
    if (confirmacao) {
        vagas.push(vagaCriada)      
    } 
          
}

function listasVagas() {
    // definição das variaveis usadas para retornar informação de vaga
    const nomeVagas = vagas.map(function(nomeVaga){
        return nomeVaga.nome
    })

    // apresentação das vagas individuais por alert
    for(i = 0; i < nomeVagas.length; i++) {

        const quantiIsnc = candidatosVagas.filter(function (quantidade) {
            return quantidade.nomeDaVaga === nomeVagas[i]
        })

        alert(i + 1 + ")" + " Vaga de: " + nomeVagas[i] +
            '\nQuantidade de candidatos inscritos: ' + quantiIsnc.length
        ) 
              
    }
}

function visualizarVaga() {

    let i = parseFloat(prompt("Qual o numero da vaga?"))
    i = i - 1


    alert("Nome da vaga: " + vagas[i].nome + ";" + 
        "\nDescrição: " + vagas[i].descricao + ";" +
        "\nData Limite de Inscrição: " + vagas[i].data + '\n' +
        '\nQuantidade de pessoa inscritas: ' + quantiIsnc.length
    )

}

function cadastrarPessoa() {
    const nomeCanditato = prompt("Qual o nome do candidato a vaga?")
    let i = parseFloat(prompt("Qual o numero da vaga?"))
    i = i - 1


    const confirmInscricao = confirm(
        'Você confirma a inscrição de ' + nomeCanditato +
        '\nNa vaga de: ' + vagas[i].nome +
        '\n' + vagas[i].descricao + '\n' +
        '\nCom o prazo final de inscrição para: ' + vagas[i].data
    )

    let inscritoVaga = {}
    inscritoVaga.nome = nomeCanditato
    inscritoVaga.nomeDaVaga = vagas[i].nome

    if (confirmInscricao) {
        candidatosVagas.push(inscritoVaga)
    }
}

let menu = ""

do {
    // menu interativo do sistema
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
        // validação de opção numérica retornada no menu e busca das funções
    switch (menu) {
        case "1":
            listasVagas()
            break
        case "2":
            criarVaga()
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            cadastrarPessoa()
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