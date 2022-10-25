/*
A basic library for creating a tarot deck and doing various things to it like shuffling or 
pulling cards in certain orders or quanitites to be placed in spreads. Eventually I would
also like to incorporate some sort of wiki-like functionality or allow the cards pulled in 
spreads to be hovered over and linked to their relevant passages in A.E. Waite's Illustrated 
Key of the Tarot.
*/
let majorArcana = [{Value:'0',Trump:'Fool'},{Value:'I',Trump:'Magician'},
    {Value:'II',Trump:'High Priestess'},{Value:'III',Trump:'Empress'},{Value:'IV',Trump:'Emperor'},
    {Value:'V',Trump:'Heirophant'},{Value:'VI',Trump:'Lovers'},{Value:'VII',Trump:'Chariot'},
    {Value:'VIII',Trump:'Strength'},{Value:'IX',Trump:'Hermit'},{Value:'X',Trump:'Wheel of Fortune'},
    {Value:'XI',Trump:'Justice'},{Value:'XII',Trump:'Hanged Man'},{Value:'XIII',Trump:'Death'},
    {Value:'XIV',Trump:'Temperance'},{Value:'XV',Trump:'Devil'},{Value:'XVI',Trump:'Tower'},
    {Value:'XVII',Trump:'Star'},{Value:'XVIII',Trump:'Moon'},{Value:'XIX',Trump:'Sun'},
    {Value:'XX',Trump:'Judgement'},{Value:'XXI',Trump:'Universe'}];
let suits = ['cups','swords','wands','pentacles'];
let minorValues = ['Ace','II','III','IV','V','VI','VII','VIII','IX','X',
    'Page','Knight','Queen','King'];

/** This function creates a deck from the above variables. */
function getDeck(){
    let deck = [];
    for (trump of majorArcana){
        deck.push(trump);
    }
    for (let i = 0; i < suits.length; i++){
        for (let x = 0; x < minorValues.length; x++){
            let minorArcana = {
                Value: minorValues[x],
                Suit: suits[i]
            };
            deck.push(minorArcana);
        }
    }
    return deck;
}
let newDeck = getDeck();


function shuffle(deck){
    for (i = 0; i < (Math.floor(Math.random()*1000)); i++){
        let one = Math.floor(Math.random()*deck.length);
        let two = Math.floor(Math.random()*deck.length);
        let three = deck[one];
        deck[one] = deck[two];
        deck[two] = three;
    }
    return;
}
shuffle(newDeck);
console.log(newDeck[0],newDeck[1],newDeck[2],newDeck[3]);

let spreadNum = [3, 5, 12];
let spread =  {Value: 3, Name:'Three Card', Value: 5, Name:'Cross', };

/** This function will take parameters needs for certain spreads.*/
function createSpread(spreadNum,){
    // May want a function that calls the properties of a specific spread.
    // Should take a number of cards used and other attributes of the spread.
}