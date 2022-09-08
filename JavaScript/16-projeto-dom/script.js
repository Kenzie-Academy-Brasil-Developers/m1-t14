let carros = [
    {
        id: 1,
        modelo: 'Supra',
        ano: 1998,
        marca: 'Toyota',
        imagem: './img/supra.jpg',
    },
    {
        id: 2,
        modelo: 'Skyline',
        ano: 1997,
        marca: 'Nissan',
        imagem: './img/skyline.webp'
    },
    {
        id: 3,
        modelo: 'RX7',
        ano: 1999,
        marca: 'Mazda',
        imagem: './img/rx7.jpg'
    },
    {
        id: 4,
        modelo: 'Impreza',
        ano: 1996,
        marca: 'Subaru',
        imagem: './img/impreza.jpg'
    },
    {
        id: 5,
        modelo: 'Lancer',
        ano: 2008,
        marca: 'Mitsubish',
        imagem: './img/lancer.webp'
    },
    {
        id: 6,
        modelo: 'NSX',
        ano: 1991,
        marca: 'Acura',
        imagem: './img/nsx.jpg',
    },
    {
        id: 7,
        modelo: 'Civic',
        ano: 1998,
        marca: 'Honda',
        imagem: './img/civic.jpg',
    }
];

let favCount = 0;

let botoesProduto = document.getElementsByClassName('productButton');

for(let i = 0; i<botoesProduto.length ; i++){
    let botao = botoesProduto[i];

    botao.addEventListener('click', function(event){
        let idElemento = event.target.id;
        let id = parseInt(idElemento.substring(4));
        
        let carro = procuraObjeto(id); 
        
        if(!carro){
            alert('Este veículo não está cadastrado na listagem de carros.');
        }else{
            if(!verificaFavorito(carro.id)){
                insereFavorito(carro);
            }else{
                alert('O veiculo já foi favoritado');
            }
        }

    }); 
}

function verificaFavorito(id){
    let elemento = document.getElementById(`fav_${id}`);
    if(elemento == null){
        return false;
    }else{
        return true;
    }
}

function procuraObjeto(id){
    for(let i = 0; i<carros.length ; i++){
        let carro = carros[i];
        if(carro.id == id){
            return carro;
        }
    }
    return false;
}

function insereFavorito(carro){
    if(verificaFavoritoRepetido(carro.id)){
        alert('Esse elemento ja foi inserido na aba de favoritos');
    }else{
        favCount++;
        document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;
    
        //Refêrenciou um item já presente na tela
        let listaFavoritos = document.getElementById('listaFavoritos');
    
        //Criando os itens
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let button = document.createElement('button');
    
        //Configurando os itens
        li.id=`item_${carro.id}`;
        img.src = carro.imagem;
        p.innerText = `${carro.marca} ${carro.modelo} ${carro.ano}`;
        button.innerHTML = 'Remover';
        button.id = `fav_${carro.id}`;
        button.classList.add('favoriteButton');
        button.addEventListener('click', function(event){
            /*
                let li = event.path[1];
                li.remove();
            */
            let li = document.getElementById(`item_${carro.id}`);
            li.remove();
            
            favCount--;
            document.querySelector('#favQuantidade').innerHTML = `(${favCount})`;
        });
    
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(button);
    
        listaFavoritos.appendChild(li); 
    }

    
}

function verificaFavoritoRepetido(id){
    let elemento = document.getElementById(`fav_${id}`);
    if(elemento == null){
        return false;
    }else{
        return true;
    }
}
