const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao() //a função carrega onde ela foi definida, por isso excreve 'Global'
}

exec()