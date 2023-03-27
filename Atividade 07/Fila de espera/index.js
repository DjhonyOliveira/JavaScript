const cadastro = document.querySelector(".cadastrar")
const consultar = document.querySelector(".consultar");
const consultados = document.querySelector(".consultados");
const paci = document.querySelector(".paciente")

let pacientes = []
let pacientesConsultados = []

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


    if (pacientes.length > 0) {
        
        paci.innerHTML = dadosPaciente
        
        let consultados = {}
        consultados.nome = pacientes[0]
        consultados.idade = pacientes[1]
        consultados.peso = pacientes[2]
        consultados.altura = pacientes[3]
    
        pacientesConsultados.push(consultados)

    } else {

        alert("Todos os pacientes já consultados!")

    }

   

    for ( let i = 1; i <= 4; i++) {
        pacientes.shift(consultados)
    }

})

consultados.addEventListener('click', () =>{

})





