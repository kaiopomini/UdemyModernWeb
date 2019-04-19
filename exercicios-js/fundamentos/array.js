const valores = [7.7, 8.9, 9.2, 5.5]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10
console.log(valores[4])
valores[10] = 10
console.log(valores)
console.log(valores.length)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.pop())  // retira a ultima posição
delete valores[0]
console.log(typeof valores)
console.log(valores)
