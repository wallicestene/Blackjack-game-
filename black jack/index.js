let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false 
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
   name: "Wallace",
   chips: 120
}
let playersEl = document.getElementById("player-el") 
playersEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
    return 10
    }else if (randomNumber === 1){
    return 11
   }else {
    return randomNumber
   }
}

function startGame(){
    isAlive = true
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
   for (let i = 0; i < cards.length ; i++) {
    cardsEl.textContent += cards[i] + " - "
   }
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }else if ( sum === 21 ){
        message = "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    }else {
        message = "You lost!"
        isAlive = false
    }
    messageEl.textContent = message 
}
function newCard(){
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()  
    sum += card
    cards.push(card) 
    renderGame()
    }
}


