// if else

// let numero = 0

// if (numero > 0) {
//   console.log('Número positivo.')
// } else if (numero == 0) {
//   console.log('Número é igual a zero.')
// } else {
//   console.log('Número negativo.')
// }

// Operador Ternário Para atribuição condicional de valor o JavaScript possui um operador que permite fazer uma if else inline, isto é, em uma única linha. Operador ternário é representado por ? (interrogação).
// : (dois pontos) indica else

// let x = 10
// let paridade = x % 2 == 0 ? 'par' : 'impar'
// console.log(paridade)

// switch case

let sinal = 'verde'
switch (sinal) {
  case 'verde':
    console.log('passagem livre')
    break
  case 'amarelo':
    console.log('atenção')
    break
  case 'vermelho':
    console.log('não ultrapase')
    break
  default:
    console.log('sinal inválido.')
}
