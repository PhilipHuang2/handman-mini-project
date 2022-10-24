const Letter = require("./Letter");

class Word {
    //Word Class creates an array of Letter Objects
    constructor(letters){
        this.letters = letters.split("").map(singleLetter => new Letter(singleLetter));
        // given a string letters
        // split it into an array called letters
        // map that array where 
        // where each character from letters array
        // is put into a Letter Object and pushed into letters Array
    }

    guessLetter(guess) {
        // returns true or false
        // for of loop
        // for in loop
        let found = false;
        this.letters.forEach(element => {
            if(element.guess(guess))
            {   
                found = true; 
                element.visible = true;
            }
                
        });
        return found;
    }
    // "returns true if all letters are correct"
    // "returns false if at least one letter is incorrect"
    guessedCorrectly(){
        for(let i = 0; i < this.letters.length; i++){
            if(this.letters[i].visible == false)
                console.log("entered true in ");
                return false;
        }
        return true;
    }
}

module.exports = Word;
