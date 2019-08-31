const notas = [6.2, 8.0, 9.9, 5.0, 10.0, 8.5]
for (let i in notas) {
    console.log(`nota ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 59
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}