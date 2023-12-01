// eslint-disable-next-line no-undef, camelcase
export default class tela_papelf extends Phaser.Scene {
  constructor () {
    super('tela_papelf')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papelf', '../assets/imagens/papel_codigofinal.png')
  }

  create() {
    this.add.image(400, 225, 'papelf')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papelf')
        this.game.scene.start('sala_m1')
      })
  }

  update() {
  }
}
