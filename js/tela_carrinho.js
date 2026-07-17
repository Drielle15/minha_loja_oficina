import { listItens, removeItem, alterarQuantidade } from "./carrinho.js";

// MONTAR TELA CARRINHO
const montaTelaCarrinho = () => {

    const sectionItensCarrinho = document.querySelector('#itens-carrinho');

    sectionItensCarrinho.innerHTML = '';

    const itens = listItens() || [];

    itens.forEach((elem, i) => {

        const sectionItem = document.createElement('section');
        sectionItem.setAttribute('class', 'item');

        // IMAGEM
        const divImgItem = document.createElement('div');
        divImgItem.setAttribute('class', 'img-item');

        const imgItem = document.createElement('img');
        imgItem.setAttribute('src', elem.caminho_imagem);
        imgItem.setAttribute('alt', elem.descricao_produto);

        divImgItem.appendChild(imgItem);

        // DESCRIÇÕES
        const divDescricaoItens = document.createElement('div');
        divDescricaoItens.setAttribute('class', 'descricoes-itens');

        const divDescricao = document.createElement('div');
        divDescricao.setAttribute('class', 'descricao');
        divDescricao.innerHTML = elem.descricao_produto;

        // VALORES
        const divValores = document.createElement('div');
        divValores.setAttribute('class', 'valores');

        // PREÇO UNITÁRIO
        const pItem = document.createElement('p');
        pItem.innerHTML =
            `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.', ',')}`;

        // INPUT QUANTIDADE
        const divQuant = document.createElement('div');
        divQuant.setAttribute('class', 'input-quantidade');

        const inputQuantidade = document.createElement('input');
        inputQuantidade.setAttribute('type', 'number');
        inputQuantidade.setAttribute('name', `quant${i}`);
        inputQuantidade.setAttribute('id', `quant${i}`);
        inputQuantidade.setAttribute('class', 'input-item');
        // MOSTRA A QUANTIDADE
        inputQuantidade.setAttribute('value', elem.quantidade);
        // NÃO DEIXA MENOR QUE 1
        inputQuantidade.setAttribute('min', '1');
        // AUMENTA DE 1 EM 1
        inputQuantidade.setAttribute('step', '1');

        // QUANDO MUDAR A QUANTIDADE
        inputQuantidade.addEventListener('change', (e) => {
         // PEGA O VALOR
            let quantidade = parseInt(e.target.value);
         // SE FOR MENOR QUE 1, VOLTA PARA 1
            if (isNaN(quantidade) || quantidade < 1) {
                quantidade = 1;
                e.target.value = 1;
            }
        // MUDA A QUANTIDADE
            alterarQuantidade(i, quantidade);
         // ATUALIZA A TELA
            montaTelaCarrinho();

        });

        divQuant.appendChild(inputQuantidade);

       // CALCULA O VALOR DO PRODUTO
        const subtotal = elem.valor_unitario * elem.quantidade;

    // MOSTRA O SUBTOTAL
        const pCalc = document.createElement('p');
        pCalc.innerHTML =
            `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

        // REMOVER
        const imgRemover = document.createElement('img');
        imgRemover.setAttribute('src', '../imagens/remover.png');
        imgRemover.setAttribute('alt', 'remover');

        imgRemover.addEventListener('click', () => {

            if (confirm(`Tem certeza que deseja remover ${elem.descricao_produto} do carrinho?`)) {

                removerItemTela(i);

            }

        });

        divValores.appendChild(pItem);
        divValores.appendChild(divQuant);
        divValores.appendChild(pCalc);
        divValores.appendChild(imgRemover);

        divDescricaoItens.appendChild(divDescricao);
        divDescricaoItens.appendChild(divValores);

        sectionItem.appendChild(divImgItem);
        sectionItem.appendChild(divDescricaoItens);

        sectionItensCarrinho.appendChild(sectionItem);

    });
// ATUALIZA OS VALORES
    atualizarTotais();

};

// CALCULA O TOTAL
const atualizarTotais = () => {
 // PEGA OS ITENS
    const itens = listItens() || [];
   // COMEÇA O TOTAL
    let total = 0;
// SOMA OS PRODUTOS
    itens.forEach(item => {
        total += item.valor_unitario * item.quantidade;

    });
    // VALOR DO FRETE
    const frete = 10;
 // MOSTRA O TOTAL
    document.querySelector('#valor-total').innerHTML =
        `R$ ${total.toFixed(2).replace('.', ',')}`;
 // MOSTRA O FRETE
    document.querySelector('#valor-frete').innerHTML =
        `R$ ${frete.toFixed(2).replace('.', ',')}`;
// MOSTRA O VALOR FINAL
    document.querySelector('#valor-pagar').innerHTML =
        `R$ ${(total + frete).toFixed(2).replace('.', ',')}`;

};

// REMOVER ITEM
const removerItemTela = (pos) => {

    removeItem(pos);

    montaTelaCarrinho();

};

// INICIAR
montaTelaCarrinho();