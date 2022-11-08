/*
* A basic library for creating a tarot deck and doing various things to it like shuffling or 
* pulling cards in certain orders or quanitites to be placed in spreads. Eventually I would
* also like to incorporate some sort of wiki-like functionality or allow the cards pulled in 
* spreads to be hovered over and linked to their relevant passages in A.E. Waite's Illustrated 
* Key of the Tarot.
*/

class DECK {
    constructor(){
        this._deck = [];
        
        this.majorArcana = [{Value:'0',Trump:'Fool'},{Value:'I',Trump:'Magician'},
        {Value:'II',Trump:'High Priestess'},{Value:'III',Trump:'Empress'},{Value:'IV',Trump:'Emperor'},
        {Value:'V',Trump:'Heirophant'},{Value:'VI',Trump:'Lovers'},{Value:'VII',Trump:'Chariot'},
        {Value:'VIII',Trump:'Strength'},{Value:'IX',Trump:'Hermit'},{Value:'X',Trump:'Wheel of Fortune'},
        {Value:'XI',Trump:'Justice'},{Value:'XII',Trump:'Hanged Man'},{Value:'XIII',Trump:'Death'},
        {Value:'XIV',Trump:'Temperance'},{Value:'XV',Trump:'Devil'},{Value:'XVI',Trump:'Tower'},
        {Value:'XVII',Trump:'Star'},{Value:'XVIII',Trump:'Moon'},{Value:'XIX',Trump:'Sun'},
        {Value:'XX',Trump:'Judgement'},{Value:'XXI',Trump:'Universe'}];
        
        this.minorValues = ['Ace','II','III','IV','V','VI','VII','VIII','IX','X',
        'Page','Knight','Queen','King'];
        
        this.suits = ['Cups','Swords','Wands','Pentacles'];
    }
    getDeck(){
        for (let i = 0; i < this.majorArcana.length; i++){
            this._deck.push(this.majorArcana[i]);
        }
        for (let i = 0; i < this.suits.length; i++){
            for (let x = 0; x < this.minorValues.length; x++){
                let minorArcana = {
                    Value: this.minorValues[x],
                    Suit: this.suits[i]
                };
                this._deck.push(minorArcana);
            }
        }
        return this._deck;
    }
    shuffle(inputDeck){
        for(let i = 0; i < (Math.floor(Math.random()*10000)); i++){
            let one = Math.floor(Math.random()*inputDeck.length);
            let two = Math.floor(Math.random()*inputDeck.length);
            let three = inputDeck[one];
            inputDeck[one] = inputDeck[two];
            inputDeck[two] = three;
        }
        return inputDeck;
    }
    splitDeck(){
        let half = this._deck.length / 2;
        return this.firstHalf = this._deck.splice(0,half), this.secondHalf = this._deck.splice(half,_deck.length);        
    }
}
let newDeck = new DECK();
newDeck.getDeck();

console.log(newDeck._deck);
newDeck.shuffle(newDeck._deck);

console.log(newDeck._deck);

//DECK.shuffle(newDeck);
//DECK.splitDeck(newDeck);
//console.log(DECK.firstHalf);

/*
 * Implementing the game of War using a tarot deck. This is an exercise  in manipulating the deck.
 */

class Player {
    constructor(deck){
        this.deck = deck;
    }
    flipCard(){
        this.deck.shift();
    }
}

class Game {
    constructor(){
    }
    start(){
        this.deck = new DECK();
        this.deck.shuffle();
        this.deck.splitDeck(this.deck);

        this.playerOne = new Player(this.deck.firstHalf);
            console.log(this.playerOne);
        this.playerTwo = new Player(this.deck.secondHalf);
            console.log(this.playerTwo);
        
        this.turn();
    }
    turn(){
        while (this.playerOne.length != 0 || this.playerTwo.length != 0 ){
            let flip1 = this.playerOne.flipCard();
            let flip2 = this.playerTwo.flipCard();
            if(flip1 > flip2){
                playerOne.push(flip1, flip2);
            } else if (flip2 > flip1){
                playerTwo.push(flip1, flip2);
            }
    }
        return;
    }
}

//let newGame = new Game();
//console.log(newGame.start());