import { Table } from './scenes/table.js';
import { Menu } from './scenes/menu.js';

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    mode: Phaser.Scale.FIT,
    pixelArt: false,
    scene: Table, Menu,

});

window.game = game;