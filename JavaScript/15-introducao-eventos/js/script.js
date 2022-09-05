
const listaFuncionarios = document.querySelector(".listaFuncionarios")

//LISTAR FUNCIONARIOS
function listarFuncionarios(lista, referenciaHtml){
    
    for(let i = 0; i<lista.length; i++){

        let funcionario = lista[i]

        let templateMontado = criarTemplate(funcionario)

        referenciaHtml.appendChild(templateMontado)

    }

}

listarFuncionarios(data_funcionarios, listaFuncionarios)

//CRIA TEMPLATE
function criarTemplate(funcionario){
    
    let nome    = funcionario.nome
    let cargo   = funcionario.cargo
    let empresa = funcionario.empresa
    let image   = funcionario.image
    let modulo  = funcionario.modulo
    
    let tagLi       = document.createElement("li")
   
    tagLi.innerHTML = `
        <img src="./img/${image}" alt="${image}">
        <h3>${nome}</h3>
        <div class="info">
            <p><strong>Cargo:</strong> ${cargo}</p>
            <p><strong>Empresa: </strong> ${empresa}</p>
            <p><strong>Módulo:</strong> ${modulo}</p>
        </div>
    `
    return tagLi
    
}


const btnCadastrar = document.querySelector(".btnCadastrar")
const form = document.querySelector(".form")

//1) ADICIONAR INTERCEPTADOR NO BOÃO CADASTRAR 
//2) RECUPERAR INFORMAÇÕES DOS CAMPOS, DEPOIS DO CLICK
function cadastrarUsuario(event){
    
    //RECUPERANDO TODOS OS FILHOS DA DIV.FORM DO HTML
    let inputs = form.children
    
    for(let i = 0; i <inputs.length; i++){

        //RECUPERANDO CADA UM DOS INPUTS
        let inputAtual = inputs[i]

        //ACESSANDO VALOR DO INPUT(VALUE)
        if(inputAtual.name){
            console.log(inputAtual.value)
        }


    }

}

//EVENTOS => addEventListener("tipo", funçaocallback)
btnCadastrar.addEventListener("click", cadastrarUsuario)



