//=================================
//Variables Section
//=================================

//List of global variables

var wordList = ["cat", "dog", "monkey"];
var selectedWord = 'hangman';


//=================================
//Functions Section
//=================================

//Function that selects a random word from the list
 function selectWord() {
    var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];   
}



//================================
//Call functions in order section
//================================
