const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage kirja suurus MB: ', size => {
    rl.question('sisestage kirja teema peakiri: ', topic => {
        rl.question('kas kirjaga on kaasas fail? (jah/ei): ', attachment => {
            if ((topic === "") || ((attachment === "jah") && (size > 1))) {
                console.log(`kiri on sp2mm`)
            } else {
                console.log(`kiri ei ole sp2mm`)
            }
            rl.close()
        })
    })
})

