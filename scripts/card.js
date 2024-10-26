

const listaCard = document.querySelectorAll('.card');

const cardOpen = document.querySelector('.back-open-card')
const cardTitulo = document.querySelector('.card-open-title')
const cardParagrafo = document.querySelector('.text-card')





listaCard[0].addEventListener('click', (e)=>{
    cardOpen.style.display = 'flex'
    cardTitulo.innerText = 'produtos'
    cardParagrafo.innerText = "trabalhamos com produtos para limpeza e estetica em geral, em carros de passeio e carros de serviços esse texto é um texto base é sera melhor escrito obrigado trabalhamos com produtos para limpeza e estetica em geral, em carros de passeio e carros de serviços esse texto é um texto base é sera melhor escrito obrigadotrabalhamos com produtos para limpeza e estetica em geral, em carros de passeio e carros de serviços esse texto é um texto base é sera melhor escrito obrigado"
    console.log(`voce Clicou na div ${listaCard[0].id}`)
})
listaCard[1].addEventListener('click', (e)=>{
    cardOpen.style.display = 'flex'
    cardTitulo.innerText = 'Valores'
    cardParagrafo.innerText = 'ola mundo'
    console.log(`voce Clicou na div ${listaCard[1].id}`)
})
listaCard[2].addEventListener('click', (e)=>{
    cardOpen.style.display = 'flex'
    cardTitulo.innerText = 'Historia'
    cardParagrafo.innerText = 'ola mundo'
    console.log(`voce Clicou na div ${listaCard[2].id}`)
})
listaCard[3].addEventListener('click', (e)=>{
    cardOpen.style.display = 'flex'
    cardTitulo.innerText = 'Clientes'
    cardParagrafo.innerText = 'ola mundo'
    console.log(`voce Clicou na div ${listaCard[3].id}`)
})


function closeCard(){
    cardOpen.style.display = 'none'
}


