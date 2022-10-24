class Letter {
    constructor(guessLetter){
        this.char = guessLetter;
        // if guessLetter is not a letter or a number this.visible is true
        this.visible = (! (/^[A-Za-z0-9]*$/.test(guessLetter)));
        //True  not a letter or number
        //False is a letter or a number
    }

    toString(){
        return this.visible ? this.char : "_";
    }

    guess(guessVar) {
        // if guess var is equal to guessLetter return true
        // if not return false
        let result = (this.char === guessVar); // true or false
        return result;
        return (this.char === guessVar);
    }

    getSolution(){
        // getSolution returns character
        return this.char;
    }
  
}

module.exports = Letter;
