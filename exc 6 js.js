/*
Escrever um programa que receba vários números inteiros no teclado. E no final imprimir a média dos 
números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)
*/
const prompt = require ('prompt-sync')() 

let numeroTexto
let media = 0
let soma = 0
let i = 0
do {
    let numeroTexto = prompt('digite aqui um número: ')
    numero = Number (numeroTexto) 
    soma = soma + numero;
    if (numero%3===0){
    i++
    }

} while (numero !=0 );

   
    media = soma / i ;
    console.log (`a soma dos número é de: ${soma}`);
    console.log (`a média dos múltiplos de 3 é de : ${media}`);
