


//ENQUANTO 
//CONDICIONAL => PARADA
//ICREMENTO => controle


//let cont = 0
//while(cont <= 5){

   // console.log(cont)
   // cont++
//}


//PARA (CONTADORA = 0; CONTADORA<= 10; CONTADORA++ ) FAÇA{
//}


//PARA(CONTROLE; CONDICIONAL; INCREMENTO)
// ESCOPO DE CÓDIGO{}

//for(let i = 0; i <= 5; i++){
  //  console.log(i)
//}

//                  0  1 2  3  4  5 6 7 8 9
//let arrayNumeros  = [1,2,23,43,54,3,4,5,6]

//FUNÇÃO LISTAR NUMEROS
function mostrarNumeros(listaNumeros){

    for(let i = 0; i<listaNumeros.length; i++){
        let numero = listaNumeros[i]
        console.log(numero)
    }
   
}
//mostrarNumeros(arrayNumeros)

//FUNÇÃO ENCONTRAR NUMERO
function encontrarNumero(listaNumeros, numero){

    for(let i = 0; i < listaNumeros.length; i++){
        
        let numeroAtual = listaNumeros[i]

        if(numeroAtual == numero){
            return `A posição do numero é ${i}: ${numeroAtual}`
        }
    }


    return "Numero não encontrado"
}
//let resultadoPesquisa  = encontrarNumero(arrayNumeros, 43)
//console.log(resultadoPesquisa)



let nomes = ["Hudson", "Anderson", "Daniel", "André", "Lucas"]

//ENCONTRAR UM NOME
function pesquisarNome(listaNomes, nome){

        for(let i = 0; i<listaNomes.length; i++){

            let nomeAtual = listaNomes[i]

            if(nomeAtual == nome){
                return `Nome encontrado: ${nomeAtual}`
            }

        } 

}

let nomeDigitado = prompt("Digite um nome")
let resultadoBusca = pesquisarNome(nomes, nomeDigitado)
alert(resultadoBusca)


//FUNÇÃO LISTAR NOMES
function listarNomes(listaNomes){

    for(let i = 0; i < listaNomes.length; i++){

        console.log(`Nome: ${listaNomes[i]}`)
    
    }
}

//listarNomes(nomes)




let arrayNumeros  = [1,2,23,43,54,3,4,5,6]

//RETORNAR UM NOVO ARRAR DE NÚMEROS PARES
function encontrarNumerosPares(lista){
    
    let numerosPares = [] 

    for(let i = 0; i<lista.length; i++){
        
        let numeroAtual = lista[i]

        if(numeroAtual % 2 == 0){
            numerosPares.push(numeroAtual)
            
        } 

    }
    
    return numerosPares
    
}

//let arrayPares  = encontrarNumerosPares(arrayNumeros)
//console.log(arrayPares)

let numerosSoma = [1,2,2, 10, 40, 23, 90, 23,100, 23, 200,12]
function somarNumerosarray(lista){

    let total  = 0
    for(let i = 0; i<lista.length;i++){

        total += lista[i]

    }
    
    return total

}


//let totalSoma = somarNumerosarray(numerosSoma)
//console.log(totalSoma)

function encontrarMaiorNumero(lista){

    let maiorNumero = 0

    for(let i = 0; i<lista.length;i++){

        let numeroAtual = lista[i]
       
        if(numeroAtual > maiorNumero){
            maiorNumero = numeroAtual
        }

    }

    console.log(maiorNumero)
    

}

//encontrarMaiorNumero(numerosSoma)















