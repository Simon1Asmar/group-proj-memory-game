// Connect DOM Elements
const bdy = document.querySelector("body");
const guesses = document.querySelector("#guessCount");
const memoryGameCon = document.querySelector(".memory-game");
const wrongGuesses = document.querySelector("#wrongGuessCount");
const resetButton = document.querySelector("#resetButton");
const memoryCards = document.querySelectorAll(".memory-card");
console.log(memoryCards);

let currentClickedCard1 = null;
let currentClickedCard2 = null;
const clickedElements = [];
let guessesCounter = 0;
let correctGuessCounter = 0;
let wrongGuessCounter = 0;

startNewGame();
resetButton.addEventListener("click", startNewGame);
//Array of names of images (strings) (each name written twice)
//function that takes an array of strings and shuffles and returns it

//function that takes the shuffled array
//sets the data-name attribute of the sections,
//and the src attribute of each section's img child based on the array arrayOfNames.forEach((currentName)=>{change img source `assets/images/${currentName}.jpg`})  `assets/images/${arrayOfNames[0]}.jpg`

//CSS Flip Test

//Game Logic
//Start Game function
function startNewGame() {
  reset();
  // shuffle
  shuffle()
  memoryCards.forEach((card) => {
    card.addEventListener("click", cardClickListener);
  });
}

// listen for button clicks
function cardClickListener(event) {
  //gets data-name attribute of clicked target and sends it to function cardClicked
  clickedElements.push(event.target.parentElement);
  cardClicked(event.target.parentElement.getAttribute("data-name"));

  //FLIP CARD TRANSITION
  event.target.parentElement.classList.toggle("flipped");
}

function cardClicked(dataName) {
  if (!currentClickedCard1) {
    currentClickedCard1 = dataName;
  } else if (!currentClickedCard2) {
    currentClickedCard2 = dataName;
  }

  if (currentClickedCard1 != null && currentClickedCard2 != null) {
    // guesses inntertext increase count
    guessesCounter++;
    guesses.innerText = guessesCounter;
    if (currentClickedCard1 === currentClickedCard2) {
      console.log("correct guesss");
      correctGuessCounter++;
      //removing eventlisteners from card flipedcards
      clickedElements.forEach((card) => {
        card.removeEventListener("click", cardClickListener);
      });
      clickedElements.length = 0;
      // check if the game done
    } else {
      console.log("wrong guess");
      // wrong gesses innertext increase count
      wrongGuessCounter++;
      wrongGuesses.innerText = wrongGuessCounter;

      // flip cards

      setTimeout(() => {
        flipCardsBack();
        clickedElements.length = 0;
      }, 2000);
    }

    currentClickedCard1 = null;
    currentClickedCard2 = null;
    // clickedElements.length = 0
  }
}

function flipCardsBack() {
  clickedElements.forEach((card) => {
    card.classList.toggle("flipped");
  });
}

// Reset Game
//calls the shuffle function
function reset() {
  currentClickedCard1 = null;
  currentClickedCard2 = null;
  clickedElements.length = 0;
  guessesCounter = 0;
  guesses.innerText = guessesCounter;
  correctGuessCounter = 0;
  wrongGuessCounter = 0;
  wrongGuesses.innerText = wrongGuessCounter;
}
function shuffle() {
    memoryCards.forEach(card => {
    let randompos= Math.floor(Math.random()*12)
    card.style.order=randompos
    })
}
// function
//if guess (card1===card2) is correct freeze images add 1 to guesses
//if wrong (card1!=card2) guesses add 1 to guesses and wrong guesses
//game Over
