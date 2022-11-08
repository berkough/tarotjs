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
        
        this.majorArcana = [{Place:'0',Trump:'Fool'},{Place:'I',Trump:'Magician'},
        {Place:'II',Trump:'High Priestess'},{Place:'III',Trump:'Empress'},{Place:'IV',Trump:'Emperor'},
        {Place:'V',Trump:'Heirophant'},{Place:'VI',Trump:'Lovers'},{Place:'VII',Trump:'Chariot'},
        {Place:'VIII',Trump:'Strength'},{Place:'IX',Trump:'Hermit'},{Place:'X',Trump:'Wheel of Fortune'},
        {Place:'XI',Trump:'Justice'},{Place:'XII',Trump:'Hanged Man'},{Place:'XIII',Trump:'Death'},
        {Place:'XIV',Trump:'Temperance'},{Place:'XV',Trump:'Devil'},{Place:'XVI',Trump:'Tower'},
        {Place:'XVII',Trump:'Star'},{Place:'XVIII',Trump:'Moon'},{Place:'XIX',Trump:'Sun'},
        {Place:'XX',Trump:'Judgement'},{Place:'XXI',Trump:'Universe'}];
        
        this.minorPlaces = ['Ace','II','III','IV','V','VI','VII','VIII','IX','X',
        'Page','Knight','Queen','King'];
        
        this.suits = ['Cups','Swords','Wands','Pentacles'];
    }

    getDeck(){
        for (let i = 0; i < this.majorArcana.length; i++){
            this._deck.push(this.majorArcana[i]);
        }
        for (let i = 0; i < this.suits.length; i++){
            for (let x = 0; x < this.minorPlaces.length; x++){
                let minorArcana = {
                    Place: this.minorPlaces[x],
                    Suit: this.suits[i]
                };
                this._deck.push(minorArcana);
            }
        }
        return this._deck;
    }
    shuffle(input){
        for(let i = 0; i < (Math.floor(Math.random()*10000)); i++){
            let one = Math.floor(Math.random()*input.length);
            let two = Math.floor(Math.random()*input.length);
            let three = input[one];
            input[one] = input[two];
            input[two] = three;
        }
        return input;
    }
    splitDeck(){
        let half = Math.ceil(this._deck.length) / 2;
        return this.firstHalf = this._deck.slice(0,half), this.secondHalf = this._deck.slice(half,this._deck.length);        
    }
}

/*
 * Implementing the game of War using the tarot deck. This is an exercise  in manipulating the deck.
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
        this.deck = new DECK();
    }
    start(){
        this.deck.getDeck();
        this.deck.shuffle(this.deck._deck);
        this.deck.splitDeck();

        this.playerOne = new Player(this.deck.firstHalf);
            console.log(this.playerOne.deck);
        this.playerTwo = new Player(this.deck.secondHalf);
            console.log(this.playerTwo.deck);
        
        this.turn();

    }
    turn(){
        console.log(this.playerOne.deck[0]);
        this.playerOne.flipCard();
        console.log(this.playerOne.deck[0]);

        console.log(this.playerTwo.deck[0]);
        this.playerTwo.flipCard();
        console.log(this.playerTwo.deck[0]);
    }
}

let newGame = new Game();
newGame.start();