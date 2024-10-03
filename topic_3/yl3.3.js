const readline = require('node:readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

/*
random number between min included and max included:

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
*/
function rollDie() {
    return Math.ceil(Math.random() * 6)
  }

rl.question('sisestage t2ringute arv: ', dice => {
    for (let i = 0; i < dice; i++) {
        console.log(rollDie())
        rollDie()
    }
    rl.close()
})
