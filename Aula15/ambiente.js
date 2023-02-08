var num = [5, 8, 2, 9, 3] // váriaveis podem ser declaradas usando o método (var ou let) 

num[4] = 6  // Acrecenta o valor na posição especificada entre colchetes [6]
num.push(7) // Acrecenta o valor especificado entre parentesses sempre no final (7)
num.length  // Mostra o cmprimento de um vetor (quantos valores tem dentro)
num.sort()  // Mostra os valores em ordem crescente
num.indexOf(9) // Vai dizer em qual posição do vetor está o número 9

console.log(`Nosso vetor é o ${num}`) // Printa o vetor na tela fora das chaves

////////////////////////////////////////////////////////////////////////////////////////////

// Vai Mostrar todos os valores dentro do vetor:

for (var pos=0; pos < num.length; pos++) {
    //console.log(valores)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Enquanto 'pos' for menor que o comprimento do vetor 'pos' vai receber +1, O Laço só para quando o 'pos' que foi definido como '0' chegar ao final da lista.

// Outra maneira de fazer utilizando o 'for' é:

 for (var pos in num) {
     console.log(num[pos])
}

var pos = num.indexOf(8)
console.log(`O Valor 8 está na posição ${pos}`)