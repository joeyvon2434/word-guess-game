//=================================
//Variables Section
//=================================

//List of global variables

var wordList = ["cat", "dog", "monkey"];
var selectedWord = 'hangman';
var guessesRemaining = 5;
var wrongGuesses = [];
var correctGuesses = [];
var guesses = [];


//=================================
//Functions Section
//=================================

//Function that selects a random word from the list
 function selectWord() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];   
    console.log(selectedWord);
}

function checkGuess(keyPress) {
    //Checking if letter has baeen guessed before
        
//=======================
    //Checking guesses
//=======================

    //Check if letter has already been guessed

    //See if letter is correct
        for (i = 0; i < selectedWord.length; i++)

            if (selectedWord[i] === keyPress.key) {
               correctGuesses.push(keyPress.key);
               console.log(correctGuesses);
            };
    }


        //===================
        //Call Functions Here
        //===================
selectWord();

addEventListener("keyup", checkGuess)