// ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho = JSON.parse(localStorge.get('carrinhoSessao'))
//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))
    
   //localStorage
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {

    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao"))

    return listaItens

}

//FUNÇÃO REMOVER ITEM DO ARRAY
const removeItem = (pos)=>{
    itensCarrinho.splice(pos,1)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho)) 
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem }