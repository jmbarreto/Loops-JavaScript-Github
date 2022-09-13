/*
Solicitar a idade de várias pessoas e imprimir
: Total de pessoas com menos de 21 anos. Total de pessoas com
 mais de 50 anos. O programa termina quando idade for =-99. (WHILE)
*/
const prompt = require ('prompt-sync')()
let ageText = prompt(`Put a number: `)
ageMaior50 = 0
ageMenor21 = 0
let age = Number (ageText)
while(age != -99){
     ageText = prompt ('Put a number')
     age = Number(ageText)
    if (age > 50) {
        ageMaior50++
    }else if (age < 21){
        ageMenor21++
    }
}
console.log (`Pessoas com menos de 21 anos é de: ${ageMenor21}`)
console.log (`Pessoas com mais de 51 anos é de ${ageMaior50}`)

