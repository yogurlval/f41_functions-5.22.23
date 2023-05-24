
let jonSnowHealth = 100

// let newJonSnowHealth = String(jonSnowHealth)

// console.log( typeof newJonSnowHealth)

let theWinnerIs = "Jamie is the winner"

let newWinner = theWinnerIs.replace("Jamie", "Jon")

// console.log(newWinner)

if(newWinner.includes("Jon")){
    console.log("replaced successfully")
} else{
    console.log("failed!")
}

let newWinnerSplit = newWinner.split(' ')
console.log(newWinnerSplit)

let newWinnerJoin = newWinnerSplit.join('-')
console.log(newWinnerJoin)

let kebabCase = newWinnerJoin.toLowerCase()
console.log(kebabCase)

// FUNCTION

function isJonAlive(){
// function isJonAlive(attack){
    // jonSnowHealth -=attack
    // console.log(jonSnowHealth)
    if(jonSnowHealth > 0){
        console.log("Jon is alive!")
    } else {
        console.log("Jon is dead")
    }
}
// isJonAlive()

function supriseAttack(attack){
    jonSnowHealth -= attack //jonSnowHealth = jonSnowHealth - attack
    console.log(jonSnowHealth)
    isJonAlive()

}
supriseAttack(20)
supriseAttack(40)
supriseAttack(10)
supriseAttack(30)



function rollDice(){
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomRangeIndex = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomRangeIndex]
    
}

let rollDice1 = rollDice()
let rollDice2 = rollDice()

console.log("roll dice 1:", rollDice1)
console.log("roll dice 2:", rollDice2)