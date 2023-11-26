// eslint-disable-next-line no-undef
export default class papel5 extends Phaser.Scene {
  constructor () {
    super('tela_papel5')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papel5', '../assets/imagens/papel_bandeiras.png')
  }

  create() {
    // eslint-disable-next-line no-undef
    this.add.image(400, 225, 'papel5')

    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel5')
        this.game.scene.start('sala_m2')
      })
  }

  update() {

  }
}
