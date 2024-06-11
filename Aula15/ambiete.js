let num = [5, 8, 2, 9, 3]

num[5] = 6
num.push(7)
num.sort()

console.log(`Nosso vetor é o ${num}`) //Mostra todos os Valores da variável!

console.log(`Nosso vetor tem ${num.length} posições!`) //Mostra o número de Elementos.

console.log(num[3]) //Mostra o valor da determinada posição.

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}.`) // seleciona a posição pelo valor atribuido a ela.