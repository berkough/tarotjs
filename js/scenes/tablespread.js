import { TAROTDECK } from '../utils/tarot.js';
import { AlignGrid } from '../utils/aligngrid.js';

export class TableSpread extends Phaser.Scene {
    constructor(){
        super();
    }
    preload(){
        const deck = new TAROTDECK();
        deck.getDeck();

        //Load the image for the "Deck" representation.
        this.load.image('cardback', '../../cards/CardBack.jpg');
        
        //Load the Major Arcana images.
        for (let i = 0; i < 21; i++){
            let cardName = `${deck._deck[i].Place}-${deck._deck[i].Trump}`
            this.load.image(cardName, '../../cards/'+cardName+'.jpg');
        }

        //Load the Minor Arcana images.
        for (let i = 22; i < 77; i++){
            let cardName = `${deck._deck[i].Place}-${deck._deck[i].Suit}`;
            this.load.image(cardName, '../../cards/'+cardName+'.jpg');
        }

    }
    create(){
        this.aGrid = new AlignGrid({'scene': this, 'cols': 10, 'rows': 10});
        this.aGrid.show();
        this.aGrid.showNumbers();

        this.cards = this.add.image(0,0,'cardback');
        this.aGrid.placeAtIndex(18,this.cards);
        
    }
}