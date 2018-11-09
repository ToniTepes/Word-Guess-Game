//Creat an array of words
var cars = [ "Rolls Royce", "Mercedes Benz", "Koenigsegg", "Lambroghini", "Lykan", "Bugatti Veyron", "Ferrari",];
//Choose word randomly
var randNum = Math.floor(Math.random() * cars.length);
var choosenCar = cars[randNum];
var rightGuess = [];
var wrongGuess = [];
var underscroe = [];

var docUnderScrore = document.getElementsByClassName("underscore");



//Creat underscroes based on length of word
var generateUnderscor = () => {
    for(var i = 0; i < choosenCar.length; i++) {
        underscroe.push("_");
    }
    return underscroe;
}

console.log(generateUnderscor());
//Get users guess
document.addEventListener("keypress", (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
    //If useres guess is correct 
    if(choosenCar.indexOf(keyWord) > -1) {
    //add to the rightGuess array
        rightGuess.push(keyWord);
    //Replace underscore with correct letter
        underscroe[choosenCar.indexOf(keyWord)] = keyWord;
    //Check to see if user word matches guesses
        if(underscroe.join("") == choosenCar) {
            alert("YOU WIN!!!!")
        }
    
    else {
        wrongGuess.push(keyWord);
    }
        


    }
});


generateUnderscor();