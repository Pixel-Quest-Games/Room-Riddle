export default class abertura_jogo extends Phaser.Scene {

  constructor () {
    super('abertura_jogo')
  }

  preload () {
    this.load.image('parede_s1', '../assets/imagens/background1.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'parede_s1')
  }

  update () { }

}