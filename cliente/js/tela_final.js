// eslint-disable-next-line no-undef
export default class telafinal extends Phaser.Scene {
  constructor () {
    super('tela_final')
  }

  preload () {
    this.load.image('fim', '../assets/imagens/you_win.png')
    this.load.image('botao_login', '../assets/imagens/botao_login.png')
  }

  create () {
    this.add.image(400, 225, 'fim')
    this.add.image(400, 380, 'botao_login')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_final')
        this.game.scene.start('recompensa')
      })
  }

  update () { }
}
