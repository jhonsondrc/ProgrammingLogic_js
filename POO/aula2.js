// Aula 02 - Classe e Construtor

class Pessoa {
  //método
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
}

const pessoa1 = new Pessoa('Carlos', 20)
pessoa1.idade = 21
console.log(pessoa1)
const pessoa2 = new Pessoa('Maria', 31)

console.log(pessoa2)
