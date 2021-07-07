// Aula 04 - Métodos

class Quadrado {
  constructor(base, altura) {
    // Apresentar mensagem de erro caso a a base ou a altura não seja do tipo numérico.
    // operador ou = ||
    if (isNaN(base) || isNaN(altura)) throw 'Informação não numérica'
    // atributos obrigatórios
    this.base = base
    this.altura = altura
    //atributos opcionais
    this.cor = undefined
  }
  calculaArea() {
    return this.base * this.altura
  }

  //criar método para alterar dimensões do quadrado
  duplicaBase() {
    this.base = 2 * this.base
  }
}
const quadrado = new Quadrado(11, 12)
quadrado.duplicaBase()
console.log(quadrado.calculaArea())
