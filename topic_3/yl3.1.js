const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage mitu korda 2ratada: ', iterations => {
    for (let i = 0; i < iterations; i++) {
        console.log(`t6use ja s2ra!`)
    }
    rl.close()
})
