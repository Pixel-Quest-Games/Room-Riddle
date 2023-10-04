// eslint-disable-next-line no-undef
export default class cofreaberto extends Phaser.Scene {
  constructor () {
    super('cofre_aberto')
  }

  preload () {
    this.load.image('background', '../assets/imagens/you_win.png')
  }

  create () {
    this.add.image(400, 225, 'background')
  }

  update () { }
}
