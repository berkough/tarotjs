import { TableSpread } from './scenes/tablespread.js';

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    mode: Phaser.Scale.FIT,
    pixelArt: false,
    scene: TableSpread,

});

window.game = game;