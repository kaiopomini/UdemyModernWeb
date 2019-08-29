// não aceita repetição e não é indexado

const times = new Set()

times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('São paulo'))
console.log(times.has('São PAULO'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSete = new Set(nomes)
console.log(nomesSete)