const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('sisestage enda nimi: ', nimi => {
    rl.question('sisestage lubatud kiirus: ', lubatudKiirus => {
        rl.question('sisestage enda tegelik kiirus: ', tegelikKiirus => {
            let trahv = Math.min(3*(tegelikKiirus - lubatudKiirus), 190)
            let tulem = `${nimi}, kiiruse yletamise eest on teie trahv ${trahv} eurot.`
            console.log(tulem)
            rl.close()
        })
    })
})
