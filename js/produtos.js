/*IMPORTANDO OS PRODUTOS DO ARQUIVO SCRIPT_CARRINHO*/
import{produtos} from './lista_produtos.js'

/*PEGANDO ELEMNTOR DO DOM*/
const sectionCards= document.querySelector('#cards')

//CARREGAMDO OS CARDS
const listaProdutos = () => {


 
}
//CHAMANDO A FUNÇÃO LISTAPRODUTOS
       listaProdutos()

//MONTANDO OS MENUS SEÇÕES
   const menuSecoes = () => {
       const mapSecoes = new Map()
//PERCORRENDO O ARRAY PRODUTO
       produtos.forEach((elem) => {
//SELECIONANDO AS SEÇÕES
          mapSecoes.set(elem.id_secao,elem)
       })

//CONVERTENDO MAP EM ARRAY
    const secoesFiltradas = Array.from(mapSecoes.values())

//RETORNANDO O ARRAY SELECIONADO
     return secoesFiltradas
   }

//FUNÇÃO PARA INSERIS OS MENUS NA LISTA
   const carregaSecoes = () =>{

//PEGANDO O ELEMNTO UL MENU-SEÇÕES DO DOM
    const ulMenuSecoes = document.querySelector('#menu-secoes')

//LIMPANDO O ELEMNTO DO DOM
    ulMenuSecoes.innerHTML =''

    // Criando a opção "Todos"
const liTodos = document.createElement('li');

const aTodos = document.createElement('a');
aTodos.setAttribute('href', '#');
aTodos.setAttribute('class', 'lnk-secao');
aTodos.innerHTML = 'Todos';

aTodos.addEventListener('click', () => {
    montaCards(produtos); // mostra todos os produtos
});

liTodos.appendChild(aTodos);
ulMenuSecoes.appendChild(liTodos);

//CHAMANDO A FUNÇÃO MENUSEÇÕES E PERCORRENDO O ARRAY DE SEÇÕES JA SELECIONADAS
   menuSecoes().forEach((elem,i) =>{

//CRIANDO O ELEMENTO LI
  const liMenu = document.createElement('li')
 
//CRIANDO O ELEMENTO A ATRIBUINDO O NOME DA SEÇÃO
    const aMenu = document.createElement('a')
    aMenu.setAttribute('href', '#')
    aMenu.setAttribute('class', 'lnk-secao')
    aMenu.innerHTML = elem.secao

    aMenu.addEventListener('click',() =>{
        montaCards(filtroProdutos(elem.id_secao))
    })

//ADICIONANDO O ELEMNTO FILHO A NO LI
    liMenu.appendChild(aMenu)

//ADICIONANDO OP ELEMENTO FILHO LIMENU NO OBJETO DOM
    ulMenuSecoes.appendChild(liMenu)
   
  })
}

carregaSecoes()


//FUNÇÃO FILTRO PRODUTO
const filtroProdutos = (idSecao) => {
    return produtos.filter(elem => elem.id_secao === idSecao);
}


//CAPTURANDO OS CARACTERES DO INPUT PESQUISA
//PEGANDO O INPUT DO DOM 
const inputPesquisa = document.querySelector('#pesquisa')

inputPesquisa.addEventListener('input', (evt)=>{

    //PEGANDO O VALOR DO INPUT E CONVERTENDO EM MINUSCULO
    let txtInput = evt.target.value.toLowerCase()

    //FILTRANDO OS CARDS A PARTIR DO FILTER E INCLUIDES
    montaCards(produtos.filter(elem => elem.descricao_produto.toLowerCase().includes(txtInput)))


})


//FUNÇÃO MONTA CARDS
const montaCards = (objProdutos) =>{

    //LIMPANDO A SECTION CARDS
    sectionCards.innerHTML = ''

//PERCORRENDO O ARRAY DE objProdutos
objProdutos.forEach((elem,i)=> {

//CRIANDO O ELEMENTO DIV E DEFININDO O ATRIBUTO CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class','card')

//CRIANDO O ELEMENTO IMG E DEFININDO OS ATRIBUTOS SRC E ALT OS VALORES DO CAMINHO DAS IMAGENS E A DESCRIÇÃO DOS PRODUTOS 
        const imgCard=document.createElement('img')
        imgCard.setAttribute('src',elem.caminho_imagem)
        imgCard.setAttribute('alt',elem.descricao_produto)

//CRIANDO O ELEMENTO P E ATRIBUINDO A DESCRIÇÃO DOS PRODUTOS 
        const pCard = document.createElement('p')
        pCard.innerHTML = elem.descricao_produto

//CRIANDO O ELEMENTO H2 E A ATRIBUINDO O VALOR UNITÁRIO DEIXANDO EM DUAS CASAS DECIMAIS E SUBSTITUINDO PONTO POR VÍRGULA
        const h2Card = document.createElement('h2')
        h2Card.innerHTML = `R$ ${parseFloat(elem.valor_unitario).
        toFixed (2).replace('.','.')}`

//CRIANDO O ELEMNTO BUTTON E DEFININDO OS ATRIBUTOS CLASS E A DESCRIÇÃO ADICIONAR 
        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn-add')
        btnCard.innerHTML = 'Adicionar'


        btnCard.addEventListener('click', ()=>{
            window.location.href = 'paginas/carrinho.html'
        })
//ADICIONANDO OS ELEMENTOS FILHOS AOS DIVCARD 
        divCard.appendChild(imgCard)
        divCard.appendChild(pCard)
        divCard.appendChild(h2Card)
        divCard.appendChild(btnCard)

//ADICIONANDO O DIVCARD A SECTION CARDS
        sectionCards.appendChild(divCard)


})  
}

carregandoProdutos(0)

