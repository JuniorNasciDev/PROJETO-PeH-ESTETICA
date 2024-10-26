
const limpezaProdutos = []
const reformaProdutos = []
let maximo = 6
const todosProdutos = [
    {
        nome:'pretinho',
        desc:'pretinho bonioto',
        quatidade:0,
        categoria:'limpeza',
        id:1,
        img:'/assets/galeria/Produtos.png'
    },
    {
        nome:'Parachoque',
        desc:'Parachoque reforçado',
        quatidade:0,
        id:2,
        categoria:'reforma',
        img:'/assets/galeria/servico.png'
    },
    {
        nome:'Remove Sujeira',
        desc:'Limpeza automotiva e doméstica',
        quatidade:0,
        id:3,
        categoria:'reforma',
        img:'/assets/catalogo/teste1.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:4,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:5,
        categoria:'reforma',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:6,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:7,
        categoria:'reforma',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:8,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Parachoque',
        desc:'Parachoque reforçado',
        quatidade:0,
        id:9,
        categoria:'reforma',
        img:'/assets/galeria/servico.png'
    },
    {
        nome:'Parachoque',
        desc:'Parachoque reforçado',
        quatidade:0,
        id:10,
        categoria:'reforma',
        img:'/assets/galeria/servico.png'
    },
    {
        nome:'Parachoque',
        desc:'Parachoque reforçado',
        quatidade:0,
        id:11,
        categoria:'reforma',
        img:'/assets/galeria/servico.png'
    },
    {
        nome:'pretinho',
        desc:'pretinho bonioto',
        quatidade:0,
        categoria:'limpeza',
        id:12,
        img:'/assets/galeria/Produtos.png'
    },
    {
        nome:'Parachoque',
        desc:'Parachoque reforçado',
        quatidade:0,
        id:22,
        categoria:'reforma',
        img:'/assets/galeria/servico.png'
    },
    {
        nome:'Remove Sujeira',
        desc:'Limpeza automotiva e doméstica',
        quatidade:0,
        id:33,
        categoria:'reforma',
        img:'/assets/catalogo/teste1.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:44,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:45,
        categoria:'reforma',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:47,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:48,
        categoria:'reforma',
        img:'/assets/catalogo/teste2.png'
    },
    {
        nome:'Shiny',
        desc:'protege e dá brilho intenso e duradouro aos pneus.',
        quatidade:0,
        id:49,
        categoria:'limpeza',
        img:'/assets/catalogo/teste2.png'
    },
    
]



const catalogo = document.getElementById('catalogo')


for(i in todosProdutos){
    if(todosProdutos[i].categoria === 'reforma'){
        reformaProdutos.push(todosProdutos[i])
    }
    if(todosProdutos[i].categoria === 'limpeza'){
        limpezaProdutos.push(todosProdutos[i])
    }
    
}



for(let c=0; c < maximo; c++){
    catalogo.innerHTML += `
    <div class="box-produto">
            <div class="window-img-produto">
                <img class="img-produto" src="${todosProdutos[c].img}" alt="imagem de produto">
            </div>
                <p class="produto-title">${todosProdutos[c].nome}</p>
                <p class="produto-text">${todosProdutos[c].desc}</p>
                <button class="produto-btn" onclick="addCarrinho()" id="${todosProdutos[c].id}">Adicionar ao carrinho</button>
    </div>`;
}

const filtro = document.getElementById('categoria')

function filtrar(){
    maximo = 6
    if(filtro.value == 'todosProdutos'){
        catalogo.innerHTML = ''
        for(let i =0; i < maximo;i++){
            catalogo.innerHTML += `
    <div class="box-produto">
            <div class="window-img-produto">
                <img class="img-produto" src="${todosProdutos[i].img}" alt="imagem de produto">
            </div>
                <p class="produto-title">${todosProdutos[i].nome}</p>
                <p class="produto-text">${todosProdutos[i].desc}</p>
                <button class="produto-btn" onclick="addCarrinho()" id="${todosProdutos[i].id}">Adicionar ao carrinho</button>
    </div>`;
        }
    }
    if(filtro.value == 'limpeza'){
        catalogo.innerHTML = ''
        for(let i =0; i < maximo;i++){
            catalogo.innerHTML += `
            <div class="box-produto">
                    <div class="window-img-produto">
                        <img class="img-produto" src="${limpezaProdutos[i].img}" alt="imagem de produto">
                    </div>
                        <p class="produto-title">${limpezaProdutos[i].nome}</p>
                        <p class="produto-text">${limpezaProdutos[i].desc}</p>
                        <button class="produto-btn" onclick="addCarrinho()" id="${limpezaProdutos[i].id}">Adicionar ao carrinho</button>
            </div>`;
        }
    }
    if(filtro.value == 'reforma'){
        catalogo.innerHTML = ''
        for(let i =0; i < maximo;i++){
            catalogo.innerHTML += `
        <div class="box-produto">
            <div class="window-img-produto">
                <img class="img-produto" src="${reformaProdutos[i].img}" alt="imagem de produto">
            </div>
                <p class="produto-title">${reformaProdutos[i].nome}</p>
                <p class="produto-text">${reformaProdutos[i].desc}</p>
                <button class="produto-btn" onclick="addCarrinho()" id="${reformaProdutos[i].id}">Adicionar ao carrinho</button>
        </div>`;
        }
    }
}

function carregarMais(){
    maximo += 3
    if(filtro.value == 'todosProdutos'){
        catalogo.innerHTML = ''
        for(let i =0; i < maximo;i++){
            catalogo.innerHTML += `
    <div class="box-produto">
            <div class="window-img-produto">
                <img class="img-produto" src="${todosProdutos[i].img}" alt="imagem de produto">
            </div>
                <p class="produto-title">${todosProdutos[i].nome}</p>
                <p class="produto-text">${todosProdutos[i].desc}</p>
                <button class="produto-btn" onclick="addCarrinho()" id="${todosProdutos[i].id}">Adicionar ao carrinho</button>
    </div>`;
        }
    }
    if(filtro.value == 'limpeza'){
        catalogo.innerHTML = ''
        for(let i = 0; i < maximo;i++){
            catalogo.innerHTML += `
            <div class="box-produto">
                    <div class="window-img-produto">
                        <img class="img-produto" src="${limpezaProdutos[i].img}" alt="imagem de produto">
                    </div>
                        <p class="produto-title">${limpezaProdutos[i].nome}</p>
                        <p class="produto-text">${limpezaProdutos[i].desc}</p>
                        <button class="produto-btn" onclick="addCarrinho()" id="${limpezaProdutos[i].id}">Adicionar ao carrinho</button>
            </div>`;
        }
    }

}










