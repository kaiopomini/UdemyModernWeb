function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metododo publico (this deixa publica)
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodod publico (this deixa publica)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

const uno = new Carro  //nao precisa dos parenteses, usa os parametros padroes
uno.acelerar()

console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //func
console.log(typeof ferrari) //Object