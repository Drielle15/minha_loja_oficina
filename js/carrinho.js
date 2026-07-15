// ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []

//const itensCarrinho = JSON.parse(localStorage.get('carrinhoSessao')) || []

//FUNÇÃO ITEM
const item = (objProduto)=>{

    const item = {
        id_Produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario, 
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade : 1,
    }

    return item
}

//FUNÇÃO PARA ADICIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(item(objItem))

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

    //localStorage.setItem('carrinhoSessao' JSON.stringify(itensCarrinho))
}

//EXPORTAÇÃO
export { addItem, listItens, removeItem }