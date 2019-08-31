function teste1(num) {
    if (num > 7)
        console.log(num)

    console.log('final')
    // so executa no if a primeira linha quando sem chaves
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7);  // o ponto e virgula terminha o trecho de codigo
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)