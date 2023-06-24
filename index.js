// let firstCard  = Math.floor((Math.random() * 100) + 1);
// let secondCard = Math.floor((Math.random() * 100) + 1);

let cards = [];
let sum = 0
let hasBlackjack = false;
let isAlive = true;
let message = "";
console.log(cards)

let player ={
  name : "Aditya",
chips : 80
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " "+ "$" + player.chips


function getRandom() {
  const randomNumber = Math.floor(Math.random() * 12 + 1);

  if (randomNumber == 1) {
    return 11;
  } else if (randomNumber >= 11 && randomNumber <= 13) {
    return 10;
  } else {
    return randomNumber;
  }
}

// console.log(hasBlackjack)
// console.log(isAlive)

let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");

function startGame() {
  isAlive = true;
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "card: ";

  //  cardsEl.textContent = "card: " + cards[0] + " " + cards[1];

  for (let j = 0; j < cards.length; j++) {
    cardsEl.textContent += cards[j] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "You're out of the game! 😭 ";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {

if( isAlive === true && hasBlackjack === false){
 



  let card = getRandom();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}
}

