// Connect DOM Elements
const bdy = document.querySelector("body");
const guesses = document.querySelector("#guessCount");
const memoryGameCon = document.querySelector(".memory-game");
const wrongGuesses = document.querySelector("#wrongGuessCount");
const resetButton = document.querySelector("#resetButton");
const memoryCards = document.querySelectorAll(".memory-card");
console.log(memoryCards);


let currentClickedCard1 = null
let currentClickedCard2 = null 

startNewGame();

//Array of names of images (strings) (each name written twice)
//function that takes an array of strings and shuffles and returns it

//function that takes the shuffled array
//sets the data-name attribute of the sections,
//and the src attribute of each section's img child based on the array arrayOfNames.forEach((currentName)=>{change img source `assets/images/${currentName}.jpg`})  `assets/images/${arrayOfNames[0]}.jpg`

//CSS Flip Test

//Game Logic
//Start Game function
function startNewGame(){
  reset();

  memoryCards.forEach((card)=>{
    card.addEventListener("click", cardClickListener);
  })  
}

// listen for button clicks
function cardClickListener(event){
  //gets data-name attribute of clicked target and sends it to function cardClicked
  cardClicked(event.target.parentElement.getAttribute("data-name"));

  //FLIP CARD TRANSITION
}

function cardClicked(dataName){
  if(!currentClickedCard1){
    currentClickedCard1 = dataName;
  } else if(!currentClickedCard2){
    currentClickedCard2 = dataName;
  }

  if(currentClickedCard1!=null && currentClickedCard2!=null){
    // guesses inntertext increase count
    if(currentClickedCard1 === currentClickedCard2){
      console.log("correct guesss");
      //
    } else {
      console.log("wrong guess");
      // wrong gesses innertext increase count
    }

    currentClickedCard1 = null;
    currentClickedCard2 = null;

  } 
}

// Reset Game 
function reset(){
  //calls the shuffle function

}



// function 
//if guess (card1===card2) is correct freeze images add 1 to guesses
//if wrong (card1!=card2) guesses add 1 to guesses and wrong guesses
//game Over
