function criarProduto(nome, preco, desconto = 0.05) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Joao', 55))