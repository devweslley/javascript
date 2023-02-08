var idade = 10
console.log('')
console.log(`Você tem ${idade} anos!`)
if (idade < 16) {
    console.log('-----------')
    console.log(' NÃO VOTA! ')
    console.log('-----------')
} else if (idade < 18 || idade > 65) {
        console.log('--------------------')
        console.log(' O VOTO É OPCIONAL! ')
        console.log('--------------------')
} else {
    console.log('-----------------------')
    console.log(' O VOTO É OBRIGATÓRIO! ')
    console.log('-----------------------')
}