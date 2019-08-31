function Pessoa (nome){
    this.falar = function() {
        return console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('joão')
p1.falar()