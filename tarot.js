/*
* A basic library for creating a tarot deck and doing various things to it like shuffling or 
* pulling cards in certain orders or quanitites to be placed in spreads. Eventually I would
* also like to incorporate some sort of wiki-like functionality or allow the cards pulled in 
* spreads to be hovered over and linked to their relevant passages in A.E. Waite's Illustrated 
* Key of the Tarot.
*/

const majorArcana = [{Value:'0',Trump:'Fool'},{Value:'I',Trump:'Magician'},
    {Value:'II',Trump:'High Priestess'},{Value:'III',Trump:'Empress'},{Value:'IV',Trump:'Emperor'},
    {Value:'V',Trump:'Heirophant'},{Value:'VI',Trump:'Lovers'},{Value:'VII',Trump:'Chariot'},
    {Value:'VIII',Trump:'Strength'},{Value:'IX',Trump:'Hermit'},{Value:'X',Trump:'Wheel of Fortune'},
    {Value:'XI',Trump:'Justice'},{Value:'XII',Trump:'Hanged Man'},{Value:'XIII',Trump:'Death'},
    {Value:'XIV',Trump:'Temperance'},{Value:'XV',Trump:'Devil'},{Value:'XVI',Trump:'Tower'},
    {Value:'XVII',Trump:'Star'},{Value:'XVIII',Trump:'Moon'},{Value:'XIX',Trump:'Sun'},
    {Value:'XX',Trump:'Judgement'},{Value:'XXI',Trump:'Universe'}];

const minorValues = ['Ace','II','III','IV','V','VI','VII','VIII','IX','X',
    'Page','Knight','Queen','King'];

const suits = ['Cups','Swords','Wands','Pentacles'];

/*
* The deck constant is a bit like a class... But doesn't have anything that defines it
* other than the fact that it stores some functions. The "deck" itself doesn't have a 
* constructor because it will be used by other variables depending on the use. Might convert
* to a class later...
*/
const DECK = {
    getDeck(){
        let _deck = [];
        for (trump of majorArcana){
            _deck.push(trump);
        }
        for (let i = 0; i < suits.length; i++){
            for (let x = 0; x < minorValues.length; x++){
                let minorArcana = {
                    Value: minorValues[x],
                    Suit: suits[i]
                };
                _deck.push(minorArcana);
            }
        }
        return _deck;
    },
    shuffle(_deck){
        for (i = 0; i < (Math.floor(Math.random()*10000)); i++){
            let one = Math.floor(Math.random()*_deck.length);
            let two = Math.floor(Math.random()*_deck.length);
            let three = _deck[one];
            _deck[one] = _deck[two];
            _deck[two] = three;
        }
    },
    splitDeck(_deck){
        let half = _deck.length / 2;
        return firstHalf = _deck.splice(0,half), secondHalf = _deck.splice(half,_deck.length);        
    }
}

/*
 * Implementing the game of War using a tarot deck. This is an exercise  in manipulating the deck.
 */

class Player {
    constructor(){
        this.winner = null;
        this.points;
    }
    flipACard(pile){
        pile.pop();
    }
    takeCards(){

    }
}

const playerOne = new Player;
const playerTwo = new Player;

class Game {
    constructor(){
        this.gameState;
    }
    start(){
        this.gameState = 1;
        let deck = DECK.getDeck();
        DECK.shuffle(deck);
        DECK.splitDeck(deck);
        this.turn();
        if(this.gameState = 3){

        }
    }
    turn(){
        if(playerOne.pile  ){
            
        } else if (playerTwo.winner = true){
            
        }
    }
}

