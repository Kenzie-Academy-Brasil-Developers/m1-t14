
//1) SELECIONADO REFERENCIA PARA PASSAR COMO ARGUMENTO PARA FUNÇÃO, NO PASSO 2
const listaFuncionarios = document.querySelector(".listaFuncionarios")

//FUNÇÃO LISTAR FUNCIONÁRIOS
//a) lista de funcionários 
//b) a referencia html, onde vou adicionar esses funcionários

//PERCORRER O ARRAY DE FUNCIONÁRIOS
 //a) loop
//ACESSAR CADA UM DOS OBJETOS (FUNCIONÁRIO)
//PEGAR AS IFORMAÇÕES DE CADA OBJETO(FUNCIONÁRIO)

//2) FUNÇÃO PARA ACESSAR E LISTAR TODOS OS FUNCIONARIOS
function listarFuncionarios(lista, referenciaHtml){
    
   //1) PERCORRENDO A LISTA DE FUNCIONARIO 
    for(let i = 0; i<lista.length; i++){

        //2) ACESSANDO FUNCIONARIO
        let funcionario = lista[i]

        //3) CRIANDO TEMPLATE => LI
        //Nesse ponto, eu chamo outra função para fazer a montagem do templat(li)
        //Passo como argumento o funcionario que encontrei na lista
        //aguardo o retorno desse template
        let templateMontado = criarTemplate(funcionario)

        //JOGAR TEMPLATE NA INTERFACE
        //(referenciaHtml) é minha tag que selecionei no meu html, ela é passada como parametro 
        //(templateMontado) é o template(LI) montado pela função anterior com as informações do funcionario 
        referenciaHtml.appendChild(templateMontado)

    }

}

listarFuncionarios(data_funcionarios, listaFuncionarios)


//1) FUNCIONARIO 
  //a)Informações (nome,cargo)
//2) Criar um template tags(li...)
//3) Alimentar as tags com as informações do funcionario
//4) Montar esse template
//5) return desse template pornto
function criarTemplate(funcionario){
    
    //1) RECUPERANDO INFORMAÇÕES DO FUNCIONÁRIO
    let nome    = funcionario.nome
    let cargo   = funcionario.cargo
    let empresa = funcionario.empresa
    let image   = funcionario.image
    let modulo  = funcionario.modulo
    
    //2) CRIANDO AS TAGS DO TEMPLATE
    let tagLi       = document.createElement("li")
    let tagImg      = document.createElement("img")
    let tagH3       = document.createElement("h3")
    let tagInfo     = document.createElement("div")
    let tagCargo    = document.createElement("p")
    let tagEmpresa  = document.createElement("p")
    let tagModulo   = document.createElement("p")
   
    //3) ADICIONANDO CLASSE TAG INFO
    tagInfo.classList.add("info")
  
    //4) ALIMENTANDO TAGS COM AS INFORMAÇÕES 
    tagImg.src              = `./img/${image}`
    tagImg.alt              = nome
    tagH3.innerText         = nome
    tagCargo.innerHTML      = `<strong>Cargo:</strong> ${cargo}`
    tagEmpresa.innerHTML    = `<strong>Empresa:</strong> ${empresa}`
    tagModulo.innerHTML     = `<strong>Módulo:</strong> ${modulo}`
   
    //5) MONTAR O TEMPLATE
    tagInfo.appendChild(tagCargo)
    tagInfo.appendChild(tagEmpresa)
    tagInfo.appendChild(tagModulo)
    tagLi.append(tagImg,tagH3,tagInfo)
    
    //6)RETORNANDO TEMPLATE(LI) COM TODOS OS ELEMENTOS 
    return tagLi
    
}
{/* 
    <li>1
        <img src="./img/face2.jpeg" alt="">2
        <h3>Hudson</h3>3
        <div class="info">4
            <p><strong>Cargo:</strong> Instrutor</p>
            <p><strong>Empresa: </strong> Kenzie Academy</p>
            <p><strong>Módulo:</strong> M1</p>
        </div>
    </li> 

*/}

// criarTemplate({
//     nome:"Renato da silva",
//     cargo:"Instrutor",
//     empresa:"Kenzie Academy",
//     image:"img.jpg",
//     modulo: "M1",
//     ativo: true,
//     salario:1000,
//     tempoEmpresa:3,
// })
