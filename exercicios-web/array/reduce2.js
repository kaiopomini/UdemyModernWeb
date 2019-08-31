const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// desafio 1 - todos os alunos são bolsistas?

let resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual ? true : false
    
})

console.log(resultado)

// desafio 2 - algum aluno é bolsista?


resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual ? true : false
})

console.log(resultado)