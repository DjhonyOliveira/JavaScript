let candidatos = []
let vagas =[]


function criarVaga(){
    let nomeVaga = prompt("Qual o nome da vaga?")
    let descricaoVaga = prompt("Descrição da Vaga:")
    let dataLimite = prompt("Qual a data máxima da vaga?")

    confirm(
        'Você confirma os seguintes dados?\n' +
        '\nNome da Vaga: ' + nomeVaga +
        '\nDescrição da Vaga: ' + descricaoVaga +
        '\nData Limite de Inscrição: ' + dataLimite
    )

    var vagaCriada = {}

    vagaCriada.nome = nomeVaga
    vagaCriada.descricao = descricaoVaga
    vagaCriada.data = dataLimite

    vagas.push(vagaCriada)
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

            break
        case "2":
            criarVaga()
            break
        case "3":

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