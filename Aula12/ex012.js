var agora = new Date()
var hora = agora.getHours()

console.log(`Agora sao exatamente ${hora} horas.`)
if (hora >= 5 && hora < 12) {
    console.log('BOM DIA! ')
} else if (hora <= 18) {
    console.log('BOA TARDE! ')
} else if (hora <= 00) {
    console.log('BOA NOITE! ')
} else {
    console.log('BOA MADRUGADA!')
}