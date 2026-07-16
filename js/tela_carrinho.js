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
        inputQuantidade.setAttribute('value', elem.quantidade);
        inputQuantidade.setAttribute('min', '1');
        inputQuantidade.setAttribute('step', '1');

        inputQuantidade.addEventListener('change', (e) => {

            let quantidade = parseInt(e.target.value);

            if (isNaN(quantidade) || quantidade < 1) {
                quantidade = 1;
                e.target.value = 1;
            }

            alterarQuantidade(i, quantidade);

            montaTelaCarrinho();

        });

        divQuant.appendChild(inputQuantidade);

        // SUBTOTAL
        const subtotal = elem.valor_unitario * elem.quantidade;

        const pCalc = document.createElement('p');
        pCalc.innerHTML =
            `R$ ${subtotal.toFixed(2).replace('.', ',')}`;

        // REMOVER
        const imgRemover = document.createElement('img');
        imgRemover.setAttribute('src', '../imagens/icones/remover.png');
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

    atualizarTotais();

};

// ATUALIZAR VALORES
const atualizarTotais = () => {

    const itens = listItens() || [];

    let total = 0;

    itens.forEach(item => {

        total += item.valor_unitario * item.quantidade;

    });

    const frete = 10;

    document.querySelector('#valor-total').innerHTML =
        `R$ ${total.toFixed(2).replace('.', ',')}`;

    document.querySelector('#valor-frete').innerHTML =
        `R$ ${frete.toFixed(2).replace('.', ',')}`;

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