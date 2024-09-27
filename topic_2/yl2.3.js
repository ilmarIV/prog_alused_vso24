const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.question('sisestage vanus: ', age => {
    rl.question('sisestage sugu: ', gender => {
        rl.question('valige soovitud treeningutyyp: \n sisestage 1 tervisetreeningu puhul: \n sisestage 2 p6hivastupidavuse treeningu puhul: \n sisestage 3 intensiivse aeroobse treeningu puhul: ', type => {
            gender = gender.toLowerCase()
            let maxPulse = 0
            let lowerPulse = 0
            let upperPulse = 0

            if (gender === "n") {
                maxPulse = 206 - age * 0.88
            } else if (gender === "m") {
                maxPulse = 220 - age
            } else {
                console.log(`ERROR sooga`)
            }

            if (type === "1") {
                lowerPulse = maxPulse * 0.5
                upperPulse = maxPulse * 0.7
            } else if (type === "2") {
                lowerPulse = maxPulse * 0.7
                upperPulse = maxPulse * 0.8
            } else if (type === "3") {
                lowerPulse = maxPulse * 0.8
                upperPulse = maxPulse * 0.87
            } else {
                console.log(`ERROR treeningutyybiga`)
            }
            lowerPulse = Math.round(lowerPulse)
            upperPulse = Math.round(upperPulse)
            console.log(`Pulsisagedus peaks olema vahemikus ${lowerPulse} kuni ${upperPulse}.`)
            rl.close()
        })
    })
})

