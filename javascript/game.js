//=================================
//Variables Section
//=================================

//List of global variables

var wordList = ["rick", "morty", "summer", "jerry", "drunk", "squanchy", "gearhead", "nebulon", "fart", "gazorpazorpfield", "birdperson", "snowball", "meseeks"];
var selectedWord = 'hangman';
var guessesRemaining = 5;
var wrongGuesses = [];
var correctGuesses = [];
var guesses = ["placeHolder"];
var newLetter = false;
var wins = 0;
var losses = 0;
var victoryArray = ["placeHolder"]


//=================================
//Functions Section
//=================================

//Function that selects a random word from the list
 function selectWord() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];   
    resetGame();
    populateGameBox();
    generateVictoryArray();
    console.log(selectedWord);
}

function resetGame() {
    guessesRemaining = 5;
    wrongGuesses = [];
    correctGuesses = [];
    guesses = ["placeHolder"];
    newLetter = false;
    victoryArray = ["placeHolder"];
}
    

function checkGuess(keyPress) {
    //Checking if letter has baeen guessed before
        console.log(keyPress.key);
        var showLetter = document.getElementsByTagName("div");
//=======================
    //Checking guesses

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
                        if (correctGuesses.length + 1 == victoryArray.length) {
                            alert("Congratulations! You Win!");
                            wins = wins + 1;
                            document.getElementById("winsBox").innerHTML = ("Wins: " + wins);
                            
                        }
                    break;
                } else if (keyPress.key !== selectedWord[i] && i == selectedWord.length) {
                    newLetter = false;
                    guessesRemaining = guessesRemaining - 1;
                    wrongGuesses.push(keyPress.key);
                    document.getElementById("guessesRemainingBox").innerHTML = ("Guesses Remaining: " + guessesRemaining);
                        if(guessesRemaining == 0) {
                            alert("Game Over");
                            losses = losses + 1;
                            document.getElementById("lossesBox").innerHTML = ("Losses: " + losses);
                            for (k = 4; k < selectedWord.length + 4; k++) {
                                
                               showLetter[k].style.color = "black";
                               };
                        }
                    break;
                } else {}
            };
            console.log("guesses: " + guesses);
            console.log("correctGuesses: " + correctGuesses);
            console.log("wrongGuesses: " + wrongGuesses);
            console.log("remainingGuesses :" + guessesRemaining);
            console.log("wins " + wins);
            console.log("losses " + losses);
        }

        
 for (i = 4; i < selectedWord.length + 4; i++) {
     if (keyPress.key == showLetter[i].innerHTML) {
    showLetter[i].style.color = "black";
        }
    };
}


//Function to check the number of letters and populate the gameBox with the right number of blank spaces

function populateGameBox(characterCount) {
    document.getElementById("gameBox").innerHTML = "";

 for (i = 0; i < selectedWord.length; i++){
    var newText = document.createTextNode(selectedWord[i]);
    var newDiv = document.createElement ("div");
    newDiv.appendChild(newText);
    document.getElementById("gameBox").appendChild(newDiv);

 };

 var blank = document.getElementsByTagName("div");
 for (i = 4; i < selectedWord.length + 4; i++) {
    blank[i].style.color = "transparent";
    blank[i].style.borderBottom = "2px solid black";
 };
 
}

//Make Function to check for victory

function generateVictoryArray () {
    for (i = 0; i < selectedWord.length; i++) {
        for (j = 0; j < victoryArray.length; j++) {
            if (selectedWord[i] == victoryArray[j]) {
                break;
            } else if (selectedWord[i] !== victoryArray[j] && j + 1 == victoryArray.length) {
                victoryArray.push(selectedWord[i]);
            } else {}
    };
}
}




        //===================
        //Call Functions Here
        //===================
addEventListener("keyup", checkGuess);