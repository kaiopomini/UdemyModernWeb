const soma = function (x, y){
    return x + y
}

const imprimirResultado = (a, b, operacao = soma) => {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(5, 6, soma)
imprimirResultado(8, 2, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)


const pessoa = {
    falar: function() {
        console.log('falar')
    },
    gritar() {
        console.log('GRITAR!!!')
    }
}