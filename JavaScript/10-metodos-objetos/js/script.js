//FUNÇÕES X MÉTODOS 


// const Pessoa = {
//     nome: "Hudson",
//     sobrenome:"Carolino",
//     idade: 25,

//     falarNomeCompleto(){
       
//         return `Meu nome é ${this.nome} ${this.sobrenome}`
//        // return `Meu nome é ${Pessoa.nome} ${Pessoa.sobrenomne}`

//     },

//     falarIdade(){
//         return `MInha idade é ${this.idade} anos`
//     }
// }


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
const todoList = {
    listaTarefas: [],

    //ADICIONAR TAREFA
    adicionarTarefa(tarefa){
       
        //VERIFICANDO SE TAREFA É DIFERENTE DE VAZIO
        if(tarefa != ""){

            this.listaTarefas.push(tarefa)

            return true

        }else{

            return false
        
        }

    },

    listarTarefas(){
        
        for(let i = 0; i < this.listaTarefas.length; i++){
            console.log(`${i+1}: ${this.listaTarefas[i]}`)            
        }
        
    },

    remover(){},

    pesquisarTarefa(nome){},

}

//CHAMANDO MEU APP - MÉTODO ADICIONAR TAREFA
// todoList.adicionarTarefa("Estudar Js")
// todoList.adicionarTarefa("Estudar HTML")
// todoList.adicionarTarefa("Estudar CSS")
// todoList.adicionarTarefa("Estudar Métodos de objetos")
// todoList.adicionarTarefa("Estudar Métodos X Funções")
// console.log(todoList.listarTarefas())


//APP AGENDA
const appAgenda = {
    contatos: [],
   

    addContato(contato){
        
        this.contatos.push(contato)

    },

    listarContatos(lista = this.contatos){

        for(let i = 0; i < lista.length; i++){
            
            let contato = lista[i]
            console.log(`${i+1} - Nome: ${contato.nome} Telefone: ${contato.telefone}`)
        }

    },

    pesquisarContato(nome){

        let contatosEncotrados  = []
        for(let i = 0; i < this.contatos.length; i++){
            
            let contato = this.contatos[i]
            
            if(contato.nome == nome){
                contatosEncotrados.push(contato) 
            }
            
        }

        this.listarContatos(contatosEncotrados)

    },

    remover(index){

        //splice()
    }
    
}



appAgenda.addContato({
    nome:"Bruno Assis",
    telefone:"43997117284"
})
appAgenda.addContato({
    nome:"Eduardo",
    telefone:"43997119043"
})

appAgenda.addContato({
    nome:"André",
    telefone:"21997119043"
})

appAgenda.addContato({
    nome:"André",
    telefone:"2199711904390"
})
//appAgenda.listarContatos()
appAgenda.pesquisarContato("André")





function falarNome(nome = "indefinido"){

    console.log(nome)


}
falarNome("Hudson")