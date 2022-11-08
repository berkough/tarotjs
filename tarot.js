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
        
        this.majorArcana = [{Place:'0',Trump:'Fool', Value: 15},{Place:'I',Trump:'Magician', Value: 16},
        {Place:'II',Trump:'High Priestess', Value: 17},{Place:'III',Trump:'Empress', Value: 18},{Place:'IV',Trump:'Emperor', Value: 19},
        {Place:'V',Trump:'Heirophant', Value: 20},{Place:'VI',Trump:'Lovers', Value: 21},{Place:'VII',Trump:'Chariot', Value: 22},
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
        let tempDeck = [];
        for (let i = 0; i < this.majorArcana.length; i++){
            this._deck.push(this.majorArcana[i]);
            tempDeck.push(this.majorArcana[i]);
        }
        for (let i = 0; i < this.suits.length; i++){
            for (let x = 0; x < this.minorPlaces.length; x++){
                let minorArcana = {
                    Place: this.minorPlaces[x],
                    Suit: this.suits[i]
                };
                this._deck.push(minorArcana);
                tempDeck.push(minorArcana);
            }
        }
        console.log('This is the original deck before being shuffled. \n',tempDeck);
        return this._deck;
    }
    shuffle(){
        for(let i = 0; i < (Math.floor(Math.random()*10000)); i++){
            let one = Math.floor(Math.random()*this._deck.length);
            let two = Math.floor(Math.random()*this._deck.length);
            let three = this._deck[one];
            this._deck[one] = this._deck[two];
            this._deck[two] = three;
        }
        return this._deck;
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
        return this.deck.Value;
    }
}

class Game {
    constructor(){
        this.deck = new DECK();
        this.winner = false;
    }
    start(){
        this.deck.getDeck();
        this.deck.shuffle();
        console.log('This is the shuffled deck. \n',this.deck._deck);
        this.deck.splitDeck();

        this.playerOne = new Player(this.deck.firstHalf);
            console.log(this.playerOne.deck);
        this.playerTwo = new Player(this.deck.secondHalf);
            console.log(this.playerTwo.deck);
        
        this.turn();

    }
    turn(){
        console.log(this.playerOne.flipCard());
        console.log(this.playerTwo.flipCard());
    }
}

let newGame = new Game();
newGame.start();