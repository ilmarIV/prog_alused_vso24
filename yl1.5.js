const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage 6ppeaine ainepunktide arv: ', ainepunktid => {
    rl.question('sisestage ]ppeaine n2dalate arv: ', n2dalad => {
        let vastus = Math.ceil((ainepunktid * 26) / n2dalad)
        console.log(vastus)
        rl.close()
    })
})
