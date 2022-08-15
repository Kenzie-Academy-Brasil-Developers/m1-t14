
//DECLARAÇÃO
// function nomeCompleto(){

//     let nome = "Hudson Carolino"
//     console.log(nome)
    
// }

//CHAMADA DA FUNÇÃO
// nomeCompleto()



function tratandoDadosPessoa(nome, sobrenome){
    
    if(nome != "" && sobrenome != ""){
        
        return `Meu nome é ${nome} ${sobrenome}`
       
    }else{
        return "Nome invalido"
    }
   
}
let dadosTratados = tratandoDadosPessoa("Hudson", "Carolino")
mostrarTela(dadosTratados)



//FUNÇÃO PARA MOSTRAR NA TELA
function mostrarTela(nomeCompletoPessoa){
    alert(nomeCompletoPessoa)
}



//PARAMETROS PADRÕES
// function soma(numero1 = 0, numero2 = 0){
    
//     return numero1 + numero2
    
// }


// // <= resultado
// let ResultRetornoFuncao = soma(10, 10)
// console.log(ResultRetornoFuncao)



//FUNÇÃO PARIMPAR
// function parImpar(numero){

//     let result = ""
//     if(numero % 2 == 0){
//         result = "Par" 

//         return result

//     }else{
//         result = "Impar"
//         return result
        
//     }


// }

// let resultado = parImpar(2)

// console.log(resultado)





// let nome = "Gabriel"

// {
//     let nome = "Anderson"
//     console.log(nome)
    
//     {
//         let nome = "Hudson"
//         console.log(nome)
//     }
// }

// console.log(nome)