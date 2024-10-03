const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage ringide arv: ', laps => {
    let carrots = 0
    for (let i = 1; i <= laps; i++) {
        if (i % 2 == 0){
            carrots += i
        }
    }
    console.log(`porgandite arv on ${carrots}.`)
    rl.close()
})
