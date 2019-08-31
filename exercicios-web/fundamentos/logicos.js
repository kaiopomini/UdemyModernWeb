function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise (bitabit) xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log('1)', compras(true, true))
console.log('2)', compras(false, true))
console.log('3)', compras(true, false))
console.log('4)', compras(false, false))