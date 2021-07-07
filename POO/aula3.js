//Aula 03 - Atributos

class Quadrado {
  constructor(base, altura) {
    // Apresentar mesnagem de erro caso a a base ou a altura não seja do tipo numérico.
    // operador ou = ||
    if (isNaN(base) || isNaN(altura)) throw 'Informação não numérica'
    //atributos obrigatórios
    this.base = base
    this.altura = altura
    //atributos opcionais
    this.cor = undefined
  }
}
const quadrado = new Quadrado(11, 11)

quadrado.cor = 'blue'
console.log(quadrado)
