// assincrono

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(frase) // passa só 1 paremetro, para passar mais de 1, usar Objeto
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))