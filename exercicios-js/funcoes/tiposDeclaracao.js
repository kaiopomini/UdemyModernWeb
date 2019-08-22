console.log(soma(3,4)) //carrega antes da interpretação se for function declaration
// console.log(sub(3,4)) //não carrega - is not defined

//function declaration - pode ser chamada antes da declaração
function soma(x, y) {
    return x + y
}

// function expression - so poder ser chamada depois de declarada
const sub = function (x, y){
    return x - y
}

// named function expression (no debug retorna o nome da func no stack) - so poder ser chamada depois de declarada
const mult = function mult(x, y){
    return x*y
}