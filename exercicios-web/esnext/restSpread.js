// operador ... rest(juntar) / spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto

const funcionario = { nome : 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }  //espalha os atributos de funcionario - tambem nao influencia no funcionario original

console.log(clone)

// usar spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)