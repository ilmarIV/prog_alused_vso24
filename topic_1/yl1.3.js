const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage astme alus: ', astmeAlus => {
    rl.question('sisestage astendaja: ', astendaja => {
        let vastus = astmeAlus**astendaja
        console.log(vastus)
        rl.close()
    })
})
