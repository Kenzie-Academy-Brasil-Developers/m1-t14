
//**********************/
//  SELETORES //
//**********************/
//TIPO DE SELETOR QUE SELECIONA UM ELEMENTO/ INCLUINDO QUALQUER TIPO DE SELETOR CSS
//SELECIONA UM ELEMENTO POR VEZ 
let imagem = document.querySelector("img")
//console.log(imagem)


//TIPO DE SELETOR QUE SELECIONA UM ELEMENTO/ INCLUINDO QUALQUER TIPO DE SELETOR CSS
//SELECIONA TODOS OS ELEMENTOS QUE ELE ENCONTRAR => DENTRO NODELIST
let imagens = document.querySelectorAll("img")


// let p = document.querySelector("p")
// console.log(p)

// let ps = document.querySelectorAll("p")

// console.log(ps)
let logo = document.getElementById("logoKenzie")

//*********************************************/
//  ACESSANDO ELEMENTO E PROPRIEDADES  //
//**********************************************/

let p = document.querySelector('.primeiroParagrafo')

//TEXTO
//p.innerText = "<strong> Hudson</strong>"

//HTML
//p.innerHTML = "<strong> Hudson</strong>"

//ID
//p.id

//CLASSS
console.log(p.className)
//ACESSANDO COLEÇÃO DE CLASSES 
//p.classList
//ADICONANDO/REMOVENDO CLASSE NO ELEMENTO
p.classList.add("HUDSON")
p.classList.remove("primeiroParagrafo")
