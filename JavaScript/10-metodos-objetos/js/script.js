//FUNÇÕES X MÉTODOS 




//this => Pessoa = {}

const Pessoa = {
    nome: "Hudson",
    sobrenome:"Carolino",
    idade: 25,

    falarNomeCompleto(){
    
        console.log(this)

        return `Meu nome é ${this.nome} ${this.sobrenome}`
    

    },

    
}

// console.log(Pessoa.falarNomeCompleto())



// console.log(Pessoa.falarNomeCompleto())
// console.log(Pessoa.falarIdade())

// const lampada = {
//     estado: "desligado",

//     ligar(){


//     },

//     desligar(){

//     }

// }


//APP TODO LIST
// const todoList = {
//     listaTarefas: [],

//     //ADICIONAR TAREFA
//     adicionarTarefa(tarefa){
       
//         //VERIFICANDO SE TAREFA É DIFERENTE DE VAZIO
//         if(tarefa != ""){

//             this.listaTarefas.push(tarefa)

//             return true

//         }else{

//             return false
        
//         }

//     },

//     listarTarefas(){
        
//         for(let i = 0; i < this.listaTarefas.length; i++){
//             console.log(`${i+1}: ${this.listaTarefas[i]}`)            
//         }
        
//     },

//     remover(){},

//     pesquisarTarefa(nome){},

// }

//CHAMANDO MEU APP - MÉTODO ADICIONAR TAREFA
// todoList.adicionarTarefa("Estudar Js")
// todoList.adicionarTarefa("Estudar HTML")
// todoList.adicionarTarefa("Estudar CSS")
// todoList.adicionarTarefa("Estudar Métodos de objetos")
// todoList.adicionarTarefa("Estudar Métodos X Funções")
// console.log(todoList.listarTarefas())


//APP AGENDA
// const appAgenda = {
//     contatos: [],

//     addContato(contato){
        
//         this.contatos.push(contato)

//     },

//     listarContatos(lista = this.contatos){

//         for(let i = 0; i < lista.length; i++){
            
//             let contato = lista[i]
//             console.log(`${i+1} - Nome: ${contato.nome} Telefone: ${contato.telefone}`)
//         }

//     },

//     pesquisarContato(nome){

//         let contatosEncotrados  = []
//         for(let i = 0; i < this.contatos.length; i++){
            
//             let contato = this.contatos[i]
            
//             if(contato.nome == nome){
//                 contatosEncotrados.push(contato) 
//             }
            
//         }

//         this.listarContatos(contatosEncotrados)

//     },

//     remover(index){

//         //splice()
//     }
    
// }



// appAgenda.addContato({
//     nome:"Bruno Assis",
//     telefone:"43997117284"
// })
// appAgenda.addContato({
//     nome:"Eduardo",
//     telefone:"43997119043"
// })

// appAgenda.addContato({
//     nome:"André",
//     telefone:"21997119043"
// })

// appAgenda.addContato({
//     nome:"André",
//     telefone:"2199711904390"
// })
// //appAgenda.listarContatos()
// appAgenda.pesquisarContato("André")





// function falarNome(nome = "indefinido"){

//     console.log(nome)


// }
// falarNome("Hudson")






let produto =  {
    "id":12,
    "produtoNome":"MEN'S BETTER JACKET",
    "imageUrl":"http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png",
    "preco":"200.00",
    "precoPromocional":"190.00",
    "oferta":true,
    "estoque":100,
    "categorias":["blusas", "Jaquetas", "Moletons"],
    "sku":123,
}



// let arrayNuemros  = [12,123,124,23,423,12]

//valores = 12
//valores = 123
// for(let valores of arrayNuemros){
//     console.log(valores)
// }


// for(let i = 0; i<arrayNuemros.length; i++){
//     arrayNuemros[i]
// }

//chave  = 0
//chave  = 1
// for(let chave in produto){

//     console.log(produto[chave])
    
// }




//FOR IN PARA ACESSAR AS PROPRIEDADES DO OBJETO
for(let propriedade in produto){

    //CONDICIONAL PARA VERIFICAR PROPRIEDADE CATEGORIAS(ARRAYS)
    if(propriedade != "categorias"){

        console.log(`${propriedade}: ${produto[propriedade]}`)

    }else{

        console.log("------- Categorias --------")
        let categorias  = produto[propriedade]
        
        //FOR OF PARA ITERAR SOBRE SOBRE O ARRAY DE CATEGORIAS 
        //PODERIA UTILIZAR UM FOR TAMBÉM
        for(let categoria  of categorias){

            console.log(categoria)
        }

    }   

}

// let arrayValores = Object.values(produto)

// console.log(arrayValores[0])
// console.log(arrayValores[1])
// console.log(arrayValores[2])
// console.log(arrayValores[3])

// let  arrayChaveValor = Object.entries(produto)

// console.log(arrayChaveValor)

// console.log(Object.keys(produto))

