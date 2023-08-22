export default class cena0 extends Phaser.Scene {

    constructor () {
        super('cena0')
    }

    preload(){this.load.image('background1', './Artes/Backgrounds/background1.png')}
    
/* add image(400,225, ...) por ser pela metade, começa pelo meio */
    create(){this.imagem = this.add.image(400, 225, 'background1')}

    update(){}

}