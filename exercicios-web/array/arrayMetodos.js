const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o ultimo elemento do array

console.log(pilotos)

pilotos.push('verstappen')

console.log(pilotos)
pilotos.shift() // remove o primeiro elemento do array

console.log(pilotos)

pilotos.unshift('Hamilton')

console.log(pilotos)

// splice pode adcionar e remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')

console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // inclui o primeiro indice e não inclui o ultimo (1, 2, 3)

console.log(algunsPilotos2)