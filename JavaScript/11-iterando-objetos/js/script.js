




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

