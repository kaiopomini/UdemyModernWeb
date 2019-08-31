const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return !p.fragil
}))

resultado = produtos.filter(p => p.fragil).filter(p => p.preco >= 500)

console.log(resultado)