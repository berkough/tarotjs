import * as Phaser from 'phaser';
import { TAROTDECK } from '../utils/tarot';
import { AlignGrid } from '../utils/aligngrid';

export class Table extends Phaser.Scene {
  constructor() {
    super({key: 'Table'});
  }
  preload() {
    this.deck = new TAROTDECK();
    this.deck.getDeck();
    
    //Load menu icon.
    this.load.image('menu', "../../assets/icons/menu.png");

    //Load the image for the "Deck" representation.
    this.load.image('cardback', "../../assets/cards/CardBack.jpg");

    //Load the Major Arcana images.
    for (let i = 0; i < 21; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Trump}`;
      console.log(cardName);
      this.load.image(cardName, "../../assets/cards/" + cardName + ".jpg");
    }

    //Load the Minor Arcana images.
    for (let i = 22; i < 77; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Suit}`;
      console.log(cardName);
      this.load.image(cardName, "../../assets/cards/" + cardName + ".jpg");
    }
  }
  create() {  
    this.input.mouse.disableContextMenu();

    this.aGrid = new AlignGrid({ scene: this, cols: 10, rows: 12 });
    this.aGrid.showGridRef();

    let menuIcon = this.add.sprite(0,0,"menu");
    menuIcon.setInteractive();
    menuIcon.displayWidth = 30;
    menuIcon.scaleY = menuIcon.scaleX;
    if (window.innerWidth > 475){
      this.aGrid.placeAtIndex(0, menuIcon);
    } else {
      this.aGrid.placeAtIndex(1,menuIcon);
    }

    let cards = [];

    for (let i = 0; i < this.deck._deck.length; i++) {
      cards.push(this.add.sprite(0,0, 'cardback'));
      if (window.innerWidth > 475){
        cards[i].displayWidth = 120;
      } else {
        cards[i].displayWidth = (window.innerWidth - 20) / 4;
      }
      cards[i].setInteractive({draggable:true});
      cards[i].scaleY = cards[i].scaleX;
      this.aGrid.placeAtIndex(18,cards[i]);
    }

    let lastTime = 0;
    
    for (const card of cards){
      card.on('pointerdown', (pointer) => {
        let clickDelay = this.time.now - lastTime;
        lastTime = this.time.now;
        
        if (clickDelay < 350){
          this.deck.shuffleDeck();
          console.log("This is a double-click.");
          console.log(this.deck._deck);
        }
      });
    }
    
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    })

  }
}
