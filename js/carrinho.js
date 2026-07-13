//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []


   
//FUNÇÃO PARA ADICIONAR UM ITEM 
const addItem = (objItem)=>{
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify (itensCarrinho))

    listItens()
    
}
//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = ()=>{
    const listaItens = JSON.stringify(sessionStorage.getItem('carrinhoSessao'))

    montaTelaCarrinho(listItens)
}
//MONTAR TELA CARRINHO
const montaTelaCarrinho = (objListaItens)=>{
    const sectionItemCarrinho = document.querySelector('#itens-carrinho')
}
const sectionItensCarrinho = document.querySelector('#itens-carrinho')
    listaItens.forEach((elem, i)=>{
       // console.log(`elemento ${i + 1} - ${elem. descricao_produto} - ${elem.valor_unitario} ${elem.unidade} `)
       alert(`elemento ${i + 1} - ${elem. descricao_produto} - ${elem.valor_unitario} ${elem.unidade} `)

       const sectionItem = document.createElement('section')
       sectionItem.setAttribute('class', item)
    })




//EXPORTAÇÃO
export { addItem }