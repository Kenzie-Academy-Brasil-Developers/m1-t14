//DECLARADA => NOME **
//LISTA DE PARAMETROS (OPCIONAL)
//BLOCO INSTRUÇÕES **
//RETURN (OPCIONAL)
//CHAMADA **

//DECLARAÇÃO DA FUNÇÃO
//2 numeros 

//DECLARAÇÃO/NOME(5,20)
// function soma(num1, num2){

//     if(num1 >= 0 && num2 >= 0){

//         return num1 + num2

//     }else{

//         return "Numero invalido"

//     }
    
// }

//CHAMADA DE FUNÇÃO (10,20)
//let resultado = soma(30,20)


//FUNÇÃO PARA VERIFICAR PARIMPAR
function parImpar(numero){

    if(numero % 2 == 0){
        
        return `O numero ${numero} é par`
    
    }else{
    
        return `O numero ${numero} é impar`
    
    }
}


//CHAMADA       <=
//console.log(parImpar(10))



//VERIFICAR MAIOR IDADE 
function verificaMaiorIdade(idade){

    if(idade >= 18){
        return "Atingiu maior idade"
    }

    return "Não atingiu maior idade"
    
}

//let resutadoMaiorIdade = verificaMaiorIdade(17)



//SOMA
function soma(n1,n2){
    return Number(n1) + Number(n2)
}

//SUBTRACAO
function subtracao(n1,n2){
    return Number(n1) - Number(n2)
}

//CALCULADORA
function calculadora(operacao, n1, n2){

    let resultado = 0
    if(operacao == "+"){
        
        resultado = soma(n1, n2)
    
    }else if(operacao == "-"){
        
        resultado = subtracao(n1, n2)
    
    }
        
    return resultado
    
}



let operacao = "+"
let numero1 = 10
let numero2 = 11

let result  = calculadora(operacao, numero1, numero2)
console.log(result)
 










