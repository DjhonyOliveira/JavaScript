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
            '<h1 class="text-center" style="color: #0d6efd">Proximo a ser consultado:</h1>' +
            '<div class="pacienteNome text-center mt-5">' + 
                '<p><b>Nome:</b> ' + pacientes[0] + '</p>' +
            '</div>' +
            '<div class="idadePaciente text-center">' +
                '<p><b>Idade:</b> ' + pacientes[1] + '</p>' +
            '</div>' +
            '<div class="pesoPaciente text-center">' + 
                '<p><b>Peso:</b> ' + pacientes[2] + '</p>' + 
            '</div>' + 
            '<div class="alturaPaciente text-center">' +
                '<p><b>Altura:</b> ' + pacientes[3] + '</p>' + 
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

    var nomes = pacientesConsultados.map(function(pessoaNome) {
        return pessoaNome.nome
    })

    var idades = pacientesConsultados.map(function(pessoaIdade){
        return pessoaIdade.idade
    })
      
    var pesos = pacientesConsultados.map(function(pessoaPeso){
        return pessoaPeso.peso
    })

    var alturas = pacientesConsultados.map(function(pessoaAltura){
        return pessoaAltura.altura
    })

    for (var i = 0; i < nomes.length; i++){
        var nomePacientes = nomes[i]
        var idadePacientes = idades[i]
        var pesoPacientes = pesos[i]
        var alturaPacientes = alturas[i]
    }

    var paciConsultados = (
        '<div class="content">'  +
            '<h3 class="text-center mt-3" style="color: #0d6efd">Pacientes já consultados:</h3>' +
            '<div class="consultado nomeConsultado text-center mt-5">' +
                '<p><b>Nome: </b>' + nomePacientes + '</p>' +
            '</div>' +
            '<div class="consultado idadeConsultado text-center">' +
                '<p><b>Idade: </b>' + idadePacientes + '</p>' +
            '</div>' +
            '<div class="consultado pesoConsultado text-center">' +
                '<p><b>Peso: </b>' + pesoPacientes + '</p>' +
            '</div>' +
            '<div class="consultado alturaConsultado text-center">' + 
                '<p><b>Altura: </b>' +alturaPacientes + '</p>' +
            '</div>' +
        '</div>'
    )

    consult.innerHTML = paciConsultados


});


