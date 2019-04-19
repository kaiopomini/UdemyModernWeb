// função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)
imprimirSoma(2)
imprimirSoma(2, 4, 4)


// função com retorno

function soma(a, b = 0) {
    return(a + b)
}

console.log(soma(2, 3))
console.log(soma(7))
console.log(soma())
