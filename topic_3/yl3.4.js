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
function drawApples() {
    return Math.floor(Math.random() * 2) + 1;
}

let totalApples = 14
rl.question('mitu poialpoissi soovib 6unu: ', dwarves => {
    for (let i = 0, givenApples = 0; i < dwarves; i++) {
        givenApples = drawApples()
        console.log(givenApples)
        totalApples -= givenApples
    }
    console.log(`lumivalgekesele j2i ${totalApples} 6una`)
    rl.close()
})
