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

   // Verifica se o produto já existe no carrinho
    const produtoExistente = itensCarrinho.find(
        produto => produto.id_Produto === objItem.id_produto
    );
 // Se já existir, aumenta apenas a quantidade
    if (produtoExistente) {
        produtoExistente.quantidade++;
 // Caso contrário, adiciona um novo produto ao carrinho
    } else {
        itensCarrinho.push(item(objItem));
    }
// Atualiza os dados do carrinho na sessionStorage
    sessionStorage.setItem(
        "carrinhoSessao",
        JSON.stringify(itensCarrinho)
    );
};

// LISTAR ITENS
const listItens = () => {

    return JSON.parse(sessionStorage.getItem("carrinhoSessao")) || [];

};

// Converte o valor digitado para inteiro
const alterarQuantidade = (pos, quantidade) => {

    quantidade = parseInt(quantidade);
// Valida para aceitar somente valores inteiros positivos
    if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1;
    }
// Atualiza a quantidade do produto selecionado
    itensCarrinho[pos].quantidade = quantidade;
// Salva as alterações no carrinho
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