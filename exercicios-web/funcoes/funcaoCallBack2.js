const notas = [2.5, 10, 1.2, 8.7, 3.6, 8.9, 9.7]

// sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

notasBaixas = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas)

// com callback and arrow
notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)


// com callback and arrow na const

const notasMenorQue7 = nota => nota < 7 // arrow func. na const

notasBaixas = notas.filter(notasMenorQue7)

console.log(notasBaixas)