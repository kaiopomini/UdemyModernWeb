const a = {name: 'Teste'}

console.log(a)

const b = a

console.log(b)
b.name = 'Opa'

// objetos atribui valor por referencia (endereço da memoria)

console.log(a)

let c = 3
let d = c

d++

console.log(c, d)

// tipos primitivos transferem os valores

let valor  // não inicializada
console.log(valor)

valor = null  //inicializada mas sem endereço na memoria 

console.log(valor)

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.5

console.log(produto)

produto.preco = undefined

console.log(!!produto.preco)
console.log(produto)
console.log(produto.preco)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)
