const prompt = require('prompt-sync')()

let i = 0 
let qtdCalmas = 0
let qtdMnervosas = 0
let qtdHagressivos = 0
let qtdOCalmos
let qtdNervosos40 = 0
let qtdCalmos18 = 0

while( i < 3 ){
    const idadeText = prompt('Digite sua idade: ')
    const idade = Number (idadeText)
    console.log ('Escolha o sexo: \n\n')
    console.log ('1 - homem\n')
    console.log ('2 - mulher\n')
    console.log ('3 outros\n')
    const sexoText = prompt ('Escolha seu sexo')
    const sexo = Number (sexoText)
    console.log ('Escolha um humor entre : \n')
    console.log ('1 - calmo')
    console.log ('2 - nervoso')
    console.log ('3 - agressivo')
    const humorText = prompt ('Escolha seu estado')
    const humor = Number(humorText)

    if (humor == 1){
        qtdCalmas++;
    }
    if (sexo == 2 && humor ==2){
        qtdMnervosas++
    }
    if ( sexo ==1 && humor == 3){
        qtdHagressivos
    }
    if (sexo ==3 && humor ==1){
        qtdOCalmos++
    }
    if (humor ==2 && idade > 40){
        qtdCalmos18++
    }
    if (humor ==1 && idade < 18){
        qtdNervosos40++
    }
    i++
}

console.log(`o total de pessoas calmas é ${qtdCalmas}`)
console.log (`o total de mulher nervosas é ${qtdMnervosas}`)
console.log (`o total de homens agressivos é ${qtdHagressivos}`)
console.log ( `o total de outros calmos é de ${qtdCalmos18}`)
console.log ( `o total de nervsos é de ${qtdNervosos40} `)
console.log (`o total de x é de ${qtdOCalmos}`)
