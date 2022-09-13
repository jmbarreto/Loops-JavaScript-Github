/*Crie um programa que leia um número do teclado até que
 encontre um número igual a zero. No final, mostre a 
 oma dos números digitados.(DO...WHILE)
*/
const prompt = require ('prompt-sync')()
 let somaNumero = 0
 let numeroTexto = prompt ('digite um número: ')
 let numero = Number
    do{
        numero = Number(numeroTexto)
        somaNumero = numero + somaNumero  
        numeroTexto = prompt ('digite um número: ')    
    }while (numero != 0){
    
    }
    console.log(`Soma dos números foi de: ${somaNumero}`)
    
