const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao) // se não usar this, não encontra 
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()  // conflito entre paradgmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // Amarra ao objeto o dono do contexto
falarDePessoa()
