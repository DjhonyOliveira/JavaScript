const cadastro = document.querySelector(".cadastrar")
const consultar = document.querySelector(".consultar");
const paci = document.querySelector(".paciente")

var pacientes = []

cadastro.addEventListener('click', ()=>{

    var nome = document.querySelector(".name").value
    var idade = document.querySelector(".age").value
    var peso = document.querySelector(".weight").value
    var altura = document.querySelector(".height").value

    pacientes.push(nome, idade, peso, altura)

})

consultar.addEventListener('click', () =>{

    let dadosPaciente = (
        '<div class="content">' +
            '<div class="pacienteNome">Nome: ' + pacientes[0] + '</div>' +
            '<div class="idadePaciente">Idade: ' + pacientes[1] + '</div>' +
            '<div class="pesoPaciente">Peso: ' + pacientes[2] + '</div>' + 
            '<div class="alturaPaciente">Altura: ' + pacientes[3] + '</div>' +
        '</div>'
    )


    for ( let i = 1; i <= 4; i++) {
        pacientes.shift()
    }

})





