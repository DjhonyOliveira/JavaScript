let pessoa = {
    nome: "Djonatan",
    idade: 22,
    dizerOi() {  // funcion dentro de objeto
        console.log("Oi" + this.nome) // chama o campo selecionado do objeto usando o this + opção do objeto
    }
}

console.log(pessoa)

pessoa.dizerOi() // retornar function do objeto

