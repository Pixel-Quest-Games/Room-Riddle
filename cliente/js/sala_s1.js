export default class sala_s1 extends Phaser.Scene {

  constructor () {
    super('sala_s1')
  }

  preload () {
    this.load.image('parede_s1', '../assets/imagens/background1.png')
    this.load.image('porta_final', '../assets/imagens/porta_final.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'parede_s1')
    this.add.image(400, 323, 'porta_final')
  }

  update () { }

}