const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}',
]

// retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco


resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)