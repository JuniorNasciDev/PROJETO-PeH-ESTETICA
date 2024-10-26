
const botoes = document.querySelectorAll('.btn-galeria')

const fotos = document.querySelectorAll('.img-window')





botoes[0].style.borderTop = '1px solid white'
for(i in fotos){
    fotos[i].innerHTML = `<img class='img-galeria' src='../assets/galeria/produtos.png' alt='imagem loja'>`
}


addEventListener('click',(e)=>{
    if(e.target.id === 'produto'){
        fotos.innerHTML = ''
        for(i in fotos){
            fotos[i].innerHTML = `<img class='img-galeria' src='../assets/galeria/produtos.png' alt='imagem loja'>`
        }
        botoes[1].style.borderTop = '1px solid transparent'
        botoes[2].style.borderTop = '1px solid transparent'
        e.target.style.borderTop = '1px solid white'
    }else if(e.target.id === 'carros'){
        fotos.innerHTML = ''
        for(i in fotos){
            fotos[i].innerHTML = `<img class='img-galeria' src='../assets/galeria/carros.png' alt='imagem loja'>`
        }
        botoes[0].style.borderTop = '1px solid transparent'
        botoes[2].style.borderTop = '1px solid transparent'
            e.target.style.borderTop = '1px solid white'
    }else if(e.target.id === 'servicos'){
        fotos.innerHTML = ''
        for(i in fotos){
            fotos[i].innerHTML = `<img class='img-galeria' src='../assets/galeria/servico.png' alt='imagem loja'>`
        }
        botoes[0].style.borderTop = '1px solid transparent'
        botoes[1].style.borderTop = '1px solid transparent'
        e.target.style.borderTop = '1px solid white'
    }
})
