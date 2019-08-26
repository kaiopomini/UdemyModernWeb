const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = p => p.genero === 'F'
const pais = p => p.pais === 'China'
const salario = (anterior, atual)=> atual.salario < anterior.salario ? atual : anterior

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(mulher).filter(pais).reduce(salario))  // Desafio - Mostrar a MULHER CHINESA com o MENOR SALARIO
})



