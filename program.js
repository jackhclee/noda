var steps = [[0,0],[0,1],[5,5]]
var gridSize = 10

function getGrid(size) {
    var grid = []
    var init = 0
    for (var init = 0; init < size; init++) {
        grid.push(init)
    }
    return grid
}

function existInSteps(cursor) {
    //console.log(`checking cursor ${cursor}`)
    return steps.some(step => {
        //console.log(`step ${step}`)
        return (step[0] == cursor[0]) && (step[1] == cursor[1])
    })
    
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var terminate = false


  


// console.log("Starting")
var result = []
for (var x in getGrid(10)) {
    for (var y in getGrid(10)) {
        console.log(`Checking step ${x} ${y}`)
        if (existInSteps([x,y])) {
            console.log("X")
            result.push("X")
        } else {
            console.log("O")
            result.push("0")
        }
    }
}

console.log(result.length)
for (var x = 0; x < result.length; x++) {
    process.stdout.write(result[x])
    if ((x + 1) % 10 == 0) {
        process.stdout.write("\n")
    }
}

function askInput() {
    rl.question('What is your name ? ', function (name) {

        if (['u','d','l','r'].indexOf(name) >=0) {
            console.log("process u d l r")
        } else if (name === 'p') {
            console.log("print the steps")
        }
        else if (name === 'e') {
            console.log("exit app")
            process.exit();
        } else {
            console.log(`unknown input ${name}. Use only u d l r p e `)
        }
        askInput();
    })
}

askInput();

console.log("Ending")

// console.log(existInSteps([0,0]))

