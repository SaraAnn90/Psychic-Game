var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var userGuesses = "";
var userInput = "";

var characters = 'abcdefghijklmnopqrstuvwxyz';
var computerGenerated = characters.charAt(Math.floor(Math.random() * characters.length));

console.log(computerGenerated);

document.getElementById("winsValue").innerText = userWins;
document.getElementById("lossValue").innerText = userLosses;
document.getElementById("guessLeft").innerText = guessesLeft;
document.getElementById("userGuesses").innerText = userGuesses;

function resetValues() {
    guessesLeft = 9;
    userGuesses = "";
    userInput = "";
    computerGenerated = characters.charAt(Math.floor(Math.random() * characters.length));
}

function checkuserGuess (event) {
    var charCode = event.which || event.keyCode;
    userInput = String.fromCharCode(charCode).toLowerCase();
    userGuesses += userInput + ",";
    document.getElementById("userGuesses").innerText = userGuesses;

    if (userInput === computerGenerated) {
        userWins += 1; 
        resetValues();
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            userLosses += 1;
            resetValues();
        }
        
    }
    document.getElementById("winsValue").innerText = userWins;
    document.getElementById("lossValue").innerText = userLosses;
    document.getElementById("guessLeft").innerText = guessesLeft;
};

document.addEventListener("keydown", checkuserGuess);





