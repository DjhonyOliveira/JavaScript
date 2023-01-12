const nomePersonagem01 = prompt("Qual o nome de seu personagem?")
const poder = prompt("Qual o poder de seu personagem?")

const nomePersonagem02 = prompt("Qual o nome de seu personagem?")
const vida = prompt("Quanto que vida que o personagem possui?")
const poderDefesa = prompt("Qual o poder de defesa do personagem?")
const escudo = prompt("Possui escudo?")

if (poder > poderDefesa && escudo === "não" || "Não"){
    alert("Dano ao Personagem = " + poder - poderDefesa)
}