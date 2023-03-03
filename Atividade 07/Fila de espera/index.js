function cadastro() {

    var nome = document.querySelector(".name").value
    var idade = document.querySelector(".age").value
    var peso = document.querySelector(".weight").value
    var altura = document.querySelector(".height").value

    let pacientes = []

   pacientes.push(nome)
   pacientes.push(idade)
   pacientes.push(peso)
   pacientes.push(altura)

    console.log(pacientes)

    const consultar = document.querySelector(".consultar");
    
    consultar.addEventListener('click', () =>{
        alert(pacientes)
    })

}


