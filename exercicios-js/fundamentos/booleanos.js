let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')  // qualquer texto
console.log(!![])  // array
console.log(!!{})  // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))  // se o resultado for true, poderia ser (isAtivo = Infinity)

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')  // string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))  // se o resultado for false

console.log('Para finalizar...')
console.log(('' || null || 0 || 'epa' || 123))  // pega a primera verdadeira

let nome = ''

console.log(nome || 'Desconhecido')  // se vazio, imprime desconhecido - usado para valor padrão.
