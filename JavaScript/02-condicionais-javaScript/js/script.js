//OPERADORES ARITIMETICOS
// +  SOMA
// - SUBTRAÇÃO
// * MULTIPLICAÇÃO 
// / DIVISÃO
// (++) (+=) INCREMENTO 
//  --  (-=) DECREMENTO 
// numero = numero + 1
// numero = numero - 1

// CONDICIONAIS

// let idade = 18 

// // //SE(CONDICIONAL)

// // //SE
// if(idade >= 18){
//     console.log("Atingiu maior idade")
// }




//let usuario = "Aderson" // "hudson@gmail.com"
//let senha   = "1234"

// EE == &&
// OU == ||


//if(usuario == "hudson" || usuario == "hudson@gmail.com")


//USUARIO => TRUE                      //SENHA => TRUE
// if((usuario == "Hudson" || usuario == "Aderson") && senha == "1234"){
    
//     console.log('Login sucesso!')

//     if(usuario == "Hudson"){
//         console.log("Acesso admin")
//     }

// }else{
//     console.log('Usuário ou senha invalido!')
// }



//VERIFICANDO NUMERO PAR/IMPAR
// let numero = prompt("Digite um numero")

// if(numero % 2 == 0){
//     alert("Numero par")
// }else{
//     alert("Numero impar")
// }

// // let numero1 = +prompt("Digite o primeiro numero")
// // let numero2 = +prompt("Digite o segundo numero")

// // let numero1 = prompt("Digite o primeiro numero")
// // let numero2 = prompt("Digite o segundo numero")

// //NUMBER() => CONVERTE UMA STRING PARA INTEIRO(NUMERO)

// let result = Number(numero1) + Number(numero2)
// console.log(result)




// let numero1    = prompt("Digite o primeiro numero")
// let numero2    = prompt("Digite o segundo numero")
// let resultado  = 0

// //TRUE             FALSE
// if(numero1 > 0 && numero2 > 0){
    
//     //CONVERTENDO PARA DEPOIS FAZER A SOMA
//     resultado = Number(numero1) + Number(numero2)
//     alert(resultado)

// //SENÃO
// }else{

//     alert("Precisa ser numeros maiores que 0")
// }




//CALCULADORA
//VALOR-1+
//OPERAÇÃO 
//RESULTADO

//1) RECUPERAR OPERAÇÃO DO USUÁRIO **
//2) PRIMEIRO NUMERO **
//3) SEGUNDO NUMERO **
//4) CONDICIONAL PARA 
//IDENTIFICAR QUAL A OPERAÇÃO
//5) FAZER O CALCULO 
//6) APRESENTAR RESULTADO 


// let operacao   = prompt("Digite a operação (+,-,*,/)")
// let numero1    = prompt("Digite o primeiro numero")
// let numero2    = prompt("Digite o segundo numero")
// let resultado  = 0
// console.log(operacao)
// console.log(numero1)
// console.log(numero2)


// //+ OU SOMA
// if(operacao == "+" || operacao == "soma"){
    
//     resultado = Number(numero1) + Number(numero2)

//     console.log(`O resultado da soma de ${numero1} + ${numero2} é ${resultado}`)

//     console.log("O resultado da soma de"+ numero1+ "+" +numero2+"é"+resultado)
//     console.log(resultado)


// }

// if(operacao == "-" || operacao == "subtrac"){

//     resultado = Number(numero1) - Number(numero2)
//     console.log(resultado)

// }

// if(operacao == "*" || operacao == "multiplicação"){

//     resultado = Number(numero1) * Number(numero2)
//     console.log(resultado)

// }


// if(operacao == "/"){

//     resultado = Number(numero1) / Number(numero2)
//     console.log(resultado)

// //SENÃO
// }else{
//     console.log("Operação invalida")
// }






//DESCONTO NO FRETE 
// let totalCompra = 200
// let valorFrete  = 50
// let total       = 0
// if(totalCompra >= 200){

//         total = totalCompra + (valorFrete - 25) 
    
// }else if(totalCompra > 500){
//     total = total = totalCompra + (valorFrete - valorFrete)
// }




let nota3     = -1
if(!nota3 >= 0 && nota3 <= 10){
    alert("Valor é inválido");
}