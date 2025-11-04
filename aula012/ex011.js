var vtmc = 23
console.log(`Você tem, ${vtmc} anos de idade`)
if (vtmc < 16 ) {
    console.log('Não vota')
} else if (vtmc < 18 || vtmc >= 65) {
    console.log('Seu voto é opcional !')
} else {
    console.log('Voto Obrigatorio !')
} 