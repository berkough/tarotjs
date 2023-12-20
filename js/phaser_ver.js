import {Phaser} from '../node_modules/phaser/dist/phaser';
import { TAROTDECK } from './tarot';

class tableSpread extends Phaser.Scene {
    constructor(){
        super();
    }
    preload(){
        const deck = new TAROTDECK();
        deck.getDeck();
        
        console.log(deck);

        this.load.image('cardback', '../cards/CardBack.jpg');
        
        //Load the Major Arcana images.
        for (let i = 0; i < 21; i++){
            let cardName = `${deck._deck[i].Place}-${deck._deck[i].Trump}`
            this.load.image(cardName, cardName+'.jpg');
        }

        //Load the Minor Arcana images.
        for (let i = 22; i < 77; i++){
            let cardName = `${deck._deck[i]}-${deck._deck[i].Place}`;
            this.load.image(cardName, cardName+'.jpg');
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