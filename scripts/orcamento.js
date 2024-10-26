
const orcamentoLista = []
let passa
let listaF = JSON.parse(localStorage.getItem('listaOrcamento'))


function addCarrinho() {
  for (i in todosProdutos) {
    if (todosProdutos[i].id == event.target.id) {
        passa = todosProdutos[i]
      document.querySelector(".box-quantidade").style.display = "flex";
      
    }
  }

}



function confirmar() {
    if(document.querySelector('.quantidade').value){
      
        passa.quantidade = `${document.querySelector('.quantidade').value} ${document.querySelector('#tipo').value}`
        console.log(passa)
        orcamentoLista.push({
            nome:passa.nome,
            qtd:passa.quantidade,
            id:passa.id
          })
        
        orcamentoString = JSON.stringify(orcamentoLista)
        localStorage.setItem('listaOrcamento',orcamentoString)
        document.querySelector('.quantidade').value = ''
        document.querySelector('#tipo').value = 'un'
        closeP()
    }else{
        console.log("erro por favor digite uma quantidade")
    }
}






function closeP() {
  document.querySelector(".box-quantidade").style.display = "none";
}
;
