let nome = 'Djonatan'

console.log(nome)
console.error(nome)
console.warn(nome)

// window representa a pagina no geral

// gera um alerta na pagina
window.alert(nome) 


// retorna na tela um campo de texto para inserir o nome (exemplo);
nome = window.prompt("Insira o seu nome:")

// retona o valor descito no cod a cima no console do navegador
console.log(nome)

// opção para confirmar alguma ação
let confirmacao = window.confirm("Confirma essa ação?")
// ira retornar sobre a confirmação a cima em booleano (false or true)
console.log(confirmacao)

// comandos que pertencem ao window, não precisa necessáriamente conter o "window" no inicio do cod

alert("Olá mundo")
prompt("Olá")
confirm("Confirmar?")
