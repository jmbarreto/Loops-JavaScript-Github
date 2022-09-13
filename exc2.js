/*
Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR)
*/
const prompt = require('prompt-sync')()
let Npar = 0
let Nimpar = 0
for (let i = 0; i < 10; i++) {
    const textoNumero = prompt ('Put a number: ')
    const numero = Number(textoNumero)
       if (numero % 2 == 1) {
        Nimpar++     
       }else if (numero % 2 == 0){
         Npar++
       }
       console.log(`o total de números impares é ${Nimpar}`)
       console.log(`o total de números pares é de ${Npar} `)


}

    
    

