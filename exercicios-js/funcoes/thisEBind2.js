function Pessoa() {
    this.idade = 0

    const self = this  // aqui instancia a this na constante, ai troca-se os demais this, como exemplo o proximo this.idade
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa