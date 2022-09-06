

// let buttons = document.querySelectorAll(".listaFuncionarios li button")

// for(let i = 0; i <buttons.length; i++){

//     buttons[i].addEventListener("click", remover)
// }


listaFuncionarios.addEventListener("click", remover)
function remover(event){

    //TARGET QUEM RECEBEU O CLICK
    //event.target

    //QUEM ESTÁ COM O INTERNEPTADOR 
    //event.currentTarget

    //IDENTIFICANDO BOTÃO
    let button = event.target
    //imag == button = false
    //button == button = false
    if(button.tagName == "BUTTON"){
        //ACESSANDO ELEMENTO PAI 
        let li = button.closest("li")

        //REMOVENDO ELEMENTO 
        li.remove()
    }
    
}