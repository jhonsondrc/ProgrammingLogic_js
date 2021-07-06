const vetor = ['10', '20', '30']

//funçaõ para transformar string em número
const stringToInt = x => parseInt(x)
const vetor2 = vetor.map(stringToInt)
console.log(vetor2)

//função para elevar os valores convertidos do vetor ao quadrado.
const vetor3 = vetor2.map(x => x * x)

console.log(vetor3)
