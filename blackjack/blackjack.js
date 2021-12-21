
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardArray = []

let sumEl = document.getElementById("sumEl") 
let messagePop = document.getElementById("message")
let cards = document.getElementById("cardsEl")



function getRandomCard() {

let randomNumber = Math.floor( Math.random() * 13) + 1
if (randomNumber > 10) {
    return 10
    }
else if (randomNumber === 1) {
    return 11
    }
else {
    return randomNumber
}


}



function startgame() {

isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cardArray = [firstCard, secondCard]
sum = firstCard + secondCard
renderGame()
}


function renderGame() {



    if (sum <= 20) {
    message = "You want to draw a new card?"
    
    }

else if (sum === 21) {
    message = "Du hast gewonnen!"
    hasBlackJack = true
    }

else if (sum > 21) {
    message = "You have lost the game :("
    isAlive = false
   }

   sumEl.textContent = "Sum: " + sum
   messagePop.textContent = message
   cards.textContent = "Cards: " 
   for (let i = 0; i < cardArray.length; i++){
    cards.textContent += cardArray[i] + " "
   }
}

function newCard() {
    if (isAlive === true){
 let kart = getRandomCard()
    sum = sum + kart
    cardArray.push(kart)
    renderGame()
  }
  else if (isAlive ===false) {

  }
    
    
   
}
