// eslint-disable-next-line no-undef
export default class telacaixa extends Phaser.Scene {
  constructor () {
    super('tela_caixa')
  }

  preload() {
    this.load.image('caixaf', '../assets/imagens/tela_caixa.png')
    this.load.image('caixaa', '../assets/imagens/tela_caixaa.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('osso', '../assets/imagens/osso.png')
  }

  create() {
    this.add.image(400, 225, 'caixaf')
    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.add.image(400, 225, 'caixaa')
        this.add.image(400, 340, 'osso')
        this.add.image(400, 400, 'seta_down')
          .setInteractive()
          .on('pointerdown', () => {
            this.game.scene.stop('tela_caixa')
            this.game.scene.start('sala_m4')
          })
      })
  }

  update() { }
}
