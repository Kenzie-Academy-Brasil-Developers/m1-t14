//UNIDIMENSIONAL 
//let array = [1,2,3,43,54]

//console.table(array)
//BIDIMENSIONAL 
let array2 = [
    [1,2],
    [3,4],
]

//console.table(array2)
//MULTIDIMENSIONAL
let arrayMult = [
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]]
]

//

// let array = [1,2,3,43,54]

// for(let i = 0; i < array.length; i++){

//     console.log(array[i])

// }

//[[],[],[],[],[],[],[]]

// let alunosNotas = [
//     //M P  E.D G F.S 
//     [60,70,80,65,56,100],  // ALUNO 1 => Hudson
//     [60,65,45,76,80,95],   // ALUNO 2 => Ugo
//     [10,45,65,67,78,54],   // ALUNO 3 => Eduardo
//     [90,90,96,79,80,100],  // ALUNO 4 => Anderson
    
// ]

//console.table(alunosNotas)
//alunosNotas[0][0] = 75
//console.log(alunosNotas[0])

//ADICIONANDO NOVA LINHA
//alunosNotas.push([80,80,86,79,90,90])

//ADICIONADO UM VALOR A UMA COLUNA 
//alunosNotas[4].push(200)



let alunosNotas = [
    //M P  E.D G F.S 
    [60,70,80,65,56,100],  // ALUNO 1 => Hudson
    [60,65,45,76,80,95],   // ALUNO 2 => Ugo
    [10,45,65,67,78,54],   // ALUNO 3 => Eduardo
    [90,90,96,79,80,100],  // ALUNO 4 => Anderson
    
]
//ACESSANDO VALORES COM LOOP (FOR)
//console.table(alunosNotas)

//FOR PARA ACESSAR AS LINHAS
// for(let linha = 0; linha< alunosNotas.length; linha++){

//     let listaNotas = alunosNotas[linha]
//     console.log(listaNotas)

//     ///ACESSANDO COLUNA => RECUPERANDO NOTAS SEPARADAS
//     for(let coluna  = 0; coluna <listaNotas.length; coluna++){

//         console.log(listaNotas[coluna])
//     }
    
// }


console.table(alunosNotas)

//FOR PARA ACESSAR AS LINHAS
// for(let i = 0; i< alunosNotas.length; i++){

//     let listaNotas = alunosNotas[i]
//     console.log(`------ Linha Aluno: ${i} ------`)
//     console.log(listaNotas)


//     ///ACESSANDO COLUNA => RECUPERANDO NOTAS SEPARADAS
//    for(let j  = 0; j <listaNotas.length; j++){
    
//     console.log(`------ Materia: ${j} ------`)
//       console.log(listaNotas[j])
//     }
    
// }

// for(let i = 0; i< alunosNotas[0].length; i++){

//     console.log(alunosNotas[0][i])

// }


function verificarNotaVermelha(listaNotas){
    
    for(let i = 0; i<listaNotas.length; i++){
        let notas = listaNotas[i]
        console.log(`-------Aluno: ${i}-------`)
      
        for(let j = 0; j< notas.length; j++){
            
            let nota = notas[j]

            if(nota < 60){
                console.log(nota)
            }

        }
    }
}
//verificarNotaVermelha(alunosNotas)


function verificarAlunoAprovado(listaNotas){
    
    for(let i = 0; i<listaNotas.length; i++){
        let notas = listaNotas[i]
        let somasNotas = 0

        console.log(`-------Aluno: ${i}-------`)
      
        for(let j = 0; j< notas.length; j++){
            
            let nota = notas[j]
            somasNotas += nota
         

        }

        let media  = somasNotas / notas.length
        if(media > 80){
            console.log(media)
            console.log("Aluno aprovado")
        }else{
            console.log(media)
            console.log("Aluno reprovado")
        }
       
    }

}
verificarAlunoAprovado(alunosNotas)


