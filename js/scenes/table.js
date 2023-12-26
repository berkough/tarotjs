import { TAROTDECK } from "../utils/tarot.js";
import { AlignGrid } from "../utils/aligngrid.js";

export class Table extends Phaser.Scene {
  constructor() {
    super({key: 'Table'});
  }
  preload() {
    this.deck = new TAROTDECK();
    this.deck.getDeck();
    console.log(this.deck._deck);
    
    //Load menu icon.
    this.load.image("menu", "../../assets/icons/menu.png");

    //Load the image for the "Deck" representation.
    this.load.image("cardback", "../../assets/cards/CardBack.jpg");

    //Load the Major Arcana images.
    for (let i = 0; i < 21; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Trump}`;
      this.load.image(cardName, "../../assets/cards/" + cardName + ".jpg");
    }

    //Load the Minor Arcana images.
    for (let i = 22; i < 77; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Suit}`;
      this.load.image(cardName, "../../assets/cards/" + cardName + ".jpg");
    }
  }
  create() {
    this.aGrid = new AlignGrid({ scene: this, cols: 10, rows: 12 });
    this.aGrid.showGridRef();

    let menuIcon = this.add.sprite(0,0,"menu");
    menuIcon.setInteractive();
    menuIcon.displayWidth = 50;
    menuIcon.scaleY = menuIcon.scaleX;
    this.aGrid.placeAtIndex(1, menuIcon);
    //this.menuIcon.

    let cardGroup = this.add.container();
   // console.log(cardGroup);

    for (let i = 0; i < this.deck._deck.length; i++) {
      let card = this.add.sprite(-i / 6, -i / 6, "cardback");
      card.setInteractive();
      card.displayWidth = 75;
      card.scaleY = card.scaleX;
      cardGroup.add(card);
    }

    this.aGrid.placeAtIndex(18, cardGroup);
    console.log(cardGroup);

    this.input.on('gameobjectdown', function (pointer, gameObject) {
      this.deck.shuffleDeck();
      console.log(this.deck._deck);

    });
  }
}
