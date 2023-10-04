// eslint-disable-next-line no-undef
export default class telafinal extends Phaser.Scene {
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
