//PEGANDO ELEMENTO DO DOM
const inputCep = document.querySelector('#cep')


//CAPTURANDO O EVENTO change
inputCep.addEventListener('change',(evt)=>{

    const numCep = evt.target.value.replace(/\D/g,"")

    if(numCep.length !== 8){
        alert('CEP INVÁLIDO')


        return
    }
   //CHAMA A FUNÇÃO consultaCep
     consultaCEP(numCep)
})
    
  //FUNÇÃO CONSULTA CEP VIACEP
const consultaCEP = async (cep) => {

    //TENTA CONECTAR A API
    try{

        //FAZ A COMUNICAÇÃO COM A API DO VIA CEP POR MEIO DA FUNÇÃO fetch
        //AWAIT  AGUARDA ATÉ OBTER UM PROMISE
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        //SE O STATUS DA RESPOSTA NÃO FOR OK. DISPARA UMA EXCEÇÃO
        if(!resposta.ok){
            throw new Error("ERRO NA REQUISIÇÃO")
        }

        //OBTEM OS DADOS DA API
        const dadosEndereco = await resposta.json()

        //VERIFICA SE O DADOS SÃO VÁLIDOS
        if(dadosEndereco.erro){
            alert('CEP NÃO LOCALIZADO')

            return
        }

        //CHAMA A FUNÇÃO carregaInput
        carregaInput(dadosEndereco)

    //CASO HAJA QUALQUER ERRO É DISPARADA UMA EXCEÇÃO
    }catch(erro){
        console.log("ERRO", erro.message)
    }

//OBJETO LITERAL DOS INPUTS
const campos = {
    logradouro: document.querySelector("#logradouro"),
    bairro: document.querySelector("#bairro"),
    localidade: document.querySelector("#localidade"),
    uf: document.querySelector("#uf")
}

//FUNÇÃO CARREGA INPUTS
const carregaInput = (objEndereco)=>{
    const divEndereco = document.querySelector("#div-dados-endereco")
    divEndereco.classList.remove('ocult')

    for(let campo in objEndereco){
        campos[campo].value = objEndereco[campo]
        campos[campo].disabled = true
    }
}


}

//FUNÇÃO CARREGA INPUTS
const carregaInput = (objEndereco)=>{

}