function rand([ min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


console.log(rand([50, 10]))
console.log(rand([50, 10]))
console.log(rand([]))
//  console.log(rand()) // ele espera receber um array, entao não funciona.
console.log(rand([, 15]))
console.log(rand([10]))
