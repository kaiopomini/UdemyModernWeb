// pessoa -> (end.memória) 123 -> {...}
const pessoa = { nome: 'João' }

pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> (end.memória) 456 -> {...}

//pessoa = {nome : 'Ana'}

// como o obj é uma constante, esse obj não poderá mudar o endereço da memória

Object.freeze(pessoa) // não se pode modificar de nenhuma maneira o objeto, deixa ele totalmente constante.

pessoa.nome = 'Maria'

console.log(pessoa.nome)