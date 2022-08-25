
//CRIANDO UM PRODUTO E ADICIONANDO NO ARRAY(LISTA) DE PRODUTOS
function adicionarProdutoBase(id, produtoNome,imageUrl,preco, precoPromocional,oferta,estoque,categoria){
    
    if(id !== undefined){
        
        //CONSTRUIU UM OBJETO => PRODUTO
        const produto = {
            id,
            produtoNome,
            imageUrl,
            preco,
            precoPromocional,
            oferta,
            estoque,
            categoria
        }

        //CADASTRO DO PRODUTO NA BASE
        dataProdutos.push(produto)

        return "Produto adicionado com sucesso"
    }
    
    return "Produto invalido!"
    
}
console.log(adicionarProdutoBase(900, "Teclado", "image.png", "100","", false, 50,["Eletronicos"]))


//PESQUISAR PRODUTO NA BASE  
//ID 
//ARRAY DE OBJETOS 
//CADA OBJETO {id:1213, nome}

//1) fazer um loop for *
    //a)para acessar cada um dos produtos *
    //b) recuperar a propriedade id 
//2) condicional 
    //a) id === produto.id
    //b) produto encontrado => return produto 
    //c) produto não encontrado => return ""

function pesquisarProdutoId(id){

    //fazer um loop for 
   for(let i = 0; i < dataProdutos.length; i++){

        //a)para acessar cada um dos produtos 
        let produtoAtual  = dataProdutos[i]

        //2) condicional
        if(produtoAtual.id == id){

            return produtoAtual
        }
   } 

   return "Produto não encontrado"
}
//console.log(pesquisarProdutoId(1234))


//RETORNAR UMA LISTA DE PRODUTOS 
//QUE CONTEM [1,2,40]
function pesquisarProdutosIds(listIds){

    let listaProdutosEcontrados = []

    //LOOP PARA ACESSAR ID, PASSADO POR PARAMETRO(USUARIO)
    for(let i = 0; i<listIds.length; i++){

        let idPesquisa  = listIds[i]

        //LOOP PARA ACESSAR CADA UM DOS PRODUTOS DA BASE
        for(let j = 0; j < dataProdutos.length; j++){
            
            let produtoAtual = dataProdutos[j]
           
            //VERIFICANDO SE UM DESSES PRODUTOS É IGUAL O ID PASSADO PELO USUARIO
            if(produtoAtual.id == idPesquisa){

                //ADICIONANDO PRODUTO ENCONTRADO NA NOVA LISTA DE PRODUTOS 
                listaProdutosEcontrados.push(produtoAtual)

            }

        }
    }

    //RETORNANDO A LISTA DE PRODUTOS
    return listaProdutosEcontrados
}

//console.log(pesquisarProdutosIds([1,2,3,4]))


//PESQUISAR POR NOME 
//PESQUISAR POR CATEGORIA 
//ID
//RETORNE UMA LISTA COM TODOS
function pesquisarProdutoNome(nomePesquisa){

    for(let i = 0; i<dataProdutos.length; i++){

        let produtoAtual        = dataProdutos[i]
        let nomeProdutoTratado  =  produtoAtual.produtoNome.toLowerCase()
        let nomePesquisaTratado =  nomePesquisa.toLowerCase()

        if(nomeProdutoTratado == nomePesquisaTratado){
            return produtoAtual
        }

    }
    return "Produto não encontrado"
}

//console.log(pesquisarProdutoNome("fone"))