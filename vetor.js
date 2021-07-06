// let vetor = [10, 20, 30, 40, 50]
// vetor[2] = '30' // tipo string
// console.log(vetor)

//adicioar elementos ai final do vetor: nomedovetor.push(i)
// let vetor = []
// for (let i = 0; i < 10; i++) {
//   vetor.push(i) condição do for.
// }
// console.log(vetor)

//percorrer o vetor

// let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// for (let i = 0; i < vetor.length; i++) {
//   console.log(vetor[i])
// }

// let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90]

// for (let numero of vetor) {
//   console.log(numero)
// }

// let vetor = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// for (let indice in vetor) {
//   console.log(vetor[indice])
// }

//matriz

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
for (let linha of matriz) {
  for (let elemento of linha) {
    console.log(elemento)
  }
}
