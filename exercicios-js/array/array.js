console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('João')

console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'rafael'

console.log(aprovados.length, aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort()

console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])

aprovados = ['bia', 'carlos', 'ana']

aprovados.splice(1, 1)

console.log(aprovados)