const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage perekonnanimi: ', lastName => {
    let lastLetters = lastName.slice(-2)
    if (lastLetters === "ne") {
        console.log(`on abielus`)
    } else if (lastLetters === "te") {
        console.log(`ei ole abielus`)
    } else if (lastLetters.slice(-1) === "e") {
        console.log(`m22ramata`)
    } else {
        console.log(`tegu ei ole leedu naise nimega`)
    }
    rl.close()
})

