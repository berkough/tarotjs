import { TAROTDECK } from "../utils/tarot.js";
import { AlignGrid } from "../utils/aligngrid.js";

export class Table extends Phaser.Scene {
  constructor() {
    super();
  }
  preload() {
    this.deck = new TAROTDECK();
    this.deck.getDeck();
    console.log(this.deck._deck.length);

    //Load the image for the "Deck" representation.
    this.load.image("cardback", "../../cards/CardBack.jpg");

    //Load the Major Arcana images.
    for (let i = 0; i < 21; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Trump}`;
      this.load.image(cardName, "../../cards/" + cardName + ".jpg");
    }

    //Load the Minor Arcana images.
    for (let i = 22; i < 77; i++) {
      let cardName = `${this.deck._deck[i].Place}-${this.deck._deck[i].Suit}`;
      this.load.image(cardName, "../../cards/" + cardName + ".jpg");
    }
  }
  create() {
    this.aGrid = new AlignGrid({ scene: this, cols: 5, rows: 10 });
    this.aGrid.showGridRef();

    let cardGroup = this.add.container();
    console.log(cardGroup);

    for (let i = 0; i < this.deck._deck.length; i++) {
      let card = this.add.sprite(-i / 4, -i / 4, "cardback");
      card.displayWidth = 100;
      card.scaleY = card.scaleX;
      cardGroup.add(card);
    }

    this.aGrid.placeAtIndex(9, cardGroup);
  }
  update() {

  }
}
