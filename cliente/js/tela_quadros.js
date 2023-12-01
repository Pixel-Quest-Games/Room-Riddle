// eslint-disable-next-line no-undef
export default class quadros extends Phaser.Scene {
  constructor () {
    super('quadros')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('telaquadros', '../assets/imagens/tela_en11.png')
  }

  create() {
    this.add.image(400, 225, 'telaquadros')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('quadros')
        this.game.scene.start('sala_m3')
      })
  }

  update() {

  }
}
