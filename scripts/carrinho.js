


const lista = document.querySelector('.box-list-carrinho')

listaF = JSON.parse(localStorage.getItem('listaOrcamento'))

const botaoEnviar = document.querySelector('.link-orcamento')

let mensagemFinaL = 'Orçamento de joão:%0A'



for(i in listaF){
    lista.innerHTML += `
         <li class="list-item">
                <div class="box-un">
                    <button class="item-btn">
                        <img src="../assets/carrinho/edit.svg" alt="">
                    </button>
                    <p>${listaF[i].qtd}</p>
                </div>
                <p>${listaF[i].nome}</p>
                <button id="btn-${i}" onclick="excluirCarrinho()" class="item-btnT">
                </button>
            </li>
    `
    mensagemFinaL += `${listaF[i].qtd} | ${listaF[i].nome}%0A`
}


function excluirCarrinho(){
    addEventListener('click', (e)=>{
        console.log(e.target)
    })
}





botaoEnviar.href = `https://api.whatsapp.com/send?phone=5511960713798&text=${mensagemFinaL}`

