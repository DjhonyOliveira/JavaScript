const cadastro = document.querySelector(".cadastrar")
const consultar = document.querySelector(".consultar");
const consultados = document.querySelector(".consultados");
const paci = document.querySelector(".paciente")
const consult = document.querySelector(".paciConsult")

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
            '<div class="pacienteNome">' + 
                '<p>Nome: ' + pacientes[0] + '</p>' +
            '</div>' +
            '<div class="idadePaciente">' +
                '<p>Idade: ' + pacientes[1] + '</p>' +
            '</div>' +
            '<div class="pesoPaciente">' + 
                '<p>Peso: ' + pacientes[2] + '</p>' + 
            '</div>' + 
            '<div class="alturaPaciente">' +
                '<p>Altura: ' + pacientes[3] + '</p>' + 
            '</div>' +
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
        pacientes.shift()
    }

})

consultados.addEventListener('click', ()=> {
    for (let i = 0; i <= pacientesConsultados.length; i++) {
         var paciConsultados = (
            '<div class="consultado">' + pacientesConsultados[i] + '</div>'
        )
    }

    consult.innerHTML = paciConsultados
})





