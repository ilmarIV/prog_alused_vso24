const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let seat = ""

rl.question('Kas soovite istekohta valida ise ("ise") v6i loosida ("loos")?: ', optionChoice => {
    if (optionChoice === "ise") {
        rl.question('Kas soovite istuda akna 22res ("aken") v6i mitte ("muu")?: ', optionSeat => {
            if (optionSeat === "aken") {
                seat = "Aknakoht"
            } else if (optionSeat === "muu") {
                seat = "Vahek2igukoht"
            } else {
                console.log("ERROR istekoha valikul")
            }
            console.log(`Valisite ise. ${seat}`)
            rl.close()
        })
    } else if (optionChoice === "loos") {
        const randomNumber = Math.floor(Math.random() * 3)
        if (randomNumber === 0) {
            seat = "Aknakoht"
        } else  {
            seat = "Vahek2igukoht"
        }
        console.log(`Istekoht loositi. ${seat}`)
        rl.close()
    } else {
        console.log('ERROR ise ja loosi vahel valimisel')
        rl.close()
    }
})


