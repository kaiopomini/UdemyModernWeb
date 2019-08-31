function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula01 = new Aula('Bem vindo', 123)
const aula02 = new Aula('Até logo', 456)

console.log(aula01, aula02)

// simulando new

function novo(f, ...params){ //...paramns é um array com os parametros pelo uso do ...
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula03 = novo(Aula, 'Bem vindo', 123)
const aula04 = novo(Aula, 'Até logo', 456)

console.log(aula03, aula04)