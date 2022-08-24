



let nome = "Hudson"
let idade = "25"
let cidade = "Curitiba"
let cursos = "Front-end, "
let pessoas = ["Hudson","25", "Lucas"]

//nome: "Hudson"
//idade: "25"
//cidade: "Curitiba"

// let produto = {
//     nome: "Celular Galaxy...",
//     modelo:"A8",
//     marca:"",
//     cor:"",
// }

// let produto2 = {
//     nome: "Camiseta",
//     modelo:"Casual",
//     marca:"Vans",
//     cor:"Preta",
//     tamanho:["M","P", "PP"],
//     estoque:true,
    
// }





//DECLARANDO OBJETO
//CHAVE/PROPRIEDADES 
let aluno = {
    nome: "Hudson",
    idade: 25,
    cidade:"Curitiba - PR",
    email:"huson@gmail.com",
    modulos:["M1","M2","M3","M4","M5"],
    ativo:true
}

//ACESSANDO VALORES 
// aluno.nome
// aluno.idade



//ACESSANDO EDITANDO VALORES 
// aluno.nome = "Gabriel"
// aluno.modulos.push("M6")

//ALIMENTANDO OBJETO VAZIO
// let aluno2 = {}
// aluno2.nome = "Lucas"
// aluno2.idade = "23"



//FABRICA
// function criarAluno(nome, idade, email, modulos){

//     //CRIANDO UM OBJETO 
//     const aluno = {
//         nome:nome,
//         idade:idade,
//         email:email,
//         modulos:modulos,
//     }

//     //RETORNO ESSE OBJETO
//    return aluno
// }

// criarAluno("Hudson", 25, "hudson@gmail.com", ["M1","M2"])









let camiseta = {
    nome:"Camiseta",
    preco:29.99,
    categorias: ["Esporte","Casual"],
    tamanhos:["PP", "P", "M", "G", "GG"],
    estoque:true
}

let tenis = {
    nome:"Tenis Nike",
    preco:29.99,
    precoPromocional:19.99,
    categorias: ["Esporte","Casual"],
    tamanhos:["PP", "P", "M", "G", "GG"],
    estoque:false
}

function mostrarProduto(produto){
    console.log("--------------------------")
    if(produto.estoque == true){

        let produtoNome         = produto.nome
        let produtoPreco        = produto.preco
        let produtocategorias   = produto.categorias

        console.log(`Produto Nome: ${produtoNome}`)
        console.log(`Preço: ${produtoPreco}`)
        console.log(`Categorias:`)
        
        for(let i = 0; i < produtocategorias.length; i++){

            console.log(`Nome categoria: ${produtocategorias[i]}`)
        }
            
    }else{
        console.log("produto fora do estoque")
    }
    
}

//mostrarProduto(camiseta)
//mostrarProduto(tenis)




// let alunosNotas = [
//     //M P  E.D G F.S 
//     [60,70,80,65,56,100],  // ALUNO 1 => Hudson
//     [60,65,45,76,80,95],   // ALUNO 2 => Ugo
//     [10,45,65,67,78,54],   // ALUNO 3 => Eduardo
//     [90,90,96,79,80,100],  // ALUNO 4 => Anderson
    
// ]

let alunoHudson = {
    nome:"Hudson",
    sobrenome:"Carolino",
    idade: 25,
    email:"hudson@gmail.com",
    matricula:123,
    modulos: [
        {
            nomeModulo:"M1",
            conteudo:"HTML, CSS, JS"
        }, 
        {
            nomeModulo:"M2",
            conteudo:"JS, OOP, API"
        },
        {
            nomeModulo:"M3",
            conteudo:"React Js"
        }
    ],

}

//console.log(alunoHudson)



//LISTANDO MÓDULOS
//let modulos = alunoHudson.modulos
// for(let i  = 0; i < modulos.length; i++){

//     let moduloAtual = modulos[i]

//     console.log(moduloAtual.nomeModulo)
//     console.log(moduloAtual.conteudo)

// }







let alunoHudson2 = {
    nome:"Hudson",
    sobrenome:"Carolino",
    idade: 25,
    email:"hudson@gmail.com",
    matricula:123,
    materias: [
        {
            nomeMateria:"Matematica",
            notas: [60,70,56],
            ativo:true
        }, 
        {
            nomeMateria:"E.D",
            notas: [100,76,80],
            ativo:false
        },
        {
            nomeMateria:"G.O",
            notas: [56,70,89],
            ativo:true
        }
    ],
}


function pesquisaMateria(aluno, materia){
    
    let materias = aluno.materias
    
    for(let i = 0; i < materias.length; i++){
        
        let materiaAtual  = materias[i]

        if(materiaAtual.nomeMateria  == materia){

            return materiaAtual
        }

    }


}
 
//console.log(pesquisaMateria(alunoHudson2, "E.D"))


// CRIANDO ALUNOS A ARMAZENANDO EM UM ARRAY 

//FABRICA
let listaAlunos  = []

function criarAluno(nome, idade, email, modulos){

    //CRIANDO UM OBJETO 
    const aluno = {
        nome:nome,
        idade:idade,
        email:email,
        modulos:modulos,
    }

    //RETORNO ESSE OBJETO
   return aluno
}


listaAlunos.push(
    criarAluno("Hudson", 25, "hudson@gmail.com", ["M1","M2"]),
    criarAluno("Anderson", 40, "anderson@gmail.com", ["M1","M2"]),
    criarAluno("Lucas", 23, "lucas@gmail.com", ["M1","M2"]),
    criarAluno("Eduardo", 22, "eduardo@gmail.com", ["M1","M2"]),
    criarAluno("Hudson", 25, "hudson@gmail.com", ["M1","M2"]),
    criarAluno("Anderson", 40, "anderson@gmail.com", ["M1","M2"]),
    criarAluno("Lucas", 23, "lucas@gmail.com", ["M1","M2"]),
    criarAluno("Eduardo", 22, "eduardo@gmail.com", ["M1","M2"]),
)

console.log(listaAlunos)



