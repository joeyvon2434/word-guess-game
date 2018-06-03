//=================================
//Variables Section
//=================================

//List of global variables

var wordList = ["cat", "dog", "monkey"];
var selectedWord = 'hangman';
var guessesRemaining = 5;
var wrongGuesses = [];
var correctGuesses = [];
var guesses = ["placeHolder"];
var newLetter = false;


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
        for (i = 0; i < guesses.length + 1; i++) {
            if (keyPress.key == guesses[i]) {//identifies a matching letter and tells user to pick a new one
                alert("You've already guessed that letter! Please pick a new letter.");
                newLetter = false;
                break;
            } else if (keyPress !== guesses[i] && i == guesses.length) { //identifies that a letter is new and ends loop allowing program to continue to next step "correctness"
                guesses.push(keyPress.key);
                newLetter = true;
                break;
            } else {} //goes to the next i value because all previously guessed letters have not been checked
            
        };

        //See if letter is correct or incorrect
        if (newLetter == true) {

            for (i = 0; i < selectedWord.length + 1; i++) {

                if (keyPress.key === selectedWord[i]) {
                    correctGuesses.push(keyPress.key);
                    newLetter = false;
                    break;
                } else if (keyPress.key !== selectedWord[i] && i == selectedWord.length) {
                    newLetter = false;
                    guessesRemaining = guessesRemaining - 1;
                    wrongGuesses.push(keyPress.key);
                    break;
                } else {}
            };
            console.log("guesses: " + guesses);
            console.log("correctGuesses: " + correctGuesses);
            console.log("wrongGuesses: " + wrongGuesses);
            console.log("remainingGuesses :" + guessesRemaining);
        }
}
        //===================
        //Call Functions Here
        //===================
selectWord();
addEventListener("keyup", checkGuess)