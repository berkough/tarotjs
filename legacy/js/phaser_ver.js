import { TAROTDECK } from './tarot.js';

/**
 * This alignment grid was taken from William Clarkson
 * https://phasergames.com/scaling-games-in-phaser-3/
 */
class AlignGrid {
    constructor(config){
        if (!config.scene){
            console.log("Missing Scene!");
            return;
        }

        if (!config.rows){
            config.rows = 3;
        }

        if (!config.cols){
            config.cols = 3;
        }

        if (!config.width){
            config.width = game.config.width;
        }

        if (!config.height){
            config.height = game.config.height;
        }
        this.h = config.height;
        this.w = config.width;
        this.rows = config.rows;
        this.cols = config.cols;
        this.scene = config.scene;
        this.cw = this.w / this.cols;
        this.ch = this.h / this.rows;
    }
    show(a = 1){
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(4, 0xff0000, a);

        for (let i = 0; i < this.w; i+= this.cw){
            this.graphics.moveTo(i,0);
            this.graphics.lineTo(i, this.h);
        }

        for (let i = 0; i < this.h; i+= this.ch){
            this.graphics.moveTo(0,i);
            this.graphics.lineTo(this.w,i);
        }
        this.graphics.strokePath();
    }
    showNumbers(a = 1){
        this.show(a);
        let n = 0;
        for (let i = 0; i < this.rows; i++){
            for (let j = 0; j < this.cols; j++){
                let numText = this.scene.add.text(0,0,n,{
                    color: 'red',
                });
                numText.setOrigin(0.5, 0.5);
                this.placeAt(j, i, numText);
                n++;
            }
        }
    }
    placeAt(xx,yy,obj){
        let x2 = this.cw * xx + this.cw / 2;
        let y2 = this.ch * yy + this.ch / 2;
        obj.x = x2;
        obj.y = y2;
    }
    placeAtIndex(index, obj){
        let yy = Math.floor(index / this.cols);
        let xx = index - (yy * this.cols);
        this.placeAt(xx, yy, obj);
    }

}

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
        this.aGrid = new AlignGrid({'scene': this, 'cols': 10, 'rows': 10});
        this.aGrid.show();
        this.aGrid.showNumbers();

        this.cards = this.add.image(0,0,'cardback');
        this.aGrid.placeAtIndex(18,this.cards);
        
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    scene: tableSpread,

});