// ARRAY DE ITENS DO CARRINHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

// FUNÇÃO ITEM
const item = (objProduto) => {

    return {
        id_Produto: objProduto.id_produto,
        descricao_produto: objProduto.descricao_produto,
        valor_unitario: objProduto.valor_unitario,
        unidade: objProduto.unidade,
        caminho_imagem: objProduto.caminho_imagem,
        quantidade: 1
    };
};

// FUNÇÃO PARA ADICIONAR ITEM
const addItem = (objItem) => {

   // VERIFICA SE O PRODUTO JÁ EXISTE
    const produtoExistente = itensCarrinho.find(
        produto => produto.id_Produto === objItem.id_produto
    );
 //  // SE JÁ EXISTIR, AUMENTA A QUANTIDADE
    if (produtoExistente) {
        produtoExistente.quantidade++;
  // SE NÃO EXISTIR, ADICIONA UM NOVO PRODUTO
    } else {
        itensCarrinho.push(item(objItem));
    }
// // SALVA O CARRINHO ATUALIZADO
    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

// MOSTRA OS ITENS DO CARRINHO
const listItens = () => {

    return JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

};

// MUDA A QUANTIDADE
const alterarQuantidade = (pos, quantidade) => {

    quantidade = parseInt(quantidade);

    // TRANSFORMA EM NÚMERO
    if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1;
    }
    // MUDA A QUANTIDADE DO PRODUTO
    itensCarrinho[pos].quantidade = quantidade;

    // SALVA O CARRINHO
    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

// REMOVER ITEM
const removeItem = (pos) => {

    itensCarrinho.splice(pos, 1);

    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );

};

// EXPORTAÇÃO
export {
    addItem,
    listItens,
    removeItem,
    alterarQuantidade
};