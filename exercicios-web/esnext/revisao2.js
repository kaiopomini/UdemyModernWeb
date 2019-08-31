// arrow function

const soma = (a, b) => a + b
console.log(soma(2, 3))

// arrow function this

const lexico1 = () => console.log(this === exports)
const lexoco2 = lexico1.bind({})

lexico1()
lexoco2()

// parametro default

function log(texto = 'Node')  {
    console.log(texto)
}

log()
log('Sou mais forte!')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 5, 10, 9))