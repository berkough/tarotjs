import { TAROTDECK } from './tarot.js';

class tableSpread extends Phaser.Scene {
    constructor(){
        super('tableSpread');
    }
    preload(){
        const deck = new TAROTDECK();
        deck.getDeck();

        //Load the image for the "Deck" representation.
        this.load.image('cardback', '../cards/CardBack.jpg');
        
        //Load the Major Arcana images.
        for (let i = 0; i < 21; i++){
            let cardName = `${deck._deck[i].Place}-${deck._deck[i].Trump}`
            this.load.image(cardName, '../cards/'+cardName+'.jpg');
        }

        //Load the Minor Arcana images.
        for (let i = 22; i < 77; i++){
            let cardName = `${deck._deck[i].Place}-${deck._deck[i].Suit}`;
            this.load.image(cardName, '../cards/'+cardName+'.jpg');
        }

    }
    create(){

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: tableSpread,

}
const game = new Phaser.Game(config);