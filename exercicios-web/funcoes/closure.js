// closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto lexo em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() { //retorna 'Local' pois leva em consideração o local onde foi declarada dentro()
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())