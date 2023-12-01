// eslint-disable-next-line no-undef
export default class telapapel3 extends Phaser.Scene {
  constructor () {
    super('tela_papel3')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papel3', '../assets/imagens/papel_en3.png')
  }

  create() {
    this.load.image(400, 225, 'papel3')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel')
        this.game.scene.start('sala_m1')
      })
  }

  update() {

  }
}
