const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... - cuidado em ler arquivos grandes para não travar o loop do i/o

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// assincrono... 

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// json pode ser lido diretamente como obj, mas é sincrono.

const config = require('./arquivo.json')
console.log(config.db)

// ler pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})