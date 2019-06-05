let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}

ola = () => 'Olá' // possui parametro mas não é passado nada.
ola = _ => 'Olá' // possui parametro mas não é passado nada.

console.log(ola())