// eslint-disable-next-line no-undef
export default class papel12 extends Phaser.Scene {
  constructor () {
    super('tela_papel12')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papel12', '../assets/imagens/tela_papel12.png')
  }

  create() {
    // eslint-disable-next-line no-undef
    this.add.image(400, 225, 'papel12')

    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel12')
        this.game.scene.start('sala_m4')
      })
  }

  update() {

  }
}
