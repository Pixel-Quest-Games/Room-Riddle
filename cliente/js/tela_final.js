export default class tela_final extends Phaser.Scene {

  constructor () {
    super('tela_final')
  }

  preload () {
    this.load.image('background', '../assets/imagens/you_win.png')
  }

  create () {
    this.add.image(400, 225, 'background')
  }

  update () { }

}