function dobro(x) {
    alert("O dobro de " + x + " É" + (x * 2))
}

dobro(5)

/////////////////////////////////////////////////////////////


function comprimento(name) {
    alert("Olá, " + name + "!")
}

comprimento("Djonatan")


//////////////////////////////////////////////////////////////////////////////

function soma(a, b) {
    alert("O resultado da soma é: " + (a + b))
}

soma(7, 6)

//////////////////////////////////////////////////////////////////////////////////

function criarUsuário(nome, email, senha, tipo = "admin") {
    const usuário = {
        nome, // mesmo que nome: nome dentro do objeto
        email,
        senha,
        tipo
    }

    console.log(usuário)
}

criarUsuário("Djonatan", "djonatan@email.com", "1234") // quando chamar função, sempre tem que ser na mesma ordem conforme foi definido no parametro da function




//////////////////////////////////////////////////////////////////////


function muitosParametros()






