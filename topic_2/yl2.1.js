const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage 6uetemperatuur: ', temperature => {
    if (temperature > 4) {
        console.log(`Ei ole j22tumise ohtu`)
    } else if (temperature < 4) {
        console.log(`On j22tumise oht`)
    } else {
        console.log(`ERROR, teie sisend ei ole numbriline temperatuur`)
    }
    rl.close()
})

