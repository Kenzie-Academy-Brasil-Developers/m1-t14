
const listaFuncionarios = document.querySelector(".listaFuncionarios")

//LISTAR FUNCIONARIOS
function listarFuncionarios(lista, referenciaHtml){
    
    //LIMPANDO MINHA LISTA ANTES DE ADICIONAR
    //GARANTINDO A ÚLTIMA ATUALZIAÇÃO
    referenciaHtml.innerHTML = ""
   
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
            <button>Remover</button>
        </div>
    `
    return tagLi
    
}


const btnCadastrar = document.querySelector(".btnCadastrar")
const form = document.querySelector(".form")

//1) ADICIONAR INTERCEPTADOR NO BOÃO CADASTRAR 
//2) RECUPERAR INFORMAÇÕES DOS CAMPOS, DEPOIS DO CLICK
function cadastrarUsuario(){
    
    //RECUPERANDO TODOS OS FILHOS DA DIV.FORM DO HTML
    let inputs = form.children
    
    //CONSTRUINDO OBJETO(FUNCIONARIO) COM OS VALORES PADRÕES
    let novoFuncionario = {
        ativo: true,
        salario:1200,
        tempoEmpresa:0,
    }
    
    //ACESSANDO CADA UM DOS INPUTS
    for(let i = 0; i < inputs.length; i++){
          
        //RECUPERANDO PROPRIEDADES (NAME, VALUE)
        let inputAtual  = inputs[i]
        let inputName   = inputAtual.name
        let inputValue  = inputAtual.value
        
        //ACESSANDO VALOR DO INPUT(VALUE)
        if(inputName){
            //ALIMENTANDO O BJETO COM OS NOVOS VALORES
            //BOJETO[NAMECAMPO] = VALORCAMPO
            //OBJETO.NOME = "HUDSON"
            novoFuncionario[inputName] = inputValue

        }

    }
    
    //ADCIONAMOS ESSE NOVO FUNCIONARIO NA BASE
    data_funcionarios.push(novoFuncionario)

    //LISTAMOS OS FUNCIONARIOS NOVAMENTE
    listarFuncionarios(data_funcionarios, listaFuncionarios)
}

btnCadastrar.addEventListener("click", cadastrarUsuario)
//EVENTOS => addEventListener("tipo", funçaocallback)













