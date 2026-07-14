// ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem("carrinhoSessao", JSON.stringify(itensCarrinho))


}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {

    const listaItens = JSON.parse(sessionStorage.getItem("carrinhoSessao"))

    return listaItens

}

//EXPORTAÇÃO
export { addItem, listItens }