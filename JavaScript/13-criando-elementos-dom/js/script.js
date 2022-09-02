
//CRIANDO ELEMENTO
// let titulo  = document.createElement("h1")
// let p  = document.createElement("p")

// //ATRIBUINDO INFORMAÇÕES PARA O ELEMENTO
// titulo.innerText = "Hudson Carolino"
// p.innerText      = "Olá eu sou o Hudson"


// //ADICIONANDO O ELEMENTO NA INTERFACE
// //PRECISAMOS DE UMA REFERENCIA
// let body = document.querySelector("body")


// body.appendChild(titulo)
// body.appendChild(p)


let nomes = ["Hudson", "Daniel", "Ugo", "André", "Eduardo", "Lorena"]
let ul = document.querySelector("ul")

for(let i = 0; i<nomes.length; i++){

    let li  = document.createElement("li")
    let img = document.createElement("img")
    let p   = document.createElement("p")

    img.src     = "./img/face1.jpeg"
    img.alt     = nomes[i]
    p.innerText = nomes[i]

    //FERIFICANDO FUNCIONARIO DESTAQUE 
    if(nomes[i] == "Daniel" || nomes[i] == "Eduardo" ){
        li.classList.add("destaque")
    }

    //REFERENCIANDO LI
    li.appendChild(p)
    li.appendChild(img)
    
    //REFERENCIANDO UL
    ul.appendChild(li)
}





{/* 
<li>
    <img src="./img/face1.jpeg" alt="Lorena">
    <p>Nome</p>
</li> 
*/}





//LISTAR FUNCIONARIOS
function listarFuncionarios(){
    
    //SELECIONANDO LISTA NO HTML
    let ul = document.querySelector("ul")

    //PERCORRER UM ARRAY DE NOMES
    for(let i  = 0; i < nomes.length; i++){

        //PARA CADA NOME/ PRECISO DE UM TEMPLATE(LI)
        //PASSO PARA FUNÇÃO CRIAR ESSE LI
        let template = criarTemplate(nomes[i])
        
        //ADICIONANDO TEMPLATE(LI) MONTANDO NO INTERFACE
        ul.appendChild(template)

    }
}
//listarFuncionarios()

//CRIANDO UM TEMPLATE(LI) => PRECISO DE UM FUNCIONARIO
function criarTemplate(funcionario){

     //CRIANDO TEMPLATE (LI)
     let li = document.createElement("li")

     //ALIMENTANDO ESSE LI COM O NOME
     li.innerText = funcionario

    //RETORNANDO LI MONTANDO
     return li
}








